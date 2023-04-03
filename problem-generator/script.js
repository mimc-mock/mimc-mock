document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function () {
        let year = document.querySelector('#year').value;
        let test = document.querySelector('#test').value;
        let problemNumber = document.querySelector('#problemNumber').value;

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


        // document.querySelector('#problem').innerHTML = './amc/' + year + '/' + test + '/' + problemNumber + '.txt';

        // var problem = './amc/' + year + '/' + test + '/' + problemNumber + '.txt';
        // if (problem.exists()) {
        //   document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + readTextFile(problem);
        // } else {
        //   document.querySelector('#problem').innerHTML = `<h2>${year} ${test} Problem ${problemNumber}</h2>` + "Problem not Found";
        // }

        loadText()
        event.preventDefault();
    })
})