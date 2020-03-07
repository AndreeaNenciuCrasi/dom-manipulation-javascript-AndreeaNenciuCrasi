function main() {
    let btnAdd = document.getElementById('add_row');
    let count = 0;

        btnAdd.addEventListener("click", function () {
            let newInput = document.createElement('div');
            if(count < 10) {
                newInput.innerHTML = `<span class="remove${count + 1}"><label  for="item_1" >Item ${count + 1}:</label>
                <input type="text" name="item_1"/></span>`;
                let removeBtn = document.createElement('button');
                removeBtn.setAttribute("data-target", `remove${count + 1}`);
                removeBtn.innerText ='Remove';
                removeBtn.addEventListener('click', function () {
                    for (let child of newInput.children){
                        if (removeBtn.dataset.target === child.className){
                            newInput.removeChild(child);
                            removeBtn.remove();
                        }
                    }
                });
                newInput.appendChild(removeBtn);
                document.querySelector('.container').appendChild(newInput);
                count += 1;
            }
            console.log(count);
        });
}
// function remove(el) {
//     let element = el;
//     element.remove();
// }

main();
