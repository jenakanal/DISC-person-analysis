(function() {
    'use strict';

    // ===== الأسئلة الـ 24 =====
    const questionsData = [
        { options: ['متحفظ لا يشارك', 'مؤثر', 'حذر', 'معبر'], values: ['S', 'D', 'C', 'I'] },
        { options: ['ريادى / رائد', 'سديد / دقيق', 'مُحمس / مشوق', 'مكتفى / قنوع'], values: ['D', 'C', 'I', 'S'] },
        { options: ['بازل / مضحى', 'حيوى / نشيط', 'جرئ / مقدام', 'محدد / مدقق'], values: ['S', 'I', 'D', 'C'] },
        { options: ['مجادل', 'كثير الشكوك', 'غير حاسم/ متردد', 'يصعب التكهن بتصرفاته'], values: ['D', 'C', 'S', 'I'] },
        { options: ['يقدر / يحترم الاخرين', 'منطلق غير متحفظ', 'صبور / يستمع بهدوء', 'شجاع / مقدام'], values: ['C', 'I', 'S', 'D'] },
        { options: ['مقنع للاخرين', 'يعتمد على نفسه', 'منطقى', 'لطيف مع الاخرين'], values: ['I', 'D', 'C', 'S'] },
        { options: ['حذر / حريص', 'هادى المزاج', 'حاسم', 'باعث على الفرح'], values: ['C', 'S', 'D', 'I'] },
        { options: ['يتمتع بالشعبية', 'واثق بشدة / قاطع', 'يسعى للكمال / مثالى', 'كريم / غير انانى'], values: ['I', 'D', 'C', 'S'] },
        { options: ['ينبض بالحياة', 'خجول / متحفظ', 'يسهل التعامل معه', 'عنيد / غير مرن'], values: ['I', 'C', 'S', 'D'] },
        { options: ['منظم', 'متفائل', 'مثابر', 'متأقلم / متكيف'], values: ['C', 'I', 'D', 'S'] },
        { options: ['قاسى / غير متهاون', 'متواضع', 'محب للناس / ودود', 'ثرثار'], values: ['D', 'C', 'S', 'I'] },
        { options: ['ودود / صدوق', 'دقيق الملاحظة / يقظ', 'يحب المرح', 'قوى الارادة'], values: ['S', 'C', 'I', 'D'] },
        { options: ['حلو المعشر / ساحر', 'مغامر', 'منضبط / ملتزم', 'مُهدف'], values: ['I', 'D', 'C', 'S'] },
        { options: ['متحفظ / يبكت افكاره', 'ثابت / راسخ', 'عدوانى / عنيف', 'جذاب'], values: ['C', 'S', 'D', 'I'] },
        { options: ['حماسى', 'ذو شخصية تحليلية', 'متفهم للمشاعر / متعاطف', 'عاقد العزم / واثق الخطى'], values: ['I', 'C', 'S', 'D'] },
        { options: ['يعطى اوامر / مسيطر', 'متهور / مندفع', 'بطئ', 'ناقد'], values: ['D', 'I', 'S', 'C'] },
        { options: ['ثابت / راسخ', 'قوى الشخصية', 'نشيط / مفعم بالحيوية', 'لا يحمل هما / كسول'], values: ['C', 'D', 'I', 'S'] },
        { options: ['مؤثر', 'لطيف / مُعين', 'مستقل', 'مرتب / منظم'], values: ['I', 'S', 'D', 'C'] },
        { options: ['مثالى', 'يتمتع بالشعبية', 'مُبهج', 'يتكلم باقناع وصراحة'], values: ['C', 'I', 'S', 'D'] },
        { options: ['غير صبور', 'جاد', 'مماطل', 'عاطفى'], values: ['D', 'C', 'S', 'I'] },
        { options: ['منافس', 'تلقائى / عفوى', 'مخلص / وفى', 'يراعى مشاعر الاخرين'], values: ['D', 'I', 'S', 'C'] },
        { options: ['مضحى', 'مجامل / ملاطف', 'مُقنع', 'شجاع / جرئ'], values: ['C', 'S', 'I', 'D'] },
        { options: ['يعتمد على الاخرين', 'متقلب / طائش', 'عقلانى / قليل المشاعر', 'لحوح'], values: ['S', 'I', 'C', 'D'] },
        { options: ['متسامح', 'يتمسك بالتقليد / نمطى', 'مؤثر / مُحرك / محفز', 'موجه'], values: ['S', 'C', 'I', 'D'] }
    ];

    // ===== بيانات الشخصيات =====
    const personalityDetails = {
        D: {
            name: 'القيادي',
            icon: 'fa-solid fa-flag',
            color: '#ef4444',
            cls: 'd',
            desc: 'شخصية قيادية، حازمة، تحب التحدي. تتخذ قرارات سريعة وتتحمل المسؤولية.',
            page: 'pr1Dprson.html',
            strengths: [
                'الانجاز الفورى',
                'مثابر',
                'يتحمل المسؤولية',
                'يقبل التحديات',
                'يتخذ قرارت سريعة',
                'يحل المشاكل العملية',
                'يعتمد على نفسه',
                'يعمل بجدية'
            ],
            weaknesses: [
                'لا يشعر بالاخرين',
                'يغفل المخاطر',
                'لا يهتم بالتفاصيل',
                'يطالب الاخرين بالكثير',
                'غير صبور',
                'غير مرن ولا يتنازل',
                'يرفض القيود',
                'لا يحترم السلطة'
            ],
            decision: 'اتخاذ القرار .. استعد ..صوب ..اطلق'
        },
        I: {
            name: 'الاجتماعي',
            icon: 'fa-solid fa-users',
            color: '#f59e0b',
            cls: 'i',
            desc: 'شخصية اجتماعية، محبة للمرح، مؤثرة ومقنعة. تتمتع بشعبية وتخلق جواً من التفاؤل.',
            page: 'pr1lprson.html',
            strengths: [
                'لبق ومتحدث جيد',
                'يخلق جوا مسليا',
                'يترك انطباع جيد',
                'مٌقنع',
                'حماسى',
                'متفائل',
                'كثير المودة والاصدقاء'
            ],
            weaknesses: [
                'لا يتتبع الاشياء',
                'يتصرف باندفاع',
                'يتورط كثيرا',
                'يبالغ فى تقدير النتائج',
                'لا يخوض فى التفاصيل',
                'يتلاعب بالالفاظ',
                'عدم الالتزام بالمواعيد'
            ],
            decision: 'اتخاذ القرار .. استعد ..اطلق .. صوب'
        },
        S: {
            name: 'الودود',
            icon: 'fa-solid fa-heart',
            color: '#10b981',
            cls: 's',
            desc: 'شخصية ودودة، صبورة، مخلصة. مستمع جيد وتبني علاقات قوية ومستقرة.',
            page: 'pr1Sprson.html',
            strengths: [
                'ثابت',
                'مستمع جيد',
                'يبنى العلاقات',
                'مُشجع',
                'مخلص',
                'يُعتمد عليه',
                'مقبول لدى الاخرين',
                'لديه استعداد لخدمة الاخرين'
            ],
            weaknesses: [
                'يقاوم التغير السريع',
                'متسامح بزيادة',
                'مماطل',
                'غير مباشر مع الاخرين',
                'متردد وغير حاسم',
                'يفتقد لروح المبادرة',
                'يتفادى الصراع',
                'غير ملتزم بالمواعيد'
            ],
            decision: 'اتخاذ القرار .. استعد .. استعد .. استعد'
        },
        C: {
            name: 'المدقق',
            icon: 'fa-solid fa-magnifying-glass',
            color: '#3b82f6',
            cls: 'c',
            desc: 'شخصية دقيقة، تحليلية، منظمة. تركز على التفاصيل وتتخذ قرارات مدروسة.',
            page: 'pr1Cprson.html',
            strengths: [
                'مدقق ويركز على التفاصيل',
                'يترك انطباع جيد',
                'لا يتدخل بالنزعات مباشرة',
                'منظم',
                'محدد',
                'مُحلل',
                'يُعلم ذاته'
            ],
            weaknesses: [
                'حساس للنقد',
                'يبالغ فى الاحتياط',
                'يفتقر للتقائية',
                'صارم بشكل مفرط',
                'يبحث عن العيوب',
                'شكاك',
                'كثير النقد'
            ],
            decision: 'اتخاذ القرار .. استعد ..صوب .. صوب'
        }
    };

    // ===== المتغيرات =====
    let answers = {};
    const totalQuestions = questionsData.length;
    const container = document.getElementById('questionsContainer');
    const resultArea = document.getElementById('resultArea');
    const questionsWrapper = document.getElementById('questionsWrapper');
    const answeredSpan = document.getElementById('answeredCount');
    const progressFill = document.getElementById('progressFill');

    // ===== عناصر المودال =====
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const strengthsList = document.getElementById('strengthsList');
    const weaknessesList = document.getElementById('weaknessesList');
    const decisionText = document.getElementById('decisionText');

    // ===== بناء الأسئلة =====
    function renderQuestions() {
        let html = '';
        const classes = ['opt-d', 'opt-i', 'opt-s', 'opt-c'];
        const letters = ['D', 'I', 'S', 'C'];
        
        questionsData.forEach((q, index) => {
            const qNum = index + 1;
            html += `
                <div class="question-card" data-q="${qNum}">
                    <div class="q-number">${qNum}</div>
                    <div class="options-group">
                        ${q.options.map((opt, i) => `
                            <label class="${classes[i]}">
                                <input type="radio" name="q${qNum}" value="${q.values[i]}" />
                                ${opt}
                                <span class="letter-badge">${letters[i]}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        document.querySelectorAll('.options-group input[type="radio"]').forEach(input => {
            input.addEventListener('change', function() {
                const parentCard = this.closest('.question-card');
                const qNum = parentCard.dataset.q;
                answers[qNum] = this.value;
                updateProgress();
            });
        });
    }

    // ===== تحديث التقدم =====
    function updateProgress() {
        const count = Object.keys(answers).length;
        answeredSpan.textContent = count;
        const percent = (count / totalQuestions) * 100;
        progressFill.style.width = percent + '%';
    }

    // ===== حساب النتيجة =====
    function calculateResult() {
        if (Object.keys(answers).length < totalQuestions) {
            alert(`⚠️ الرجاء الإجابة على جميع الأسئلة (${totalQuestions} سؤالاً).`);
            return null;
        }
        const counts = { D: 0, I: 0, S: 0, C: 0 };
        for (let i = 1; i <= totalQuestions; i++) {
            const val = answers[i];
            if (val && counts.hasOwnProperty(val)) counts[val]++;
        }
        return counts;
    }

    // ===== عرض التفاصيل في المودال =====
    function showPersonalityDetails(letter) {
        const details = personalityDetails[letter];
        if (!details) return;

        modalTitle.innerHTML = `
            <i class="${details.icon}" style="color:${details.color};"></i>
            <span style="color:${details.color};">الشخص ${details.name}</span>
        `;

        strengthsList.innerHTML = details.strengths.map(item => 
            `<li><i class="fas fa-check" style="color:#10b981;"></i> ${item}</li>`
        ).join('');

        weaknessesList.innerHTML = details.weaknesses.map(item => 
            `<li><i class="fas fa-times" style="color:#ef4444;"></i> ${item}</li>`
        ).join('');

        decisionText.textContent = details.decision;

        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // ===== إغلاق المودال =====
    function closeModal() {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // ===== عرض النتيجة =====
    function showResult() {
        const counts = calculateResult();
        if (!counts) return;

        const badgesHtml = Object.keys(counts).map(key => {
            const iconMap = {
                'D': 'fa-flag',
                'I': 'fa-users',
                'S': 'fa-heart',
                'C': 'fa-search'
            };
            return `
                <span class="badge ${key.toLowerCase()}">
                    <i class="fas ${iconMap[key]}"></i>
                    ${key} <span class="count">${counts[key]}</span>
                </span>
            `;
        }).join('');
        document.getElementById('scoreBadges').innerHTML = badgesHtml;

        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        let topLetters = sorted.slice(0, 2).map(item => item[0]);
        if (sorted.length > 2 && sorted[1][1] === sorted[2][1]) {
            topLetters.push(sorted[2][0]);
        }

        const cardsContainer = document.getElementById('personalityCards');
        let cardsHtml = '';
        topLetters.forEach(letter => {
            const info = personalityDetails[letter];
            if (!info) return;
            cardsHtml += `
                <a href="${info.page}" target="_blank" class="pers-card ${info.cls}" data-letter="${letter}">
                    <div class="card-title">
                        <i class="${info.icon}"></i>
                        ${info.name} (${letter})
                    </div>
                    <div class="card-desc">${info.desc}</div>
                    <div class="card-link"><i class="fas fa-arrow-left"></i> اعرف المزيد</div>
                </a>
            `;
        });
        cardsContainer.innerHTML = cardsHtml || '<div class="no-result">لم نتمكن من تحديد الشخصية</div>';

        resultArea.classList.add('show');
        questionsWrapper.classList.add('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ===== إعادة التعيين =====
    function resetTest() {
        answers = {};
        document.querySelectorAll('.options-group input[type="radio"]').forEach(input => {
            input.checked = false;
        });
        updateProgress();
        resultArea.classList.remove('show');
        questionsWrapper.classList.remove('hidden');
        document.getElementById('appContainer').scrollIntoView({ behavior: 'smooth' });
    }

    // ===== ربط الأحداث =====
    function init() {
        renderQuestions();
        updateProgress();
        
        document.getElementById('resultBtn').addEventListener('click', showResult);
        document.getElementById('resetBtn').addEventListener('click', resetTest);
        
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
                closeModal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
