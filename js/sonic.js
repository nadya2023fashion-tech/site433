


function playRutubeVideos() {
    var videosBlock = document.querySelector('.content2');
    if (!videosBlock) return;

    // 1. Плавно скроллим к блоку с видео (по центру экрана)
    videosBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 2. Включаем автовоспроизведение у всех iframe Rutube
    videosBlock.querySelectorAll('iframe').forEach(function (iframe) {
        var src = iframe.src;
        // не добавляем параметр повторно
        if (!src.includes('autoplay=1')) {
            iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
        }
    });
}


function runExistingSonic() {
    var sonic = document.getElementById('main-sonic');
    // Находим контейнер с картинками
    var contentBlock = document.querySelector('.content');

    // Сбрасываем классы анимаций, если кликнули повторно во время бега
    sonic.classList.remove('run');
    contentBlock.classList.remove('spin-active');
    void sonic.offsetWidth; // Магия для перезапуска CSS-анимации

    // Запускаем Соника и кручение картинок
    sonic.classList.add('run');
    contentBlock.classList.add('spin-active');

    // Как только анимация бега завершится, убираем эффекты
    sonic.addEventListener('animationend', function () {
        sonic.classList.remove('run');
        contentBlock.classList.remove('spin-active');
    }, { once: true });
}
