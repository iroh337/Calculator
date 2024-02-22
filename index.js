var display = document.querySelector('.display')




function alternate(){
    
        display.value *=(-1)
}

function appendDisplay(input){
    display.value += input
}

function dClear(){
    display.value = ''
}
 
function calculate(){
    try{
        display.value = eval(display.value)
        
    }catch(error){
        display.value = 'Error'
        appendDisplay = null
        
        setTimeout(function(){
            location.reload()
            
        },1400)
        
    }

    if(display.value == 'undefined'){
         appendDisplay = null
        setTimeout(function(){
            location.reload()
        },1400)
    
    }
}

