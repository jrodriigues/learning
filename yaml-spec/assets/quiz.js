/* Shared quiz widget — used by all lessons */
(function () {
  function initQuiz(quizEl) {
    const options = quizEl.querySelectorAll('.quiz-option');
    const feedback = quizEl.querySelector('.quiz-feedback');
    let answered = false;

    options.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;

        const correct = btn.dataset.correct === 'true';
        options.forEach(function (b) {
          b.setAttribute('disabled', '');
          if (b.dataset.correct === 'true') b.classList.add('revealed');
        });

        if (correct) {
          btn.classList.add('correct');
          if (feedback) {
            feedback.textContent = feedback.dataset.correct || 'Correct!';
            feedback.className = 'quiz-feedback show correct';
          }
        } else {
          btn.classList.add('incorrect');
          if (feedback) {
            feedback.textContent = feedback.dataset.incorrect || 'Not quite — the highlighted answer is correct.';
            feedback.className = 'quiz-feedback show incorrect';
          }
        }
      });
    });
  }

  document.querySelectorAll('.quiz').forEach(initQuiz);
})();
