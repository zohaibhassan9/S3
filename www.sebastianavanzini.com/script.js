// Create a custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update the cursor's position
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Add a "click" animation
document.addEventListener('click', () => {
  cursor.classList.add('click-effect');
  setTimeout(() => cursor.classList.remove('click-effect'), 100);
});

// Add click effect styling
const style = document.createElement('style');
style.textContent = `
  .click-effect {
    transform: scale(1.5);
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
document.head.appendChild(style);
