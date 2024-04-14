const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
      score: 1
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale", "Giraffe", "Rhinoceros"],
      answer: "Whale",
      score: 1
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
      score: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars",
      score: 1
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      answer: "Skin",
      score: 1
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Vietnam"],
      answer: "Japan",
      score: 1
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      answer: "Nile",
      score: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Pb"],
      answer: "Au",
      score: 1
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare",
      score: 1
    },
    {
      question: "What is the largest continent by land area?",
      options: ["Asia", "Africa", "North America", "Europe"],
      answer: "Asia",
      score: 1
    }
  ];
  
 
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <div class="options">
        ${currentQuestion.options.map(option => `
          <input type="radio" name="answer" value="${option}"> ${option}<br>
        `).join('')}
      </div>
    `;
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }
  
    const selectedAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      score += currentQuestion.score;
      document.getElementById('result').textContent = 'Correct!';
    } else {
      document.getElementById('result').textContent = 'Incorrect!';
    }
  
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      document.getElementById('result').textContent = '';
      displayQuestion();
      document.getElementById('submitBtn').style.display = 'inline-block';
      document.getElementById('nextBtn').style.display = 'none';
      document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
      document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = false);
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById('result').textContent = `Your score is: ${score}/${questions.length}`;
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'inline-block';
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('restartBtn').style.display = 'none';
    displayQuestion();
    document.getElementById('submitBtn').style.display = 'inline-block';
  }
  
  displayQuestion();
  