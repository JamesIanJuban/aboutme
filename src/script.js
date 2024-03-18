   // Define the student object
   let student = {
    name: "James Ian Juban",
    age: 24,
    favoriteLanguage: "JavaScript",
    displayInfo: function() {
        console.log("Hello! My name is " + this.name + ".");
        console.log("I am " + this.age + " years old.");
    }
};

// Call the displayInfo method to show information about the student
student.displayInfo();