// 语言配置
const translations = {
    zh: {
        title: '星座配对',
        home: '首页',
        match: '匹配度分析',
        personality: '星座性格',
        explore: '探索星座的奥秘',
        subtitle: '通过专业的星座分析，了解你和TA的缘分',
        yourBirth: '你的生日',
        partnerBirth: 'TA的生日',
        male: '男生',
        female: '女生',
        year: '年',
        month: '月',
        day: '日',
        analyze: '查看匹配度',
        matchResult: '缘分匹配结果',
        loveCompat: '爱情相容性',
        friendCompat: '友情相容性',
        matchAnalysis: '星座匹配度分析',
        matchTip: '输入双方生日，开始缘分配对',
        copyright: '© 2024 星座配对. 保留所有权利.',
        // 星座名称
        aries: '白羊座',
        taurus: '金牛座',
        gemini: '双子座',
        cancer: '巨蟹座',
        leo: '狮子座',
        virgo: '处女座',
        libra: '天秤座',
        scorpio: '天蝎座',
        sagittarius: '射手座',
        capricorn: '摩羯座',
        aquarius: '水瓶座',
        pisces: '双鱼座'
    },
    en: {
        title: 'Zodiac Match',
        home: 'Home',
        match: 'Compatibility',
        personality: 'Personality',
        explore: 'Explore Zodiac Mysteries',
        subtitle: 'Discover your compatibility through professional astrology analysis',
        yourBirth: 'Your Birthday',
        partnerBirth: 'Partner\'s Birthday',
        male: 'Male',
        female: 'Female',
        year: 'Year',
        month: 'Month',
        day: 'Day',
        analyze: 'Check Compatibility',
        matchResult: 'Match Result',
        loveCompat: 'Love Compatibility',
        friendCompat: 'Friendship Compatibility',
        matchAnalysis: 'Zodiac Compatibility Analysis',
        matchTip: 'Enter both birthdays to start matching',
        copyright: '© 2024 Zodiac Match. All rights reserved.',
        // 星座名称
        aries: 'Aries',
        taurus: 'Taurus',
        gemini: 'Gemini',
        cancer: 'Cancer',
        leo: 'Leo',
        virgo: 'Virgo',
        libra: 'Libra',
        scorpio: 'Scorpio',
        sagittarius: 'Sagittarius',
        capricorn: 'Capricorn',
        aquarius: 'Aquarius',
        pisces: 'Pisces'
    }
};

// 获取浏览器语言
function getBrowserLanguage() {
    // 获取浏览器语言设置
    const browserLang = navigator.language || navigator.userLanguage;
    // 如果是中文相关语言，返回 'zh'，否则返回 'en'
    return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// 更新页面文本
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'SELECT') {
                updateSelectOptions(element, lang);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('language', lang);
    
    // 更新语言切换按钮文本
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'zh' ? 'EN' : '中';
    }
}

// 添加处理选择框选项的函数
function updateSelectOptions(select, lang) {
    const options = select.options;
    for (let i = 0; i < options.length; i++) {
        const key = options[i].getAttribute('data-i18n');
        if (key && translations[lang][key]) {
            options[i].text = translations[lang][key];
        }
    }
}

// 语言切换功能
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    // 优先使用本地存储的语言设置，如果没有则使用浏览器语言
    const savedLang = localStorage.getItem('language') || getBrowserLanguage();
    
    // 初始化语言
    updateLanguage(savedLang);
    
    // 切换语言
    langToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'zh';
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage(newLang);
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
    
    // 监听系统语言变化
    window.matchMedia('(language: zh)').addEventListener('change', (e) => {
        if (!localStorage.getItem('language')) {  // 只有在用户没有手动设置语言时才自动切换
            updateLanguage(e.matches ? 'zh' : 'en');
        }
    });
}); 