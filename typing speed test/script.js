const quotes = {
    easy: [
      "Practice typing daily.",
      "I love to code.",
      "This is fun.",
      "You are fast.",
      "Be your best."
    ],
    medium: [
      "Typing is a skill that improves with practice.",
      "The quick brown fox jumps over the lazy dog.",
      "Coding is fun when you understand it well.",
      "Always challenge yourself to learn something new.",
      "Creativity and consistency make great developers."
    ],
    hard: [
      "The key to mastery lies in focused repetition and continuous learning.",
      "JavaScript allows you to create interactive web experiences with ease.",
      "Typing at high speed with great accuracy is a valuable productivity skill.",
      "The ability to debug efficiently separates good coders from great ones.",
      "Understanding the event loop is crucial for mastering asynchronous programming."
    ]
  };
  
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteInput = document.getElementById("quoteInput");
  const timer = document.getElementById("timer");
  const wpmDisplay = document.getElementById("wpm");
  const accuracyDisplay = document.getElementById("accuracy");
  const restartBtn = document.getElementById("restartBtn");
  const difficultySelect = document.getElementById("difficulty");
  const successMessage = document.getElementById("successMessage");
  
  let startTime;
  let interval;
  let totalTyped = 0;
  let correctTyped = 0;
  
  function getRandomQuote(difficulty) {
    const quoteList = quotes[difficulty];
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
  }
  
  function renderNewQuote() {
    const selectedDifficulty = difficultySelect.value;
    const quote = getRandomQuote(selectedDifficulty);
    quoteDisplay.innerHTML = "";
    quote.split("").forEach(char => {
      const span = document.createElement("span");
      span.innerText = char;
      quoteDisplay.appendChild(span);
    });
    quoteInput.value = "";
    clearInterval(interval);
    timer.innerText = "0";
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "100%";
    successMessage.classList.add("hidden");
    totalTyped = 0;
    correctTyped = 0;
    startTime = null;
  }
  
  quoteInput.addEventListener("input", () => {
    const quoteSpans = quoteDisplay.querySelectorAll("span");
    const inputChars = quoteInput.value.split("");
  
    if (!startTime) {
      startTime = new Date();
      interval = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - startTime) / 1000);
        timer.innerText = elapsedTime;
      }, 1000);
    }
  
    totalTyped++;
  
    correctTyped = 0;
  
    quoteSpans.forEach((span, i) => {
      const char = inputChars[i];
  
      if (char == null) {
        span.classList.remove("correct", "incorrect");
      } else if (char === span.innerText) {
        span.classList.add("correct");
        span.classList.remove("incorrect");
        correctTyped++;
      } else {
        span.classList.add("incorrect");
        span.classList.remove("correct");
      }
    });
  
    const wordsTyped = quoteInput.value.trim().split(/\s+/).length;
    const timeInMinutes = Math.max((new Date() - startTime) / 60000, 0.01);
    const wpm = Math.round(wordsTyped / timeInMinutes);
    wpmDisplay.innerText = wpm;
  
    const accuracy = Math.round((correctTyped / totalTyped) * 100);
    accuracyDisplay.innerText = `${accuracy}%`;
  
    
    const fullText = quoteDisplay.innerText;
    if (quoteInput.value === fullText) {
      clearInterval(interval);
      successMessage.classList.remove("hidden");
    }
  });
  
  restartBtn.addEventListener("click", renderNewQuote);
  difficultySelect.addEventListener("change", renderNewQuote);
  
  renderNewQuote();
  