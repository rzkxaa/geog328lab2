document.addEventListener('DOMContentLoaded', function() {
    // Create the circle element
    const circle = document.createElement('div');
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.pointerEvents = 'none';
    circle.style.zIndex = '1000';
    circle.style.transition = 'background-color 0.5s ease';
    document.body.appendChild(circle);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Hide the cursor when hovering over links
    const style = document.createElement('style');
    style.innerHTML = 'a { cursor: none !important; }';
    document.head.appendChild(style);

    // Function to update the circle position and color
    function updateCircle(event) {
        circle.style.left = `${event.pageX - 10}px`;
        circle.style.top = `${event.pageY - 10}px`;
        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    // Event listener for mouse movement
    document.addEventListener('mousemove', updateCircle);
});
