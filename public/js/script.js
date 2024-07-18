// document.addEventListener('DOMContentLoaded', () => {
//     fetchRooms();

//     const bookingForm = document.getElementById('booking-form');
//     bookingForm.addEventListener('submit', event => {
//         event.preventDefault();
//         bookRoom();
//     }

// }


// Function to greet a user
function greet(name) {
    console.log("Hello, " + name);
  }
  
  // Function to calculate the sum of two numbers
  function sum(a, b) {
    return a + b;
  }
  
  // Function to display a message
  function showMessage(message) {
    alert(message);
  }
  
  // Example function to validate booking form inputs
  function validateBookingForm(hallName, bookedBy, date, startTime, endTime) {
    if (!hallName || !bookedBy || !date || !startTime || !endTime) {
      showMessage("All fields are required!");
      return false;
    }
    // Additional validation logic can be added here
    return true;
  }
  
  // Example usage of the functions
  greet("John");
  
  console.log("Sum of 2 and 3 is: " + sum(2, 3));
  
  const hallName = "Main Hall";
  const bookedBy = "Alice";
  const date = "2024-07-15";
  const startTime = "10:00";
  const endTime = "12:00";
  
  if (validateBookingForm(hallName, bookedBy, date, startTime, endTime)) {
    showMessage("Booking form is valid. Proceeding with booking...");
  }
  
