const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let painting = false;
let brushColor = "#000000"; // Color predeterminado
let brushSize = 5; // Tamaño de pincel predeterminado

// Obtener elementos del DOM
const colorPicker = document.getElementById("colorPicker");
const setColorButton = document.getElementById("setColor");
const brushSizeSlider = document.getElementById("brushSize");

// Configuración del lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = "round";
ctx.strokeStyle = brushColor;
ctx.lineWidth = brushSize;

// Funciones de dibujo
function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

// Eventos del ratón
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", endPosition);

// Evento para cambiar el color del pincel
setColorButton.addEventListener("click", () => {
    brushColor = colorPicker.value;
    ctx.strokeStyle = brushColor;
});

// Evento para cambiar el tamaño del pincel
brushSizeSlider.addEventListener("input", () => {
    brushSize = brushSizeSlider.value;
});
