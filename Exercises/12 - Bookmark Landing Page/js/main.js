const bookmarking = document.getElementById('bookmarking');
const searching = document.getElementById('searching');
const sharing = document.getElementById('sharing');
const divBookmarking = document.getElementById('div.bookmarking');
const divSearching = document.getElementById('div.searching');
const divSharing = document.getElementById('div.sharing');

const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');

function select(elem) {
  if (elem === 'bookmarking') {
    bookmarking.classList.add('selected');
    searching.classList.remove('selected');
    sharing.classList.remove('selected');

    divBookmarking.classList.remove('hidden');
    divSearching.classList.add('hidden');
    divSharing.classList.add('hidden');
  } else if (elem === 'searching') {
    bookmarking.classList.remove('selected');
    searching.classList.add('selected');
    sharing.classList.remove('selected');

    divBookmarking.classList.add('hidden');
    divSearching.classList.remove('hidden');
    divSharing.classList.add('hidden');
  } else if (elem === 'sharing') {
    bookmarking.classList.remove('selected');
    searching.classList.remove('selected');
    sharing.classList.add('selected');

    divBookmarking.classList.add('hidden');
    divSearching.classList.add('hidden');
    divSharing.classList.remove('hidden');
  }
}

/* function showAnswer(num) {
  if (num === 1) {
    answer1.classList.toggle('hidden');
    arrow1.classList.toggle('up');
  } else if (num === 2) {
    answer2.classList.toggle('hidden');
    arrow2.classList.toggle('up');
  } else if (num === 3) {
    answer3.classList.toggle('hidden');
    arrow3.classList.toggle('up');
  } else if (num === 4) {
    answer4.classList.toggle('hidden');
    arrow4.classList.toggle('up');
  }
} */

$(document).ready(function () {
  // eslint-disable-next-line no-alert
  alert('jquery is working');

  $('.arrowBtn').on('click', function showAnswer(num) {
    alert('fuck');

    $(`#answer1`).classList.toggle('hidden');
    $(`#arrow1`).classList.toggle('up');
  });
});
