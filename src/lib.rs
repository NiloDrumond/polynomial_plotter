use wasm_bindgen::prelude::*;
use web_sys::{HtmlCanvasElement, HtmlElement};

use crate::polynomial::Polynomial;

mod polynomial;
mod utils;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

/// Type alias for the result of a drawing function.
pub type DrawResult<T> = Result<T, Box<dyn std::error::Error>>;

/// Type used on the JS side to convert screen coordinates to chart
/// coordinates.
#[wasm_bindgen]
pub struct Chart {
    convert: Box<dyn Fn((i32, i32)) -> Option<(f64, f64)>>,
}

/// Result of screen to chart coordinates conversion.
#[wasm_bindgen]
pub struct Point {
    pub x: f64,
    pub y: f64,
}

#[wasm_bindgen]
impl Chart {
    pub fn polynomial(
        canvas: HtmlCanvasElement,
        roots_el: HtmlElement,
        coefficients: Vec<f64>,
        prev_coefficients: Option<Vec<f64>>,
    ) -> Result<Chart, JsValue> {
        utils::set_panic_hook();
        let polynomial = Polynomial::from_coefficients(coefficients);
        let mut prev_polynomial = None;
        if let Some(prev_coefficients) = prev_coefficients {
            prev_polynomial = Some(Polynomial::from_coefficients(prev_coefficients));
        }
        let map_coord = polynomial
            .draw(canvas, prev_polynomial)
            .map_err(|err| err.to_string())?;
        let roots = polynomial.format_roots();
        roots_el.set_inner_html(&roots);
        Ok(Chart {
            convert: Box::new(move |coord| map_coord(coord).map(|(x, y)| (x.into(), y.into()))),
        })
    }

    /// This function can be used to convert screen coordinates to
    /// chart coordinates.
    pub fn coord(&self, x: i32, y: i32) -> Option<Point> {
        (self.convert)((x, y)).map(|(x, y)| Point { x, y })
    }
}
