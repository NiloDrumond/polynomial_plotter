use crate::DrawResult;
use plotters::prelude::*;
use plotters_canvas::CanvasBackend;
use web_sys::HtmlCanvasElement;

pub struct Polynomial {
    coefficients: Vec<f32>,
}

impl Polynomial {
    pub fn from_coefficients(coefficients: Vec<f32>) -> Self {
        Self { coefficients }
    }
    fn get_image(&self, x: f32) -> f32 {
        let len = self.coefficients.len();
        let mut image = 0f32;
        for i in 0..len {
            image += self.coefficients[i] * x.powf(i as f32);
        }
        image
    }

    fn get_caption(&self) -> String {
        let mut caption = "y =".to_string();
        let len = self.coefficients.len();
        for i in 0..len {
            if i == 0 {
                caption += &format!(" {} +", self.coefficients[i]);
            } else {
                caption += &format!(" {}x^{} +", self.coefficients[i], i);
            }
        }
        caption.pop();
        caption
    }
}

pub fn draw(
    canvas: HtmlCanvasElement,
    polynomial: Polynomial,
) -> DrawResult<impl Fn((i32, i32)) -> Option<(f32, f32)>> {
    let backend = CanvasBackend::with_canvas_object(canvas).unwrap();
    let root = backend.into_drawing_area();
    let font: FontDesc = ("sans-serif", 20.0).into();

    root.fill(&WHITE)?;

    let mut chart = ChartBuilder::on(&root)
        .margin(20u32)
        .caption(polynomial.get_caption(), font)
        .x_label_area_size(30u32)
        .y_label_area_size(30u32)
        .build_cartesian_2d(-10f32..10f32, -10.2f32..10.2f32)?;

    chart.configure_mesh().x_labels(3).y_labels(3).draw()?;

    chart.draw_series(LineSeries::new(
        (-500..=500)
            .map(|x| x as f32 / 50.0)
            .map(|x| (x, polynomial.get_image(x))),
        &RED,
    ))?;

    root.present()?;
    return Ok(chart.into_coord_trans());
}
