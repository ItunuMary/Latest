const button = document.querySelectorAll(".btn");
const input = document.querySelector("input")
let string = " ";

Array.from(button).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerText == "="){
        let result = eval(string)
        input.value = result
    } else if
        (e.target.innerText == "C") {
            string = " "
            input.value = string;
        } else {
            string += e.target.innerText
           input.value = string;
        }
    })
})
