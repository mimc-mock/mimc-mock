document.addEventListener('DOMContentLoaded', function () {
    function loadText(year, test, problemNumber) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", './amc/' + year + '/' + test + '/' + problemNumber + '.txt');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('#problem').innerHTML = `<h2>${year} AMC ${test} Problem ${problemNumber}</h2>` + xhr.responseText;
            } else {
                document.querySelector('#problem').innerHTML = `<h2>${year} AMC ${test} Problem ${problemNumber}</h2>` + "Problem not Found";
            }
        };
        xhr.send();
    }

    function getAnswer(year, test, problemNumber){
        return "A";
    }


    document.querySelector('#generate').addEventListener('submit', function () {
        let year = document.querySelector('#year').value;
        let test = document.querySelector('#test').value;
        let problemNumber = document.querySelector('#problemNumber').value;

        loadText(year, test, problemNumber);
        event.preventDefault();

        document.querySelector('#A').addEventListener('click', function () {
            if("A" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#B').addEventListener('click', function () {
            if("B" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#C').addEventListener('click', function () {
            if("C" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#D').addEventListener('click', function () {
            if("D" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#E').addEventListener('click', function () {
            if("E" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
    })

    document.querySelector('#random').addEventListener('submit', function () {
        var tests = Array('10A', '10B', '12A', '12B');

        let year = Math.floor(Math.random() * 21) + 2002;
        let test = tests[Math.floor(Math.random() * tests.length)];
        let problemNumber = Math.floor(Math.random() * 25) + 1;

        loadText(year, test, problemNumber);
        event.preventDefault();

        document.querySelector('#A').addEventListener('click', function () {
            if("A" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
                document.write()
            }
        })
        document.querySelector('#B').addEventListener('click', function () {
            if("B" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
            let link = "https://artofproblemsolving.com/wiki/index.php/" + year.toString() + "_AMC_" + test.toString() + "_Problems/Problem_" + problemNumber.toString();
            const button = document.createElement('button')
            button.innerText("Solution");
            button.id = 'solution';
            button.addEventListener('click', () => {
                // When there is a "click"
                // it shows an alert in the browser
                alert('Oh, you clicked me!')
            })
            document.body.appendChild(button)
        })
        document.querySelector('#C').addEventListener('click', function () {
            if("C" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#D').addEventListener('click', function () {
            if("D" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
        document.querySelector('#E').addEventListener('click', function () {
            if("E" === getAnswer(year, test, problemNumber)){
                document.write("Correct!");
            }
            else{
                document.write("incorrect");
            }
        })
    })

    // var buttons = Array('A', 'B', 'C', 'D', 'E');

    // function check(k) { 
    //     document.write("Chosen " + k);
    // };


    // for(let a = 0; a < 5; a++){
    //     var button_checker = document.querySelector("#" + buttons[a]);
    //     button_checker.addEventListener("click", check(buttons[a]))
    // }

    
    
    

    
    
})



        // function readTextFile(file) {
        //   var rawFile = new XMLHttpRequest();
        //   rawFile.open("GET", file, false);
        //   rawFile.onreadystatechange = function () {
        //     if (rawFile.readyState === 4) {
        //       if (rawFile.status === 200 || rawFile.status == 0) {
        //         var allText = rawFile.responseText;
        //         alert(allText);
        //       }
        //     }
        //   }
        //   rawFile.send(null);
        // }


        // document.querySelector('#problem').innerHTML = './amc/' + year + '/' + test + '/' + problemNumber + '.txt';

        // var problem = './amc/' + year + '/' + test + '/' + problemNumber + '.txt';
        // if (problem.exists()) {
        //   document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + readTextFile(problem);
        // } else {
        //   document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + "Problem not Found";
        // }