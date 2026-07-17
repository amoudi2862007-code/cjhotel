document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Booking Successful!\n\nThank you for choosing Luxury Hotel.");

this.reset();

});