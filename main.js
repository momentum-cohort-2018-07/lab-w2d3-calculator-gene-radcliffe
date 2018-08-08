var equal_pushed = false;
var dot_pushed =false;
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
                case "+":
                if(equal_pushed===true){
                    equal_pushed=false;
                }
                    screen.innerText+=input;
                    break;
                case "-":
                    if(equal_pushed===true){
                        equal_pushed=false;
                    }
                        screen.innerText+=input;
                    break;
                case "/":
                    if(equal_pushed===true){
                        equal_pushed=false;
                    }
                        screen.innerText+=input;
                    break;
                case "*":
                    if(equal_pushed===true){
                        equal_pushed=false;
                    }
                        screen.innerText+=input;
                    break;
                case ".":
                    if(equal_pushed===true){
                        equal_pushed=false;
                    }
                    if(dot_pushed===false){
                        screen.innerText+=input;
                        dot_pushed===true;
                    }
                        
                    break;
                case "=":
                    equal_pushed=true;
                    output = screen.innerText;
                    screen.innerText=""
                    console.log("acc: " + output);
                    output = eval(output);
                    console.log(output)
                    screen.innerText = output;
                    break;
                default:    
                    if(equal_pushed===true){
                        screen.innerText=" "
                        equal_pushed=false;
                    }
                    screen.innerText+=input;
            }
          })
    }
    
}
