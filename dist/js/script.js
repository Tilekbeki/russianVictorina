document.addEventListener('DOMContentLoaded', () => {
  const finishLayer = document.querySelector('.victorina-finish');
  const categoryAdult = document.querySelector('.victorina-category__adult');
  const categoryKids = document.querySelector('.victorina-category__kids');
  const prevBtn = document.querySelector('.controls__prev');
  const nextBtn = document.querySelector('.controls__next');
  const layerQuestion = document.querySelector('.victorina-question');
  const questionContainer = document.querySelector('.victorina-questions');
  const logo = document.querySelector('.logo');
  const kidQuestions = [
    { question: "Какой праздник отмечается в России ежегодно 12 июня?", answers: ["День России", "день дружбы", "день спорта"],correct: "День России"},
    { question: "Что такое День России?", answers: ["день рождения страны", "государственный праздник", "день проведения концертов и парадов"],correct: "государственный праздник"},
    { question: "Какое историческое событие связано с Днём России?", answers: ["принятие Декларации о государственном суверенитете России", "победа в Великой Отечественной войне над фашистской Германией", "победа в Отечественной войне 1812 года над армией Наполеона"],correct: "принятие Декларации о государственном суверенитете России"},
    { question: "Какие цвета есть на флаге России?", answers: ["белый, синий, красный", "зеленый, желтый, синий", "оранжевый, черный, красный"],correct: "белый, синий, красный"},
    { question: "Какой символ находится на Государственном гербе Российской Федерации?", answers: ["лев", "медведь", "двуглавый орёл"],correct: "двуглавый орёл"},
    { question: "Какие культурные мероприятия проводятся во время празднования Дня России?", answers: ["выставки и кинопоказы", "концерты с участием известных артистов", "всё вышеперечисленное"],correct: "всё вышеперечисленное"},
    { question: "Кто может участвовать в праздничных мероприятиях?", answers: ["все граждане России, чтобы выразить единство и гордость за нашу страну", "только дети и подростки, чтобы привлечь внимание к будущему России", "только известные политики и деятели культуры, чтобы подчеркнуть их вклад в развитие страны"],correct:"чтобы выразить единство и гордость за нашу страну"},
    { question: "Как называется государственный язык Российской Федерации?", answers: ["национальный", "российский", "русский"],correct: "русский"},
    { question: "Что означает слово «патриот»?", answers: ["умный человек", "смелый человек", "человек, любящий свою Родину, готовый на подвиг во имя Родины"],correct: "готовый на подвиг во имя Родины"},
    { question: "Какие герои ассоциируются с патриотизмом в России?", answers: ["герои Великой Отечественной войны", "герои фантастических фильмов и комиксов", "герои западных фильмов и книг"],correct: "герои Великой Отечественной войны"},
    { question: "Какие игры и занятия помогают детям развивать патриотизм и уважение к своей стране?", answers: ["экскурсии по историческим местам и музеям", "компьютерные игры и видеоигры", "спортивные занятия"],correct: "экскурсии по историческим местам и музеям"},
    { question: "Закончите пословицу: «Когда мы едины – …»", answers: ["мы всё знаем", "нас много", "мы непобедимы!"],correct: "мы непобедимы!"},
    { question: "Какие мультфильмы сняты по мотивам русских народных сказок?", answers: ["«Три богатыря»", "«Котопёс»", "«Черепашки-ниндзя»"],correct: "«Три богатыря»"},
    { question: "Какое историческое событие помогло объединить народы России?", answers: ["победа в Великой Отечественной войне", "отмена крепостного права", "освоение земель на Дальнем востоке"],correct: "победа в Великой Отечественной войне"},
    { question: "Россия – многонациональная страна. Сколько народов (национальностей) проживает на территории России?", answers: ["более 100", "более 190", "более 250"],correct: "более 190"},
    { question: "Россия – многонациональная страна, Красноярский край – многонациональный регион. Сколько народов (национальностей) проживает в Красноярском крае?", answers: ["более 30", "более 100", "более 160"],correct: "более 160"},
    { question: "Кем были построены сибирские остроги: Енисейский (1619 г.), Красноярский (1628 г.), Саянский (1717 - 1718 гг.)?", answers: ["кочевниками", "путешественниками", "казаками"],correct: "казаками"},
    { question: "Какое общее слово есть в самоназвании проживающих в нашем крае северных народов: кетов, ненцев, селькупов?", answers: ["оленевод", "рыбак", "человек"],correct: "человек"},
    { question: "Известному красноярскому писателю 1 мая 2024 года исполнилось 100 лет со дня рождения. Как его звали?", answers: ["Анатолий Чмыхало", "Алексей Черкасов", "Виктор Астафьев"],correct: "Виктор Астафьев"},
    { question: "Что общего у этих выдающихся красноярских спортсменов-борцов: Ивана Ярыгина, Бувайсара Сайтиева, Асланбека Хуштова?", answers: ["все они очень высокого роста", "они родились в одном и том же году", "все они олимпийские чемпионы"],correct: "все они олимпийские чемпионы"}
  ];
const adultQuestions = [
  { question: "Что такое День России?", answers: ["день рождения России", "государственный праздник", "день концертов и парадов"], correct: "государственный праздник" },
  { question: "В каком году 12 июня стало праздничной датой?", answers: ["1985 год", "1992 год", "1997 год"], correct: "1992 год" },
  { question: "Что из перечисленного является государственным символом Российской Федерации?", answers: ["российский рубль", "бурый медведь", "государственный герб"], correct: "государственный герб" },
  { question: "Кто является автором музыки современного государственного гимна Российской Федерации?", answers: ["Михаил Глинка", "Александр Александров", "Пётр Чайковский"], correct: "Александр Александров" },
  { question: "Как называется высший нормативный правовой акт России?", answers: ["Конституция Российской Федерации", "указ Президента Российской Федерации", "постановление Государственной Думы"], correct: "Конституция Российской Федерации" },
  { question: "Где находится географический центр России?", answers: ["возле деревни Новобайрамгулово в Учалинском районе Республики Башкортостан", "в городе Кызыле – столице Республики Тыва", "на берегу озера Виви в Эвенкийском муниципальном районе Красноярского края"], correct: "на берегу озера Виви в Эвенкийском муниципальном районе Красноярского края" },
  { question: "Какое историческое событие способствовало национальному единению России?", answers: ["Победа в Великой Отечественной войне", "открытие первой железной дороги", "реформы Петра I и модернизация страны"], correct: "Победа в Великой Отечественной войне" },
  { question: "Какую роль играет празднование Дня России в укреплении единства российского общества?", answers: ["стимулирование патриотических чувств и любви к Родине", "укрепление экономической стабильности", "поддержка и развитие образования и науки"], correct: "стимулирование патриотических чувств и любви к Родине" },
  { question: "Сколько всего субъектов (республик, краёв, областей и др.) входит в состав Российской Федерации?", answers: ["85", "89", "102"], correct: "89" },
  { question: "Какие четыре новых региона вошли в состав Российской Федерации в 2022 году?", answers: ["Донецкая Народная Республика, Луганская Народная Республика, Запорожская область, Херсонская область","Ленинградская область, Калининградская область, Республика Адыгея, Ростовская область","Донецкая Народная Республика, Республика Крым , Ненецкий автономный округ, Луганская Народная Республика"], correct: "Донецкая Народная Республика, Луганская Народная Республика, Запорожская область, Херсонская область" },
  { question: "Какие меры принимаются для сохранения и развития языков и культур различных народов России?", answers: ["открытие национальных культурных центров и школ", "запрет использования языков национальных меньшинств в общественных местах", "ограничение миграции и глобализации"], correct: "открытие национальных культурных центров и школ" },
  { question: "Как называется праздник, который отмечается ежегодно 4 ноября и посвящён событиям 1612 года?", answers: ["День народного единства", "День Победы", "День Конституции"], correct: "День народного единства" },
  { question: "Какие инициативы и проекты на местном уровне способствуют национальному единению?", answers: ["организация межнациональных мероприятий: фестивалей, ярмарок, выставок и др.", "строительство новых промышленных объектов", "развитие туризма и гостиничной инфраструктуры"], correct: "организация межнациональных мероприятий: фестивалей, ярмарок, выставок и др." },
  { question: "Россия – многонациональная страна. Сколько народов (национальностей) проживает на территории России?", answers: ["более 100", "более 190", "более 250"], correct: "более 190" },
  { question: "Россия – многонациональная страна, Красноярский край – многонациональный регион. Сколько народов (национальностей) проживает в Красноярском крае?", answers: ["более 30", "более 100", "более 160"], correct: "более 160" },
  { question: "В каком году образован Красноярский край?", answers: ["1864", "1917", "1934"], correct: "1934" },
  { question: "Какое юбилейное событие будут отмечать красноярцы в 2028 году?", answers: ["100-летие заповедника «Столбы»", "200-летие Красноярского краевого краеведческого музея", "400-летие города Красноярска"], correct: "400-летие города Красноярска" },
  { question: "Какое почётное звание за вклад в достижение Победы в Великой Отечественной войне 1941-1945 годов присвоено городу Красноярску в 2021 году?", answers: ["Город-Герой", "Город трудовой доблести", "Город воинской славы"], correct: "Город трудовой доблести" },
  { question: "Известному красноярскому писателю 1 мая 2024 года исполнилось 100 лет со дня рождения. Как его звали?", answers: ["Анатолий Чмыхало", "Алексей Черкасов", "Виктор Астафьев"], correct: "Виктор Астафьев" },
  { question: "Как звали красноярского художника – участника Великой Отечественной войны, создателя мозаичного панно «Родина-мать» на фасаде Дома дружбы народов Красноярского края?", answers: ["Тойво Ряннель", "Василий Суриков", "Евгений Кобытев"], correct: "Евгений Кобытев" }
];

  // Добавляем начальные классы для скрытия элементов
  layerQuestion.classList.add('hidden'); // Предполагаем, что у вас есть класс.hidden, который устанавливает display: none
  questionContainer.classList.add('hidden');
  let userCategory;
  let choosedCategory = 'adult';
  let currentQuestionIndex = -1;
  let userAnswers = [];

  categoryAdult.addEventListener('click', () => {
    choosedCategory = 'adult';
    categoryKids.classList.remove('victorina-category__kids_active');
    categoryAdult.classList.add('victorina-category__adult_active');
    // showQuestions(); // Функция для отображения вопросов
  });

  categoryKids.addEventListener('click', () => {
    choosedCategory = 'kids';
    categoryAdult.classList.remove('victorina-category__adult_active');
    categoryKids.classList.add('victorina-category__kids_active');
    // showQuestions(); // Функция для отображения вопросов
  });

  function showQuestions() {
    questionContainer.classList.remove('hidden');
    layerQuestion.classList.remove('hidden'); // Показываем слой вопросов
    questionContainer.innerHTML = ''; // Очищаем контейнер вопросов

    if (choosedCategory === 'adult') {
      questionContainer.innerHTML += generateHTML(adultQuestions, currentQuestionIndex); // Генерируем HTML для взрослых вопросов
    } else {
      questionContainer.innerHTML += generateHTML(kidQuestions, currentQuestionIndex); // Генерируем HTML для детей
    }

    const options = document.querySelectorAll('input[name^="answer"]');
    let lastItem;
    options.forEach((item,i)=>{
      // console.log(item.parentElement.parentElement)
      item.addEventListener('click', ()=>{
        lastItem?.toggle('chosedOption');
        item.parentElement.parentElement.classList.toggle('chosedOption');
        lastItem = item.parentElement.parentElement.classList;

        if(choosedCategory == 'kids') {
          kidQuestions[currentQuestionIndex].class = `chosedOption=${i}`;
        } 
        if(choosedCategory=='adult') {
          adultQuestions[currentQuestionIndex].class = `chosedOption=${i}`;
        }
      });
      item.addEventListener('touch', ()=>{
        item.parentElement.parentElement.classList.toggle('chosedOption');
        if(choosedCategory == 'kids') {
          kidQuestions[currentQuestionIndex].class = `chosedOption=${i}`;
        } 
        if(choosedCategory=='adult') {
          adultQuestions[currentQuestionIndex].class = `chosedOption=${i}`;
        }
      });
    });
  }

  function generateHTML(questions, index) {
    let classlist;
    const controls = document.querySelector('.controls');
    const logo = document.querySelector('.logo');
    if(questions[index].class) {
      classlist= questions[index].class.slice(-1);
    }
    if(choosedCategory=='adult' && index==9) {
      controls.style.bottom = '-50px';
      logo.style.bottom='-50px';
    } else {
      controls.style.bottom = '20px';
      logo.style.bottom='20px';
    }
    return `
      <div class="question">
        <h2>${questions[index].question}</h2>
        <ul>
        ${questions[index].answers.map((answer, i) => `<li class="${i === +classlist ? 'chosedOption' : ''}"><label><input type="radio" name="answer${index}" value="${i}"> ${answer}</label></li>`).join('')}
      </ul>
      </div>`;
  }

  function saveAnswer(option) {
    const selectedAnswer = document.querySelector(`input[name="answer${currentQuestionIndex}"]:checked`);
    
    
    let selectedValue;
    if (selectedAnswer) {
      selectedValue = parseInt(selectedAnswer.value);
      let question;
      if(choosedCategory=='kids') {
        userCategory=kidQuestions;
        question = kidQuestions[currentQuestionIndex].answers[selectedValue];
      }
      if(choosedCategory=='adult') {
        
        userCategory=adultQuestions;
        selectedValue = parseInt(selectedAnswer.value);
        question = adultQuestions[currentQuestionIndex].answers[selectedValue];
      }
      
      const correctAnswer = userCategory[currentQuestionIndex].correct; // Получаем правильный ответ для текущего вопроса
      const isCorrect = question === correctAnswer; // Сравниваем выбранный ответ с правильным
      // console.log(`то что в бвыбрал ${question}`);
      // console.log(`то что в бд ${correctAnswer}`)
      userAnswers[currentQuestionIndex] = isCorrect? 1 : 0; // Записываем 1, если ответ правильный, иначе 0
    }
  }

  function changeCounter(index){
    const counter = document.querySelector('.victorina-question__counter').querySelector('span');
    if(choosedCategory=='kids') {
      userCategory=kidQuestions;
    } else {
      userCategory=adultQuestions;
    }
    counter.textContent = `${index+1}/${userCategory.length}`;
  }

  nextBtn.addEventListener('click', () => {
    logo.style.display='block';
    // console.log(currentQuestionIndex)
    nextBtn.classList.add('controls__next_active')
    layerQuestion.style.zIndex='2';
    layerQuestion.style.opacity='1';
    prevBtn.style.opacity = 1;
    saveAnswer();
    if(choosedCategory=='kids') {
      userCategory=kidQuestions;
    } else {
      userCategory=adultQuestions;
    }
    if (currentQuestionIndex < userCategory.length - 1) {

    
      currentQuestionIndex++;
      
      showQuestions();
    } else {
      
      layerQuestion.classList.add('hidden');
      finishLayer.classList.remove('hidden');
      
      
      const counterRes = document.querySelector('.victorina-res__counter');
      counterRes.textContent = `${currentQuestionIndex+1}/${userCategory.length}`
      const input = document.getElementById("myData");
      const btn = document.querySelector('button');
      btn.addEventListener("click", function(event) {
            const sum = userAnswers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            // console.log(input.value); // Номер телефона или почта
            // console.log(choosedCategory); // Категория, которую он решил
            // console.log(sum); // Сумма баллов
    
            btn.style.display='none';
    
            // Создаем объект FormData для сборки данных формы
            let formData = new FormData();
            formData.append('phone_or_email', input.value); // Добавляем номер телефона или почту
            formData.append('category', choosedCategory); // Добавляем категорию
            formData.append('points', sum.toString()); // Добавляем сумму баллов
    
            // Отправляем данные на сервер
            
              fetch('gfg.php', {
                method: 'POST',
                body: formData,
            })
           .then(response => response.text())
           .then(data => {
                document.querySelector('.message').style.display='block';
                localStorage.setItem('tested', 'yes');
            })
           .catch(error => {
                console.error('Error:', error); // Выводим ошибку, если она произошла
            });
            
    
        
    });  
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const sum = userAnswers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // console.log(input.value); // Номер телефона или почта
        // console.log(choosedCategory); // Категория, которую он решил
        // console.log(sum); // Сумма баллов

  
      btn.style.display='none';
        // Создаем объект FormData для сборки данных формы
        let formData = new FormData();
        formData.append('phone_or_email', input.value); // Добавляем номер телефона или почту
        formData.append('category', choosedCategory); // Добавляем категорию
        formData.append('points', sum.toString()); // Добавляем сумму баллов

        // Отправляем данные на сервер
        
          fetch('gfg.php', {
            method: 'POST',
            body: formData,
        })
       .then(response => response.text())
       .then(data => {
            document.querySelector('.message').style.display='block';
        })
       .catch(error => {
            console.error('Error:', error); // Выводим ошибку, если она произошла
        });
        

    }
});
      
      // Здесь можно добавить логику для показа следующего шага или завершения теста
    }
    changeCounter(currentQuestionIndex)
  });

  prevBtn.addEventListener('click', () => {
    saveAnswer();
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestions();
      
    }
    changeCounter(currentQuestionIndex)

  });
  categoryAdult.classList.add('victorina-category__adult_active');


});
