document.getElementById('input-plus').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})

document.getElementById('input-subtract').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})

document.getElementById('input-multiply').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})

document.getElementById('input-divide').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})

document.getElementById('input-result').addEventListener('click', function(e){
    document.getElementById('screen').innerText = operation()
})

document.getElementById('input-reset').addEventListener('click', function(e){
    document.getElementById('screen').innerText = ""
})
document.getElementById('input-float').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-1').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-2').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-3').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-4').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-5').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-6').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-7').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-8').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-9').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})
document.getElementById('input-0').addEventListener('click', function(e){
    addDataToScreen(e.target.innerText)
})



function addDataToScreen(input){
    
    document.getElementById('screen').innerText  = document.getElementById('screen').innerText + input  
}





function operation(){
    const a = document.getElementById('screen').innerText
    const add = a.split("+").map((str) => Number(str))
    const sub = a.split("-").map((str) => Number(str))
    const multi = a.split("x").map((str) => Number(str))
    const div = a.split("/").map((str) => Number(str))
    if (add.length >1){
        if (add.length > 2){
            return "wrong input"
        }else{
            return add[0] + add[1]
        }
    }else if(sub.length >1){
        if (add.length > 2){
            return "wrong input"
        }else{
            return sub[0] - sub[1]
        }
        
    }else if(multi.length > 1){
        if (add.length > 2){
            return "wrong input"
        }else{
            return multi[0] * multi[1]
        }
        
    }else if(div.length > 1){
        if (add.length > 2){
            return "wrong input"
        }else{
            return div[0]/div[1]
        }
        
    }
}