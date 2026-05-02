import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Before/After Slider Logic
    const slider = document.getElementById('compare-slider');
    const afterImage = document.querySelector('.slider-image-wrapper.after');
    const sliderLine = document.getElementById('slider-line');

    if (slider && afterImage && sliderLine) {
        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            afterImage.style.width = `${value}%`;
            sliderLine.style.left = `${value}%`;
        });
    }

    // Gentle fade in for hero elements to simulate "Soul" and human touch
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});
