// 主题切换功能
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const lightIcon = themeToggle.querySelector('.light-icon');
    const darkIcon = themeToggle.querySelector('.dark-icon');
    
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcons(savedTheme === 'dark');
    } else {
        // 检查系统主题偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateThemeIcons(true);
        }
    }
    
    // 主题切换事件
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme === 'dark');
    });
    
    function updateThemeIcons(isDark) {
        lightIcon.style.display = isDark ? 'none' : 'block';
        darkIcon.style.display = isDark ? 'block' : 'none';
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
}); 