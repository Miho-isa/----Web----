/* ローディング画面 */
const loading = document.querySelector('#loading');

window. addEventListener('load', () => {
    loading.classList.add('loaded');  // ローディングが終わった時の処理
});

// テープライター風
document.addEventListener('DOMContentLoaded', () => {
    const typewriterTextElement = document.querySelector('.miho .typewriter-text');

    if (typewriterTextElement) {
        // 元のHTMLコンテンツを保持
        const originalContent = typewriterTextElement.innerHTML;
        typewriterTextElement.innerHTML = ''; // ページ読み込み時にテキストをクリア

        // <br>タグをプレースホルダーに置き換え、純粋なテキストのみを取得
        const textToType = originalContent.replace(/<br>/g, '[br]'); // <br>を一時的に'[br]'に置換
        const characters = textToType.split(''); // 各文字と'[br]'を配列に分解

        let charIndex = 0;
        const typingSpeed = 70; // 1文字あたりの表示速度（ミリ秒）
        const lineBreakPause = 300; // <br>後のポーズ時間（ミリ秒、調整してください）
        const initialDelay = 100; // 最初の文字表示までの遅延（ミリ秒）

        function typeWriter() {
            if (charIndex < characters.length) {
                const char = characters[charIndex];

                if (char === '[' && characters[charIndex + 1] === 'b' && characters[charIndex + 2] === 'r' && characters[charIndex + 3] === ']') {
                    // '[br]'プレースホルダーを見つけたら
                    typewriterTextElement.innerHTML += '<br>'; // 実際の<br>タグを挿入
                    charIndex += 4; // '[br]'の4文字分進める
                    setTimeout(typeWriter, lineBreakPause); // 改行後のポーズ
                } else {
                    // 通常の文字の場合
                    typewriterTextElement.innerHTML += char;
                    charIndex++;
                    setTimeout(typeWriter, typingSpeed); // 通常のタイピング速度
                }
            }
        }

        // ページのリロード後すぐに表示させるためにinitialDelayを設定
        setTimeout(typeWriter, initialDelay);
    }
});


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