pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

extern crate web_sys;
// A macro to provide `println!(..)`-style syntax for `console.log` logging.
#[macro_export]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

const EPS: f64 = 1e-6;

pub fn cmp(a: f64, b: f64) -> f64 {
    if (a - b).abs() < EPS {
        return 0f64;
    } else if a > b {
        return 1f64;
    } else {
        return -1f64;
    }
}

pub fn same_sign(a: f64, b: f64) -> bool {
    let mut same = false;
    same |= a.is_sign_positive() && b.is_sign_positive();
    same |= a.is_sign_negative() && b.is_sign_negative();
    return same;
}
