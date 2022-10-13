1. создаем массив данных с вопросами и ответами const questions
2. очищаем html с помощью ф-ции claerPage (добавляем пустые строки типа headerContainer.innerHTML = '';)
3. создаем шаблоны в function showQuestion 
  const headerTemplate = `<h2 class="quiz-title">%title%</h2>`;  // %title% меняем на переменную с помощью метода replace
  const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
  headerContainer.innerHTML = title;