let buttons = document.getElementsByTagName('button');
let inputDisplay = document.getElementById('display');

let equal = document.getElementById('equal');

let clear = document.getElementById('clear');

let input = '';

btnValues = Array.from(buttons);

btnValues.forEach(button => {
    button.addEventListener('click', function (e){
        input = e.target.innerText

        if (input !== "=" && input !== "C") {
            inputDisplay.value = inputDisplay.value + input;

            input = inputDisplay.value;
        }

    })
    equal.addEventListener('click', function(){
        inputDisplay.value = eval(input);
        
    })

    clear.addEventListener('click', function(){
        inputDisplay.value = "";
    })
});







