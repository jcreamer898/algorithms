const paint = (start, elapsed, duration, animate) => {
    if (elapsed < duration) {
        animate(elapsed);
        requestAnimationFrame((step) => paint(start, step - start, duration, animate));
    }
}

const translate = (el, distance = 0, direction = 'X') => {
    el.dataset.translate = el.dataset.translate || JSON.stringify({
        X: distance,
        Y: distance,
    });
    const saved = JSON.parse(el.dataset.translate);
    saved[direction] = distance;
    el.dataset.translate = JSON.stringify(saved);

    el.style.transform = `translate${direction}(${saved[direction]}px)`;
};

const moveElement = (duration, distance, direction, element) => {
    const onFrame = (
        elapsed
    ) => {
        const progress = elapsed / duration;
        const amount = progress * distance;
        
        translate(element, Math.min(amount, duration), direction);
    };

    requestAnimationFrame((step) => paint(step, 0, duration, onFrame));
}
moveElement(10000, 750, 'X', button);