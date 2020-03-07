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
    let divToChange = document.getElementsByClassName('gridsquare');
    for (let j = 0; j < divToChange.length; j++){
        let randomNumber = Math.floor(Math.random() * 101);

        setInterval(function(){
            divToChange[randomNumber].style.backgroundColor = randomColor();
        }, 500);
    }


    console.log(randomNumber);
}

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", "  + blue + ")";
}

main();
