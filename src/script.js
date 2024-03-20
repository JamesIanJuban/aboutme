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
        console.log("I live " +this.Address + ".");
        console.log(this.School);
        console.log(this.Course);
    }
};

// Call the displayInfo method to show information about the student
    student.displayInfo();

    loader();

    document.querySelector('.btn').onclick = loader;
    
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
                } else {
                    console.error("success");
                }
            }
        }, 20);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const reloadContainer = document.getElementById('reload'); // Get the container div
        const button = document.createElement('button'); // Create a button element
        button.textContent = 'Reload'; // Set the button text
        button.type = 'button'; // Set the button type
        button.classList.add('hover:text-white', 'hover:underline' , 'font-bold' , 'tracking-wide' , 'rounded-lg'); // Add tailwind CSS classes for hover effect
        button.addEventListener('click', function() {
            // Add functionality when the button is clicked
            console.log('Button clicked!');
        });
        reloadContainer.appendChild(button); // Append the button to the container
    });


   

