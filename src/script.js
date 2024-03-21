// Define the student object
   let student = {
    name: "James Ian Juban",
    age: 24,
    Address: "Colon City Of Naga Cebu",
    School: "Asian College Of Technology",
    Course: "Bachelor of Science Information of Technology",
    displayInfo: function() {
        console.log("Hello! My name is " + this.name + ".");
        console.log("I am " + this.age + " years old.");
        console.log("I live " + this.Address + ".");
        console.log(this.School);
        console.log(this.Course);
    }
};

// Call the displayInfo method to show information about the student
    student.displayInfo();

    loader();

    /*====================================
    *     LOADER
    ======================================*/
    function loader(_success) {
        // Select relevant DOM elements
        var preloader = document.querySelector('.preloader');
        var innerLoader = document.querySelector('.preloader_inner');
        var pageContent = document.querySelector('.page');
    
        // Show preloader and hide page content
        preloader.classList.add('show');
        pageContent.classList.remove('show');
    
        // Initialize progress counter
        var progress = 0;
        var interval = setInterval(function() {
            progress++; // Increment progress
            innerLoader.textContent = progress + '%'; // Update loader text
    
            // Check if progress reaches 100%
            if (progress === 100) {
                // Hide preloader and show page content
                preloader.classList.remove('show');
                pageContent.classList.add('show');
                
                clearInterval(interval); // Stop interval
                progress = 0; // Reset progress counter
    
                // Call _success function if provided and is a function
                if (typeof _success === 'function') {
                    _success();
                }
            }
        }, 20);
    }

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'show-more-btn'
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    
    // Add click event listener to each button
    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Toggle the visibility of the next sibling element
            const additionalInfoContainer = this.nextElementSibling;
            additionalInfoContainer.classList.toggle('hidden');
        });
    });
});

// Show More function
let show = document.getElementById('show');
let shows = document.getElementById('shows');

// Function placeholder for handling click events on the 'shows' element
function hideshow(){
};

// Add event listener to the 'shows' element
shows.addEventListener('click', hideshow); 
   

