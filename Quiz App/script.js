
console.log(firebase)
var quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript",
    },
    {
      question:
        "Which attribute is used to specify the URL of the page that the link goes to?",
      options: ["src", "href", "url", "link"],
      correct: "href",
    },
    {
      question:
        "Which CSS property is used to change the font size of an element?",
      options: ["font-style", "font-family", "font-size", "text-size"],
      correct: "font-size",
    },
    {
      question: "What keyword is used to declare a function in JavaScript?",
      options: ["func", "def", "function", "method"],
      correct: "function",
    },
    {
      question: "Which HTML element is used to define the navigation links?",
      options: ["<nav>", "<navigation>", "<link>", "<ul>"],
      correct: "<nav>",
    },
  ];
  
  var currentQuiz = 0;
  var score = 0;
  
  var container = document.querySelector(".container");
  var optionsContainer = document.querySelector(".options");
  var questionEl = document.getElementById("question");
  var submitBtn = document.getElementById("submit");
  
  loadQuiz();
  
  optionsContainer.addEventListener("click", selectAnswer);
  submitBtn.addEventListener("click", answerQuestion);
  
  function loadQuiz() {
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
  
    currentQuizData.options.forEach((option) => {
      var optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.setAttribute("data-option", option);
      optionDiv.innerHTML = `<span class="option-answer">${option}</span>`;
      optionsContainer.appendChild(optionDiv);
    });
  }
  
  function selectAnswer(event) {
    var selectedOption = event.target.closest(".option");
    if (!selectedOption) return;
  
    var previouslySelectedOption =
      optionsContainer.querySelector(".option.selected");
    if (previouslySelectedOption) {
      previouslySelectedOption.classList.remove("selected");
    }
  
    selectedOption.classList.add("selected");
  }
  
  function answerQuestion() {
    var selectedOption = getSelected();
    if (isAnswerCorrect(selectedOption)) {
      score++;
    }
    currentQuiz++;
    if (!isQuizComplete()) {
      loadQuiz();
    } else {
      showResults();
    }
  }
  
  function getSelected() {
    var selectedOption = optionsContainer.querySelector(".option.selected");
    return selectedOption ? selectedOption.getAttribute("data-option") : null;
  }
  
  function isAnswerCorrect(selectedOption) {
    return selectedOption && selectedOption === quizData[currentQuiz].correct;
  }
  
  function isQuizComplete() {
    return currentQuiz >= quizData.length;
  }
  
  function showResults() {
    container.innerHTML =
      '<h2 class="answer">You answered correctly at <span class="score">' +
      score +
      "/" +
      quizData.length +
      "</span> questions</h2>" +
      '<button onclick="location.reload()">Reload</button>';
  }
  