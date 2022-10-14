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
    question: "Какое блюдо любит больше всего самый красивый добрый честный и харизматичный член семьи Роман Каменев?",
    answers: ["Пиво с рыбкой", "Борщ", "Мороженое Магнат", "Варённая сгущёнка"],
    correct: 2,
  },
  {
    question: "Люимое занятие Матильды",
    answers: ["Смотреть сериал про Сюркана", "Смотреть в потолок", "Кушать конфетки", "Убираться готовить и стирать"],
    correct: 3,
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
  let answerNumber = 1;
  for (answerText of questions[questionIndex]['answers']) {   // перебор каждого значения массива questions[questionIndex]['answers'] и запись его переменную answerText
    const questionTemplate =
      `<li>
          <label class="control control-radio">
            <input value="%number%" type="radio" class="answer" name="answer">
            <span>%answer%</span>
            <div class="control_indicator"></div>
          </label>
        </li>`;
    const answerHtml = questionTemplate                    // замена методом replace значением переменной answerText каждую итерацию
      .replace('%answer%', answerText)
      .replace('%number%', answerNumber);
    containerList.innerHTML += answerHtml;    // добавляем результат к предидущему a+=b === a=a+b 
    answerNumber++; // после выполнения блока кода увеличиваем значение переменной на еденицу
  }
}

function checkAnswer() {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');  //находим выбранный ответ
  if (!checkedRadio) {       // если вариант не выбран и checkedRadio == false 
    submitBtn.blur();       // разфокусируем кнопку
    return
  }
  const userAnswer = parseInt(checkedRadio.value); // значение(value) выбранного(checked) ответа переводим в число
  if (userAnswer === questions[questionIndex]['correct']) {
    console.log('yes!')
    score++;
  } else {
    console.log('no')
  }

  if (questionIndex !== questions.length - 1) {
    console.log('это не последний вопрос')
    questionIndex++;
    clearPage();
    showQuestion();

  } else {
    console.log('это последний вопрос')
    clearPage();
    showResults();
  }

}

function showResults() {
  console.log('showResults started...');
  let title, message;

  const resultsTemplate = `
  <h2 class="quiz-title">%title%</h2>
  <h3 class="summary">%message%</h3>
  <p class="result">%result%</p>
  `;

  if (score === questions.length) {
    title = '🎉👏🎉👏Поздравляем👏🎉👏🎉';
    message = 'Вы ответили правильно на все вопросы 😎👍';
  } else if (score * 100 / questions.length >= 50) {
    title = 'Вы дали такой себе результат😉';
    message = 'Ой ребята че то как то так себе👍';
  } else {
    title = 'Ну вы че блин ???😐';
    message = 'Че то смотрю вообще не шарите как мир устроен';
  }
  
  let result = `${score} из ${questions.length}`;

  const finalMessge = resultsTemplate
                          .replace('%title%', title)
                          .replace('%message%', message)
                          .replace('%result%', result);

  headerContainer.innerHTML = finalMessge;  
  submitBtn.innerHTML = 'Играть заново!';
  submitBtn.onclick = function() {
    history.go();   // обновление страницы
  }                  
}