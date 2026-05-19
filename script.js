const buttons = document.querySelectorAll('.nav-btn');
const gradientBg = document.querySelector('.sliding-gradient-bg');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

/* -----------------------------
   Sliding Gradient
----------------------------- */

function moveGradientTo(element) {

  if (!element) return;

  const containerRect =
    element.parentElement.getBoundingClientRect();

  const btnRect =
    element.getBoundingClientRect();

  const leftPosition =
    btnRect.left - containerRect.left;

  gradientBg.style.left =
    `${leftPosition}px`;

  gradientBg.style.width =
    `${btnRect.width}px`;
}

/* Default Active Tab */
const initialActive =
  document.querySelector('.nav-btn.active-tab');

moveGradientTo(initialActive);

/* Hover + Navigation */
buttons.forEach(button => {

  button.addEventListener('mouseenter', () => {

    buttons.forEach(b =>
      b.classList.remove('active-tab')
    );

    button.classList.add('active-tab');

    moveGradientTo(button);
  });

  button.addEventListener('click', () => {

    const targetPage =
      button.textContent.trim().toLowerCase();

    if (targetPage === 'personal') {

      window.location.href = "personal.html";

    } else if (targetPage === 'cortis') {

      window.location.href = "cortis.html";

    } else if (targetPage === 'reality') {

      window.location.href = "reality.html";
    }

  });

});

/* -----------------------------
   Search Form
----------------------------- */

searchForm.addEventListener('submit', function(event) {

  event.preventDefault();

  const query =
    searchInput.value.trim();

  if (query === "") return;

  searchInput.value =
    "wow that was so cool of you to say im so amazed. ᜊ꒰ ˊ  ᩳˋ ꒱ᜊ⠀";

  searchInput.classList.add('showing-response');

});

/* Clear Response */
searchInput.addEventListener('focus', function() {

  if (this.classList.contains('showing-response')) {

    this.value = "";

    this.classList.remove('showing-response');
  }

});