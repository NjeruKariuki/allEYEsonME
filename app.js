document.addEventListener('mousemove', (e) => {
    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const eye = document.getElementById('eye-white');
    const rekt = eye.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg);

    const eyem = document.querySelector('.eyefg');

    eyem.style.left = 0 + mouseX/50 + 'px';
    eyem.style.top = 30 + mouseY/15 + 'px';



    //eyem.getElementsByClassName.transform = 'scale(${angleDeg})';
    //eyem.getElementsByClassName.transform = 'rotate(${90 + angleDeg}deg)';

})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx  = ex -cx;
    
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 /Math.PI;
    return deg;
}