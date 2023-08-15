'Use Strict'
const $movieForm = $("<form>").addClass("movie-form");
const $appTitle = $("<h1>").addClass("app-title").text("Movie Rating App");
const $titleInput = $("<input>").addClass("title-input").attr("placeholder", "Movie Title");
const $ratingInput = $("<input>").addClass("rating-input").attr("placeholder", "Movie Rating");;
const $submitButton = $("<button>").addClass("submit-button").attr("type", "submit").text("Submit");

$movieForm.append($titleInput).append($ratingInput).append($submitButton);
$("body")
  .append($appTitle)
  .append($movieForm)
  .append('<div class="rating-area"></div>');


$($movieForm).on("submit", addMovie);


/**
 *
 * @param {evt} submission - takes in a submission event and places title and rating into
 * a new div with an associated remove button
 */
function addMovie(evt) {
  evt.preventDefault();

  const title = $(".title-input").val();
  const rating = $(".rating-input").val();
  const $removeButton = $("<button>").addClass("remove-button").text("Remove");

  const $newFilmDiv = $("<div>")
    .addClass("movie-entry")
    .text(`Title: ${title}, Rating: ${rating}`)
    .append($removeButton);

  $(".rating-area").append($newFilmDiv);
  $("form").get(0).reset();

}

// on click, function @ rating-area
  //function will remove the
  // evt.target.parent
$(".rating-area").on("click", ".remove-button", removeEntry);

/**
 *
 * @param {evt} click- removes associated movie and rating entry
 */
function removeEntry (evt){
  $(evt.target).parent().remove();
}
