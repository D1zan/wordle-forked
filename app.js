const secret = "aback";
//creates all the letters\\
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
//this slits the letters into an Array\\
//a new set is like an Array but only contains unique values\\
const alpha = new Set(letters.split(''));
//This is an Array\\
const keyboard = [
    "QWERTYUIOP".split(''),
    "ASDFGHJKL".split(''),
    "ZXCVBNM".split(''),
]
//Attach a function to the browser window\\
//when a key is released, the logkey function will be called.\\
//the evt is the "Keyup" and the callback function is "LogKey"\\
window.addEventListener('keyup', logKey);
//This is the code for the logKey function.\\
function logKey(evt) { //evt is the event.
    //This runs everytime logKey is called()\\
    //Check to see if the enter was typed.\\
    if(evt.key.toUpperCase()== "ENTER"){
        console.log('submit')
    }
    //Check if backspace was typed\\
    if (evt.key.toUpperCase()=="BACKSPACE"){
        console.log('deleting');
    }
    
    // Alpha is a Set, we can use the built in method to check.\\
    //if the set cntains the key just pressed.\\
    if (alpha.has( evt.key.toUpperCase() )) {
        console.log(evt.key.toUpperCase());
    } else {
        //Run this if a non-letter key was pressed\\
        console.log('not a letter');
    }
}
function render() {
    //Tjis searches the HTML doc for 
    //"<main id="root"><?main>
    //Then saves it in JS\\
    const main= document.querySelector('#root');
    let template= `<div class="keyboard">`;
    for (let i=0; i<keyboard.length;i++){
        template += `<div class="row">`
        for (let j=0; j<keyboard[i].length;j++) {
            template+= `<div class="key">${ keyboard[i][j] }</div>`
        
        }
        template+= `</div>`
        console.log(i, keyboard [i]);
        //this tells what to do\\
    }
    
    template+= `</div>`
    //i is going to start at 3 and stop before 2\\
    main.innerHTML= template;
    console.log(main.innerHTML)
}

render();