// If you only use `npm` you can simply
// import { Chart } from "wasm-demo" and remove `setup` call from `bootstrap.js`.
class Chart { }

const canvas = document.getElementById("canvas");
const coord = document.getElementById("coord");
const status = document.getElementById("status");
const coefficients = document.getElementById("coefficients");
const addCoefficient = document.getElementById("add-coe");
const generate = document.getElementById("generate");

let chart = null;

/** Main entry point */
export function main() {
  setupUI();
  setupCanvas();

  spawnCoefficient();
  spawnCoefficient();
  spawnCoefficient();
}

/** This function is used in `bootstrap.js` to setup imports. */
export function setup(WasmChart) {
  Chart = WasmChart;
}

/** Add event listeners. */
function setupUI() {
  status.innerText = "WebAssembly loaded!";
  addCoefficient.addEventListener("click", spawnCoefficient)
  window.addEventListener("resize", setupCanvas);
  window.addEventListener("mousemove", onMouseMove);
  generate.addEventListener("click", updatePlot);
}

/** Setup canvas to properly handle high DPI and redraw current plot. */
function setupCanvas() {

  const dpr = window.devicePixelRatio || 1.0;
  const aspectRatio = canvas.width / canvas.height;
  const size = canvas.parentNode.offsetWidth * 0.8;
  canvas.style.width = size + "px";
  canvas.style.height = size / aspectRatio + "px";
  canvas.width = size;
  canvas.height = size / aspectRatio;
  updatePlot();
}

/** Update displayed coordinates. */
function onMouseMove(event) {
  if (chart) {
    var text = "Mouse pointer is out of range";

    if (event.target == canvas) {
      let actualRect = canvas.getBoundingClientRect();
      let logicX = event.offsetX * canvas.width / actualRect.width;
      let logicY = event.offsetY * canvas.height / actualRect.height;
      const point = chart.coord(logicX, logicY);
      text = (point)
        ? `(${point.x.toFixed(3)}, ${point.y.toFixed(3)})`
        : text;
    }
    coord.innerText = text;
  }
}

/** Redraw currently selected plot. */
function updatePlot() {
  let inputs = document.querySelectorAll('.coe');
  let values = Array.from(inputs).map((input) => Number(input.value));

  status.innerText = 'Rendering...';
  chart = null;
  const start = performance.now();
  chart = Chart.polynomial(canvas, values);
  const end = performance.now();
  status.innerText = `Rendered in ${Math.ceil(end - start)}ms`;
}

function spawnCoefficient() {
  let container = document.createElement("div");
  let input = document.createElement("input");
  let button = document.createElement("button");
  input.classList.add("coe")
  button.innerText = "x"
  container.appendChild(input)
  container.appendChild(button)
  button.addEventListener("click", () => {
    container.remove();
  })

  coefficients.appendChild(container)
}

