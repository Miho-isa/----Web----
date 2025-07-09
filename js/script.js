/* ローディング画面 */
const loading = document.querySelector('#loading');

window. addEventListener('load', () => {
    loading.classList.add('loaded');  // ローディングが終わった時の処理
});

/* Header ふんわり*/
const heading = document.querySelector('.miho');

const keyframes = {
    opacity: [0,0.9],
    translate: ['0 50px', 0],
};
const options = {
    duration: 3000,
    easing: 'ease',
};
heading.animate(keyframes, options);


/* Favorite 順番に表示*/
const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        filter: ['blur(20px)', 'blur(0)'],
    };
    const options = {
        duration: 600,
        delay: i * 300,
        fill: 'forwards',
    };
    items[i].animate(keyframes, options);
}