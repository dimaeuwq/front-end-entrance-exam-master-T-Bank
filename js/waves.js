document.querySelectorAll('.ripple').forEach(element => {
    element.addEventListener('click', function (e) {
        // Remove any existing ripple elements
        const existingRipple = element.querySelector('.ripple-wave');
        if (existingRipple) {
            existingRipple.remove();
        }

        // Create the ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-wave');

        // Determine the size and position of the ripple
        const rect = element.getBoundingClientRect();
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        ripple.style.setProperty('--ripple-size', `${diameter}px`);
        ripple.style.setProperty('--ripple-x', `${e.clientX - rect.left - radius}px`);
        ripple.style.setProperty('--ripple-y', `${e.clientY - rect.top - radius}px`);

        // Append the ripple to the element
        element.appendChild(ripple);

        // Remove the ripple after animation
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

