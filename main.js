const questions = [
  {
    question: "Как в простонародье называют Катерину Ульянову?",
    answers: ["Попутовшая", "Любимая", "Матильда", "Катюха"],
    correct: 3,
  },
  {
    question: "Тайное секретное домашнее имя Варвары Ульяновой?",
    answers: ["Шило в попе", "Варюндель-Хрюндель", "Пожиратель сладостей", "Искатель капюшона"],
    correct: 2,
  },
  {
    question: "Какое супер блюдо готовит лучше всего самый красивый добрый честный и харизматичный член семьи Роман Каменев?",
    answers: ["Пиво с рыбкой", "Борщ", "Мороженое Магнат", "Не знаю"],
    correct: 2,
  },
  {
    question: "Люимое занятие Матильды",
    answers: ["Смотреть сериал про Сюркана", "Смотреть в потолок", "Ходить на тренировку", "Убираться готовить и стирать"],
    correct: 1,
  },

]

// Находим элементы
const headerContainer = document.querySelector('#header');
const containerList = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

// Переменные игры
let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;


function clearPage() {
  headerContainer.innerHTML = '';
  containerList.innerHTML = '';
}

function showQuestion() {
  //вопрос
  const headerTemplate = `<h2 class="quiz-title">%title%</h2>`;   // % можно использовать любой индивидуальный и отличающийся знак
  const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
  headerContainer.innerHTML = title;

  //варианты ответов
  for (answerText of questions[questionIndex]['answers']) {
    const questionTemplate =
      `<li>
          <label class="control control-radio">
            <input value="%number%" type="radio" class="answer" name="answer">
            <span>%answer%</span>
            <div class="control_indicator"></div>
          </label>
        </li>`;
    const answerHtml = questionTemplate.replace('%answer%', answerText);
    containerList.innerHTML += answerHtml;    // добавляем результат к предидущему a+=b === a=a+b 
  }
}

function checkAnswer() {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');  //находим выбранный ответ
  console.log(checkedRadio);
  if (!checkedRadio) {       // если вариант не выбран и checkedRadio == false 
    submitBtn.blur();       // разфокусируем кнопку
    return
  }
}