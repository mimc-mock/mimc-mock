document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#generate').addEventListener('submit', function () {
        let year = document.querySelector('#year').value;
        let test = document.querySelector('#test').value;
        let problemNumber = document.querySelector('#problemNumber').value;

        function loadText() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", './amc/' + year + '/' + test + '/' + problemNumber + '.txt');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + xhr.responseText;
                } else {
                    document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + "Problem not Found";
                }
            };
            xhr.send();
        }

        loadText();
        event.preventDefault();
    })

    document.querySelector('#random').addEventListener('submit', function () {
        var tests = Array('10A', '10B', '12A', '12B');

        let year = Math.floor(Math.random() * 21) + 2002;
        let test = tests[Math.floor(Math.random() * tests.length)];
        let problemNumber = Math.floor(Math.random() * 25) + 1;

        function loadText() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", './amc/' + year + '/' + test + '/' + problemNumber + '.txt');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + xhr.responseText;
                } else {
                    document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + "Problem not Found";
                }
            };
            xhr.send();
        }

        loadText();
        event.preventDefault();
    })
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