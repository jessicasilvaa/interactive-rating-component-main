const ratingNumbers = document.querySelectorAll(".rating-number");
const cardContainer = document.querySelector(".card-container");
const thankyouCard = document.querySelector('.card-thank-you');
const cardSelectedValue = document.querySelector('.card-selected-value');

let activeRatingNumber;

function selectRating(number) {
    const selectRatingNumbers = (ratingNumbers[number - 1])

    selectRatingNumbers.classList.add('rating-number-active')

    if (activeRatingNumber) {
        const activeSelectRating = ratingNumbers[activeRatingNumber - 1]
        activeSelectRating.classList.remove('rating-number-active')
    }

    activeRatingNumber = number;
}

function submit() {

    if (!activeRatingNumber) return;

    cardContainer.classList.add('hide');
    thankyouCard.classList.remove('hide');

    cardSelectedValue.textContent = activeRatingNumber;
}
