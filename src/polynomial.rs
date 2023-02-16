use crate::DrawResult;
use plotters::prelude::*;
use plotters_canvas::CanvasBackend;
use web_sys::HtmlCanvasElement;

#[derive(PartialEq, PartialOrd)]
struct Coordinate(f32, f32);

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

// impl Ord for Coordinate {
//     fn cmp(&self, other: &Self) -> std::cmp::Ordering {
//
//     }
// }

pub fn draw(
    canvas: HtmlCanvasElement,
    polynomial: Polynomial,
    prev_polynomial: Option<Polynomial>,
) -> DrawResult<impl Fn((i32, i32)) -> Option<(f32, f32)>> {
    let backend = CanvasBackend::with_canvas_object(canvas).unwrap();
    let root = backend.into_drawing_area();
    let font: FontDesc = ("sans-serif", 20.0).into();

    root.fill(&WHITE)?;

    let mut max = f32::MIN;
    let mut min = f32::MAX;
    let data = (-500..=500).map(|x| x as f32 / 50.0).map(|x| {
        let y = polynomial.get_image(x);
        if y > max {
            max = y
        }
        if y < min {
            min = y
        }
        (x, y)
    });
    let series = LineSeries::new(data, &RED);

    let mut prev_series = None;
    if let Some(prev_polynomial) = prev_polynomial {
        let prev_data = (-500..=500).map(|x| x as f32 / 50.0).map(|x| {
            let y = prev_polynomial.get_image(x);
            if y > max {
                max = y
            }
            if y < min {
                min = y
            }
            (x, y)
        });
        prev_series = Some(LineSeries::new(prev_data, &GREEN));
    }


    let max_abs = f32::max(min.abs(), max.abs());
    let min = -max_abs;
    let max = max_abs;

    let mut chart = ChartBuilder::on(&root)
        .margin(20u32)
        .caption(polynomial.get_caption(), font)
        .x_label_area_size(30u32)
        .y_label_area_size(30u32)
        .build_cartesian_2d(-10f32..10f32, min..max)?;

    chart.configure_mesh().x_labels(3).y_labels(9).draw()?;

    chart.draw_series(series)?;

    if let Some(prev_series) = prev_series {
        chart.draw_series(prev_series)?;
    }

    root.present()?;
    return Ok(chart.into_coord_trans());
}
