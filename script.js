document.addEventListener('DOMContentLoaded', () => {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const direction = document.getElementById('direction');
    const gradientPreview = document.getElementById('gradient-preview');
    const cssCode = document.getElementById('css-code');
    const copy = document.getElementById('copy');

    function updateGradient() {
        const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
        gradientPreview.style.background = gradient;
        cssCode.value = `background: ${gradient};`;
    }

    function copyToClipboard() {
        const gradient = `background: linear-gradient(${direction.value}, ${color1.value}, ${color2.value});`;
        navigator.clipboard.writeText(gradient).then(() => {
            alert("Gradient CSS copied to clipboard!");
        });
    }

    color1.addEventListener('input', updateGradient);
    color2.addEventListener('input', updateGradient);
    direction.addEventListener('input', updateGradient);
    copy.addEventListener('click', copyToClipboard);

    updateGradient();
});
