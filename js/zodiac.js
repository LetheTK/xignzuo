// 星座数据
const zodiacInfo = {
    aries: {
        name: '白羊座',
        dateRange: '3.21-4.19',
        icon: 'images/zodiac/aries.svg'
    },
    taurus: {
        name: '金牛座',
        dateRange: '4.20-5.20',
        icon: 'images/zodiac/taurus.svg'
    },
    gemini: {
        name: '双子座',
        dateRange: '5.21-6.21',
        icon: 'images/zodiac/gemini.svg'
    },
    cancer: {
        name: '巨蟹座',
        dateRange: '6.22-7.22',
        icon: 'images/zodiac/cancer.svg'
    },
    leo: {
        name: '狮子座',
        dateRange: '7.23-8.22',
        icon: 'images/zodiac/leo.svg'
    },
    virgo: {
        name: '处女座',
        dateRange: '8.23-9.22',
        icon: 'images/zodiac/virgo.svg'
    },
    libra: {
        name: '天秤座',
        dateRange: '9.23-10.23',
        icon: 'images/zodiac/libra.svg'
    },
    scorpio: {
        name: '天蝎座',
        dateRange: '10.24-11.22',
        icon: 'images/zodiac/scorpio.svg'
    },
    sagittarius: {
        name: '射手座',
        dateRange: '11.23-12.21',
        icon: 'images/zodiac/sagittarius.svg'
    },
    capricorn: {
        name: '摩羯座',
        dateRange: '12.22-1.19',
        icon: 'images/zodiac/capricorn.svg'
    },
    aquarius: {
        name: '水瓶座',
        dateRange: '1.20-2.18',
        icon: 'images/zodiac/aquarius.svg'
    },
    pisces: {
        name: '双鱼座',
        dateRange: '2.19-3.20',
        icon: 'images/zodiac/pisces.svg'
    }
};

// 根据日期判断星座
function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'scorpio';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 'sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
}

// 查询星座函数
function queryZodiac() {
    const birthDate = document.getElementById('birthDate').value;
    if (!birthDate) {
        alert('请选择出生日期！');
        return;
    }

    const date = new Date(birthDate);
    const zodiacSign = getZodiacSign(date);
    const zodiac = zodiacInfo[zodiacSign];

    // 显示结果
    document.getElementById('zodiacResult').style.display = 'block';
    document.getElementById('zodiacIcon').src = zodiac.icon;
    document.getElementById('zodiacName').textContent = zodiac.name;
    document.getElementById('dateRange').textContent = zodiac.dateRange;
    document.getElementById('characteristics').textContent = zodiac.characteristics;
    document.getElementById('luckyColor').textContent = zodiac.luckyColor;
    document.getElementById('luckyNumber').textContent = zodiac.luckyNumber;
    document.getElementById('planet').textContent = zodiac.planet;
}

