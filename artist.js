// 使用 IntersectionObserver 來觀察元素是否進入視窗
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當元素進入視窗時，添加 'visible' 類來觸發動畫
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 停止觀察該元素
        }
    });
}, { threshold: 0.5 }); // 當元素至少50%進入視窗時觸發

// 觀察每個設計師卡片及其內容
document.querySelectorAll('.main-artist-card, .artist-left, .artist-right, .artist-image, .profile-btn').forEach((element) => {
    observer.observe(element);
});



