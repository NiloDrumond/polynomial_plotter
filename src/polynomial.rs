use crate::{
    utils::{cmp, same_sign},
    DrawResult,
};
use plotters::prelude::*;
use plotters_canvas::CanvasBackend;
use web_sys::HtmlCanvasElement;

const INF: f64 = i32::MAX as f64 / 2.0;

pub struct Polynomial {
    coefficients: Vec<f64>,
}

impl Polynomial {
    pub fn from_coefficients(coefficients: Vec<f64>) -> Self {
        Self { coefficients }
    }
    fn get_image(&self, x: f64) -> f64 {
        let len = self.coefficients.len();
        let mut image = 0f64;
        let mut x_pot = 1f64;
        for i in 0..len {
            image += self.coefficients[i] * x_pot;
            x_pot *= x;
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

    pub fn draw(
        &self,
        canvas: HtmlCanvasElement,
        prev_polynomial: Option<Polynomial>,
    ) -> DrawResult<impl Fn((i32, i32)) -> Option<(f64, f64)>> {
        let backend = CanvasBackend::with_canvas_object(canvas).unwrap();
        let root = backend.into_drawing_area();
        let font: FontDesc = ("sans-serif", 20.0).into();

        root.fill(&WHITE)?;

        let mut max = f32::MIN as f64;
        let mut min = f32::MAX as f64;
        let data = (-500..=500).map(|x| x as f64 / 50.0).map(|x| {
            let y = self.get_image(x);
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
            let prev_data = (-500..=500).map(|x| x as f64 / 50.0).map(|x| {
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

        let max_abs = f64::max(min.abs(), max.abs());
        let min = -max_abs;
        let max = max_abs;

        let mut chart = ChartBuilder::on(&root)
            .margin(20u32)
            .caption(self.get_caption(), font)
            .x_label_area_size(30u32)
            .y_label_area_size(30u32)
            .build_cartesian_2d(-10f64..10f64, min..max)?;

        chart.configure_mesh().x_labels(3).y_labels(9).draw()?;

        chart.draw_series(series)?;

        if let Some(prev_series) = prev_series {
            chart.draw_series(prev_series)?;
        }

        root.present()?;
        return Ok(chart.into_coord_trans());
    }
}

// Roots
impl Polynomial {
    fn find_derivative(&self) -> Polynomial {
        let len = self.coefficients.len();
        if len <= 1 {
            return Self::from_coefficients(vec![]);
        }
        let mut derivative_coefficients = vec![0.0; len - 1];
        for i in 1..len {
            derivative_coefficients[i - 1] = (i as f64) * self.coefficients[i];
        }
        let lst = *derivative_coefficients.last().unwrap();
        for i in 1..len {
            derivative_coefficients[i - 1] /= lst;
        }
        return Self::from_coefficients(derivative_coefficients);
    }

    fn bsearch_root(&self, a: f64, b: f64) -> Option<f64> {
        let mut lo = a;
        let mut hi = b;
        let mut loimg = self.get_image(lo);
        let hiimg = self.get_image(hi);

        if cmp(loimg, 0.0) == 0.0 {
            return Some(lo);
        }
        if cmp(hiimg, 0.0) == 0.0 {
            return Some(hi);
        }
        if same_sign(loimg, hiimg) {
            return None;
        }

        for _ in 0..500 {
            let mid = (lo + hi) / 2.0;
            let midimg = self.get_image(mid);
            if same_sign(loimg, midimg) {
                loimg = midimg;
                lo = mid;
            } else {
                hi = mid;
            }
        }
        return Some(lo);
    }

    fn get_roots(&self) -> Vec<f64> {
        let len = self.coefficients.len();
        if len == 1 {
            if self.coefficients[0] == 0.0 {
                return vec![0.0];
            }
            return vec![];
        }

        // {-INF, ... roots ..., +INF}
        let mut derivative_roots = vec![-INF];
        derivative_roots.extend(self.find_derivative().get_roots());
        derivative_roots.push(INF);

        let mut current_roots: Vec<f64> = vec![];
        let derivatives_len = derivative_roots.len();

        for i in 1..derivatives_len {
            let prev = derivative_roots[i - 1];
            let cur = derivative_roots[i];
            let some_root = self.bsearch_root(prev, cur);
            if let Some(some_root) = some_root {
                let mut can_insert = true;
                let lst = current_roots.last();
                if let Some(lst) = lst {
                    can_insert &= cmp(some_root, *lst) != 0f64;
                }
                if can_insert {
                    current_roots.push(some_root);
                }
            }
        }
        return current_roots;
    }

    pub fn format_roots(&self) -> String {
        let value = self.get_roots();
        let mut text = "".to_string();
        for root in value {
            text += &format!("{} <br />", root);
        }
        text
    }
}