// 完整的匹配度数据
const compatibilityData = {
    aries: {
        aries: { score: 85, love: 80, friendship: 90, description: "两个充满活力的白羊座，能激发彼此的热情，但也可能争强好胜。" },
        taurus: { score: 65, love: 60, friendship: 70, description: "白羊座的活力与金牛座的稳重形成互补，但需要更多包容。" },
        gemini: { score: 90, love: 85, friendship: 95, description: "非常理想的组合，能够互相理解和支持。" },
        cancer: { score: 75, love: 70, friendship: 80, description: "白羊座的热情能温暖巨蟹座的心。" },
        leo: { score: 95, love: 90, friendship: 95, description: "天生一对，充满激情与创造力的组合。" },
        virgo: { score: 70, love: 65, friendship: 75, description: "处女座的细心能够平衡白羊座的冲动。" },
        libra: { score: 85, love: 90, friendship: 80, description: "和谐的组合，能够互相欣赏。" },
        scorpio: { score: 80, love: 85, friendship: 75, description: "充满激情的组合，但需要互相理解。" },
        sagittarius: { score: 90, love: 85, friendship: 95, description: "充满活力的组合，彼此欣赏。" },
        capricorn: { score: 65, love: 60, friendship: 70, description: "需要更多耐心和包容。" },
        aquarius: { score: 85, love: 80, friendship: 90, description: "创意十足的组合，能激发彼此潜能。" },
        pisces: { score: 75, love: 80, friendship: 70, description: "白羊座的热情能给双鱼座安全感。" }
    },
    taurus: {
        aries: { score: 65, love: 60, friendship: 70, description: "金牛座的稳重能平衡白羊座的冲动，形成互补的关系。" },
        taurus: { score: 90, love: 95, friendship: 85, description: "两个金牛座的组合，价值观相似，能互相理解支持。" },
        gemini: { score: 70, love: 65, friendship: 75, description: "需要更多耐心来沟通理解。" },
        cancer: { score: 95, love: 90, friendship: 95, description: "非常和谐的组合，能给彼此安全感。" },
        leo: { score: 75, love: 70, friendship: 80, description: "互补的组合，但需要适应对方的生活方式。" },
        virgo: { score: 90, love: 85, friendship: 95, description: "完美的搭配，都很务实稳重。" },
        libra: { score: 80, love: 85, friendship: 75, description: "能互相欣赏，但价值观可能有差异。" },
        scorpio: { score: 95, love: 90, friendship: 95, description: "深层次的吸引力，非常契合。" },
        sagittarius: { score: 65, love: 60, friendship: 70, description: "生活方式差异较大，需要多理解。" },
        capricorn: { score: 90, love: 95, friendship: 85, description: "稳定可靠的组合，很般配。" },
        aquarius: { score: 70, love: 65, friendship: 75, description: "思维方式不同，需要更多包容。" },
        pisces: { score: 85, love: 90, friendship: 80, description: "能互相照顾，形成良好互补。" }
    },
    gemini: {
        aries: { score: 90, love: 85, friendship: 95, description: "充满活力和创造力的组合。" },
        taurus: { score: 70, love: 65, friendship: 75, description: "需要更多耐心来建立理解。" },
        gemini: { score: 85, love: 80, friendship: 90, description: "思维活跃，能激发彼此的创意。" },
        cancer: { score: 75, love: 70, friendship: 80, description: "需要更多的情感交流。" },
        leo: { score: 90, love: 95, friendship: 85, description: "充满乐趣的组合，很有默契。" },
        virgo: { score: 80, love: 75, friendship: 85, description: "能互相学习和成长。" },
        libra: { score: 95, love: 90, friendship: 95, description: "完美的搭配，思维方式很合拍。" },
        scorpio: { score: 70, love: 65, friendship: 75, description: "需要更多的信任和理解。" },
        sagittarius: { score: 90, love: 85, friendship: 95, description: "充满冒险精神的组合。" },
        capricorn: { score: 75, love: 70, friendship: 80, description: "思维方式差异大，需要调适。" },
        aquarius: { score: 95, love: 90, friendship: 95, description: "思维活跃，非常合拍。" },
        pisces: { score: 80, love: 75, friendship: 85, description: "能带给对方不同的视角。" }
    },
    // ... 继续添加其他星座的匹配数据
};

// 添加吉祥话数组
const luckyMessages = [
    "近期桃花运旺盛，可能会遇到心动的人哦！",
    "最近会收到一个意想不到的好消息，要保持好心情！",
    "有贵人相助，事业即将迎来转机。",
    "近期会遇到一个改变生活的机会，要把握住哦。",
    "财运正在悄悄靠近，记得多关注身边的机会。",
    "一个重要的人即将出现在你的生活中。",
    "最近的付出将会得到意想不到的回报。",
    "好运即将降临，记得保持积极乐观的心态。",
    "一个美好的缘分正在向你靠近。",
    "近期会有意外的惊喜，要保持期待哦！",
    "你的魅力正在上升，可能会被表白哦。",
    "即将遇到一个对你很重要的人。"
];

// 修改匹配度分析函数
function analyzeCompatibility() {
    const yourMonth = parseInt(document.getElementById('yourMonth').value);
    const yourDay = parseInt(document.getElementById('yourDay').value);
    const partnerMonth = parseInt(document.getElementById('partnerMonth').value);
    const partnerDay = parseInt(document.getElementById('partnerDay').value);
    
    const yourGender = document.querySelector('input[name="yourGender"]:checked').value;
    const partnerGender = document.querySelector('input[name="partnerGender"]:checked').value;
    
    if (!yourMonth || !yourDay || !partnerMonth || !partnerDay) {
        alert('请选择完整的日期！');
        return;
    }
    
    const yourZodiac = getZodiacSign(new Date(2000, yourMonth - 1, yourDay));
    const partnerZodiac = getZodiacSign(new Date(2000, partnerMonth - 1, partnerDay));
    
    if (yourZodiac && partnerZodiac) {
        const resultElement = document.getElementById('matchingResult');
        
        // 随机选择一条吉祥话
        const randomIndex = Math.floor(Math.random() * luckyMessages.length);
        const luckyMessage = luckyMessages[randomIndex];
        
        // 生成匹配分数
        const matchScore = Math.floor(Math.random() * 41) + 60;
        const loveScore = Math.floor(Math.random() * 41) + 60;
        const friendshipScore = Math.floor(Math.random() * 41) + 60;
        
        // 生成基本匹配描述
        let description = '';
        if (yourGender === 'male' && partnerGender === 'female') {
            description = `作为${zodiacInfo[yourZodiac].name}男生和${zodiacInfo[partnerZodiac].name}女生，你们的缘分指数为${matchScore}分。`;
        } else if (yourGender === 'female' && partnerGender === 'male') {
            description = `作为${zodiacInfo[yourZodiac].name}女生和${zodiacInfo[partnerZodiac].name}男生，你们的缘分指数为${matchScore}分。`;
        } else {
            description = `${zodiacInfo[yourZodiac].name}和${zodiacInfo[partnerZodiac].name}的缘分指数为${matchScore}分。`;
        }
        
        // 显示结果
        document.getElementById('matchScore').textContent = matchScore;
        document.getElementById('matchDescription').innerHTML = `
            <div class="basic-description">${description}</div>
            <div class="lucky-message">${luckyMessage}</div>
        `;
        
        // 更新进度条
        const loveScoreElement = document.getElementById('loveScore');
        const friendshipScoreElement = document.getElementById('friendshipScore');
        
        // 先设置宽度为0，然后添加过渡动画
        loveScoreElement.style.width = '0%';
        friendshipScoreElement.style.width = '0%';
        
        setTimeout(() => {
            loveScoreElement.style.width = loveScore + '%';
            friendshipScoreElement.style.width = friendshipScore + '%';
        }, 100);
        
        // 显示弹窗
        resultElement.style.display = 'block';
    } else {
        alert('请选择正确的日期！');
    }
}

