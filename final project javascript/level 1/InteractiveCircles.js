function generateCircles() {
    const circleCount = document.getElementById('circleCount').value;
    const circleContainer = document.getElementById('circleContainer');

    // Clear existing circles
    circleContainer.innerHTML = '';

    // Create the specified number of circles
    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.onclick = function() { this.classList.toggle('clicked'); };
        circleContainer.appendChild(circle);
    }
}
