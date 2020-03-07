// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
// const moves = {
//     '97': moveLeft,
//     '115': moveDown,
//     '119': moveUp,
//     '100': moveRight
// };

function main() {
    let e = document.querySelector('.container'); // whatever you want to append the rows to:
    for(let i = 0; i < 10; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let x = 1; x <= 10; x++){
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * 10) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
    let allCells = document.getElementsByClassName('gridsquare');
    for (cell of allCells){
        cell.addEventListener('click', function (event) {
            event.target.style.backgroundColor = 'pink';
        });
    }
    document.addEventListener('keydown', handelArrowsMoves);
}


function handelArrowsMoves(event){
    let arrayUp = [];
    let arrayDown = [];
    let arrayLeft = [];
    let arrayRight = [];
    let allCells = document.getElementsByClassName('gridsquare');
    let rows = document.querySelectorAll('.row');
    switch (event.key) {
        case "ArrowLeft":
            for (let row of rows){
                arrayLeft.push(Number(row.firstChild.innerText));
            }
            moveLeft(allCells, arrayLeft);
            document.querySelector('body').style.backgroundColor = 'yellow';
            console.log('Left');
            break;
        case "ArrowRight":
            for (let row of rows){
                arrayRight.push(Number(row.lastChild.innerText));
            }
            moveRight(allCells, arrayRight);
            document.querySelector('body').style.backgroundColor = 'yellow';
            console.log('Right');
            break;
        case "ArrowUp":
            for (let child of rows[0].children) {
                arrayUp.push(Number(child.innerText));
            }
            moveUp(allCells, arrayUp);
            document.querySelector('body').style.backgroundColor = 'yellow';
            console.log('Up');
            break;
        case "ArrowDown":
            for (let child of rows[9].children) {
                arrayDown.push(Number(child.innerText));
            }
            moveDown(allCells, arrayDown);
            document.querySelector('body').style.backgroundColor = 'yellow';
            console.log('Down');
            break;
    }
    }

function inArray(needle, haystack) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
        if (haystack[i] == needle)
            return true;
    }
    return false;
}

function moveRight(allCells, array){
    // array =[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < allCells.length; i++) {
        let check_value = inArray(allCells[i].innerText, array);
        if (check_value === false) {
            if (allCells[i].style.backgroundColor === 'pink') {
                let temp = allCells[i].innerText;
                allCells[i].innerText = allCells[i + 1].innerText;
                allCells[i + 1].innerText = temp;
                allCells[i].style.backgroundColor = '#2980b9';
                // allCells[i + 1].style.backgroundColor = 'pink';
            }
        }
    }
}

function moveLeft(allCells, array) {
    // array =[1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
    for (let i = 0; i < allCells.length; i++) {
        let check_value = inArray(allCells[i].innerText, array);
        if (check_value === false) {
            if (allCells[i].style.backgroundColor === 'pink') {
                let temp = allCells[i].innerText;
                allCells[i].innerText = allCells[i - 1].innerText;
                allCells[i - 1].innerText = temp;
                allCells[i].style.backgroundColor = '#2980b9';
                allCells[i - 1].style.backgroundColor = 'pink';
            }
        }
    }
}

function moveUp(allCells, array) {
    // array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < allCells.length; i++) {
        let check_value = inArray(allCells[i].innerText, array);
        if (check_value === false) {
            if (allCells[i].style.backgroundColor === 'pink') {
                let temp = allCells[i].innerText;
                allCells[i].innerText = allCells[i - 10].innerText;
                allCells[i - 10].innerText = temp;
                allCells[i].style.backgroundColor = '#2980b9';
                allCells[i - 10].style.backgroundColor = 'pink';
            }
        }
    }
}

function moveDown(allCells, array) {
    // array =[91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    for (let i = 0; i < allCells.length; i++) {
        let check_value = inArray(allCells[i].innerText, array);
        if (check_value === false) {
            if (allCells[i].style.backgroundColor === 'pink') {
                let temp = allCells[i].innerText;
                allCells[i].innerText = allCells[i + 10].innerText;
                allCells[i + 10].innerText = temp;
                allCells[i].style.backgroundColor = '#2980b9';
                // allCells[i + 10].style.backgroundColor = 'pink';
            }
        }
    }
}


main();