// 添加关闭弹窗的功能
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('matchingResult').style.display = 'none';
});

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    const modal = document.getElementById('matchingResult');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 点击星座卡片时自动选择
document.querySelectorAll('.zodiac-card').forEach(card => {
    card.addEventListener('click', function() {
        const zodiacSign = this.dataset.zodiac;
        if (!document.getElementById('yourZodiac').value) {
            document.getElementById('yourZodiac').value = zodiacSign;
        } else if (!document.getElementById('partnerZodiac').value) {
            document.getElementById('partnerZodiac').value = zodiacSign;
        }
    });
});

// 初始化年份选项
function initYearOptions() {
    const currentYear = new Date().getFullYear();
    const yearSelects = document.querySelectorAll('#yourYear, #partnerYear');
    
    yearSelects.forEach(select => {
        for (let year = currentYear; year >= 1900; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            select.appendChild(option);
        }
    });
}

// 更新日期选项
function updateDayOptions(type) {
    const monthSelect = document.getElementById(`${type}Month`);
    const daySelect = document.getElementById(`${type}Day`);
    const yearSelect = document.getElementById(`${type}Year`);
    
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    
    // 保存当前选中的日期
    const currentDay = daySelect.value;
    
    // 清空现有的日期选项
    daySelect.innerHTML = '<option value="">日</option>';
    
    if (month) {  // 只要选择了月份就生成对应的日期
        // 获取当月天数
        let daysInMonth;
        if (month === 2) {  // 处理2月特殊情况
            if (year) {
                // 闰年2月29天，平年28天
                daysInMonth = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28;
            } else {
                daysInMonth = 29;  // 未选年份时默认显示29天
            }
        } else if ([4, 6, 9, 11].includes(month)) {
            daysInMonth = 30;  // 4,6,9,11月是30天
        } else {
            daysInMonth = 31;  // 其他月31天
        }
        
        // 添加日期选项
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }
        
        // 如果之前选择的日期仍然有效，则恢复选择
        if (currentDay && currentDay <= daysInMonth) {
            daySelect.value = currentDay;
        }
    }
}

// 更新星座信息
function updateZodiac(type) {
    const monthSelect = document.getElementById(`${type}Month`);
    const daySelect = document.getElementById(`${type}Day`);
    
    const month = parseInt(monthSelect.value);
    const day = parseInt(daySelect.value);
    
    if (month && day) {
        const zodiacSign = getZodiacSign(new Date(2000, month - 1, day));
        const zodiac = zodiacInfo[zodiacSign];
        
        if (zodiac) {
            document.getElementById(`${type}ZodiacIcon`).src = zodiac.icon;
            document.getElementById(`${type}ZodiacIcon`).alt = zodiac.name;
        }
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化年份选项
    initYearOptions();
    
    // 为月份选择添加事件监听
    const monthSelects = ['yourMonth', 'partnerMonth'];
    monthSelects.forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            const type = id.replace('Month', '');
            updateDayOptions(type);
            updateZodiac(type);
        });
    });
    
    // 为年份选择添加事件监听
    const yearSelects = ['yourYear', 'partnerYear'];
    yearSelects.forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            const type = id.replace('Year', '');
            updateDayOptions(type);
            updateZodiac(type);
        });
    });
    
    // 为日期选择添加事件监听
    const daySelects = ['yourDay', 'partnerDay'];
    daySelects.forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            const type = id.replace('Day', '');
            updateZodiac(type);
        });
    });
}); 