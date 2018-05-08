var submitBurger = function(){
    event.preventDefault();
    console.log("The button is clicked")

    // Grab and clear the user input
    let newBurger = {
        burger_name: $("#newBurger").val()
    };
    $("#newBurger").val("");

    // Send the POST request
    $.ajax("/", {
        type: "POST",
        data: newBurger
    }).then(function () {
        // Works through the browser to refresh the page
        location.reload();
    });
}

// Add the user's burger on button click
$(".submitBurger").on('click', function (event) {
    submitBurger();
});

$('.submitBurger').keypress(function (e) {
    if (e.which == 13) {
      submitBurger();
    }
  });



//   Update burger as "devoured" on button click
$(".btn-danger").on('click', function (event) {
    event.preventDefault();
    console.log("ID of the button clicked: " + this.id)
    let burgerID = {
        id: this.id
    };
    $.ajax("/", {
        method: "PUT",
        data: burgerID
    }).then(function(){
        // Works through the browser to refresh the page
        location.reload();
    });
});