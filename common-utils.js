// Farben
const lightBlue = "#ADD8FF";
const darkBlue = "#0050FF";
const darkGrey = "#333";

// Common canvas utilities
function makeCanvasResponsive(canvasId, draw, maxWidth = 900) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas() {
        const container = canvas.parentElement;
        const containerWidth = container.clientWidth;
        const maxHeight = 450;
        
        canvas.width = Math.min(containerWidth, maxWidth);
        canvas.height = canvas.width * (maxHeight / maxWidth);
        
        draw();
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    return { canvas, ctx, resizeCanvas };
}

// Canvas drawing utilities
function drawText(ctx, x, y, text, scale = 1, color = "black", baseFontSize = 20) {
    const fontSize = Math.max(12, baseFontSize * scale);
    ctx.font = fontSize + "px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function drawRectangle(ctx, x, y, width, height, fillColor = "rgba(0,0,0,0)", lineColor = "black", dash = []) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = lineColor;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawLine(ctx, x1, y1, x2, y2, color, dash = [], lineWidth = 2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawPolygon(ctx, points, fillColor, lineColor = "#333", lineWidth = 2) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// Common quiz canvas utilities
function makeQuizCanvasResponsive(canvasId, drawFunction, maxWidth = 900) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    function resizeAndDraw() {
        const container = canvas.parentElement;
        const containerWidth = container.clientWidth;
        canvas.width = Math.min(containerWidth, maxWidth);
        canvas.height = canvas.width * 0.5;
        
        drawFunction();
    }
    
    window.addEventListener('resize', resizeAndDraw);
    resizeAndDraw();
    
    return { canvas, ctx };
}

// Common quiz interaction functions
function checkQuizAnswer(shapeName, correctAnswer) {
    const answer = Number(document.getElementById(shapeName + '-answer').value);
    const result = document.getElementById(shapeName + '-result');
    
    if (answer === correctAnswer) {
        result.style.display = 'block';
        result.style.background = '#d4edda';
        result.style.color = '#155724';
        result.style.border = '2px solid #28a745';
        result.innerHTML = '✓ Richtig! Super gemacht! 🎉';
    } else if (answer) {
        result.style.display = 'block';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
        result.style.border = '2px solid #dc3545';
        result.innerHTML = '✗ Nicht ganz richtig. Versuche es nochmal!';
    } else {
        result.style.display = 'none';
    }
}

function toggleQuizSolution(shapeName) {
    const solution = document.getElementById(shapeName + '-solution');
    solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
}

function newQuizProblem(shapeName, updateDisplayFunction) {
    getNextProblem(shapeName);
    updateDisplayFunction();
    document.getElementById(shapeName + '-answer').value = '';
    document.getElementById(shapeName + '-result').style.display = 'none';
    document.getElementById(shapeName + '-solution').style.display = 'none';
}

// Setup Enter key listener for quiz input
function setupQuizEnterKey(shapeName, checkFunction) {
    const input = document.getElementById(shapeName + '-answer');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkFunction();
        });
    }
}
