var equal_pushed = false;
var dot_pushed =false;
var sign_pushed = false;
var initial = true;
var input ="";
//accumulator function
displayAccumulator();
function clearScreen(reset){
   
    var screen = document.querySelector(".screen");

    if(reset){
        screen.innerText ="0";
    }else{
        screen.innerText= ""
    }
   return;
}
function displayAccumulator(){
    
    var buttons = document.querySelectorAll('.numeral-section--button');
    var signButtons = document.querySelectorAll('.sign');
    var  screen = document.querySelector(".screen"); // accumulator

    for(var sign of signButtons){
        sign.addEventListener("click", function(e){
        var buttonS = e.srcElement;
        var signButton = buttonS.innerText;

            if(!sign_pushed){
                console.log("pushed sign " + signButton)
                switch(signButton){
                    case "+":
                        
                        console.log("pushed addition")
                        screen.innerText+=signButton;
                        sign_pushed=true
                        equal_pushed = false
                     break;
                    case "-":
                        console.log("pushed substract")
                        screen.innerText+=signButton;
                        sign_pushed=true
                        equal_pushed = false
                        break;
                    case "/":
                        console.log("pushed division")
                        screen.innerText+=signButton;
                        sign_pushed=true
                        equal_pushed = false
                        break;
                    case "*":
                        console.log("pushed multipy")
                        screen.innerText+=signButton;
                        sign_pushed=true
                        equal_pushed = false
                        break;
                }
    
            } 
        })
    }
    
    for(var button of buttons){
        button.addEventListener("click", function(e){
            var  button = e.srcElement;
           
            input = button.innerText;
            var  output ='';
           
            console.log(input)
            switch(input){
                case "C":
                    clearScreen(true);
                    break;
                case "+":
                    break;
                case "-":
                    break;
                case "/":
                    break;
                case "*":
                    break;
                case ".":
                
                    if(dot_pushed===false){
                        console.log("dot is pushed")
                        if(initial){
                            screen.innerText = "0"
                            initial =false
                        }
                        screen.innerText+=input;
                        dot_pushed=true;
                        
                    }
                  
                    break;
                case "=":
                   if(!initial){
                    equal_pushed=true;
                    output = screen.innerText;
                    screen.innerText=""
                    output = eval(output);
                    console.log(output)
                    screen.innerText = output;
                   }
                    break;
                default: 
                    if(initial){
                        clearScreen(false)
                    }
                    if(equal_pushed===true){
                        screen.innerText = ""
                        equal_pushed=false;
                        break
                    }
                    screen.innerText+=input;
                    sign_pushed=false;
                    initial = false;
            }
          })
    }
    
}
