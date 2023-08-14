//monstrously build form in qQuery
const movieForm = $("<form>").addClass("movie-form");

const titleInput = $("<input>").addClass("title-input");
const ratingInput = $("<input>").addClass("rating-input");
const submitButton = $("<button>").addClass("submit-button").attr("type", "submit");

movieForm.append(titleInput).append(ratingInput).append(submitButton);
$("body").append(movieForm);
$("body").append('<div class="rating-area"></div>');


// make a submit listener
// captures values of title and rating
// makes a DOM element with these values AND
//      a button with the ".remove" class

$(movieForm).on("submit", addMovie);

function addMovie(evt) {
  evt.preventDefault();

  const title = $(".title-input").val();
  const rating = $(".rating-input").val();
  const removeButton = $("<button>").addClass("remove-button");

  const newFilmDiv = $("<div>")
    .addClass("movie-entry")
    .text(`Title: ${title}, Rating: ${rating}`)
    .append(removeButton);

  $(".rating-area").append(newFilmDiv);

}
