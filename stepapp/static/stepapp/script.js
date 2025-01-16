const shuttle = document.querySelector('.shuttle');
const cube = document.querySelector('.cube');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // حرکت شاتل با اسکرول
    const translateY = (scrollY / maxScroll) * 100; // مقدار اسکرول به درصد
    shuttle.style.transform = `translateY(${translateY}vh)`;
});

// چرخش مکعب با ماوس
document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5; // نرمال‌سازی به [-0.5, 0.5]
    const y = event.clientY / window.innerHeight - 0.5;

    const rotateX = y * -30; // مقیاس چرخش
    const rotateY = x * 60;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});