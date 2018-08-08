//accumulator function
displayAccumulator();
function displayAccumulator(){
    
    var buttons = document.querySelectorAll('.numeral-section--button');
    for(var button of buttons){
        button.addEventListener("click", function(e){
            var  button = e.srcElement;
            var  screen = document.querySelector(".screen"); // accumulator
            var  input = button.innerText;
            var  output ='';
           
            console.log(input)
            switch(input){
                case "C":
                    screen.innerText=" ";
                    break;
                case "=":
                    output = screen.innerText;
                    screen.innerText=""
                    console.log("acc: " + output);
                    output = eval(output);
                    console.log(output)
                    screen.innerText = output;
                    break;
                default:    
                    screen.innerText+=input;
            }
          })
    }
    
}
