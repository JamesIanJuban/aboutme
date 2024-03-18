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

    loader();

    document.querySelector('.btn').onclick = loader;
    
    /*====================================
    *     LOADER
    ======================================*/
    function loader(_success) {
        var obj = document.querySelector('.preloader'),
        inner = document.querySelector('.preloader_inner'),
        page = document.querySelector('.page');
        obj.classList.add('show');
        page.classList.remove('show');
        var w = 0,
            t = setInterval(function() {
                w = w + 1;
                inner.textContent = w+'%';
                if (w === 100){
                    obj.classList.remove('show');
                    page.classList.add('show');
                    clearInterval(t);
                    w = 0;
                    if (_success){
                        return _success();
                    }
                }
            }, 20);
    }
    