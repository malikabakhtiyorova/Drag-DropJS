const el = document.querySelector('.box');
let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;

el.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startPosX = e.clientX;
    startPosY = e.clientY;

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mouseMove)
    })
});
