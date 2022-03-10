let paragraph = document.getElementById('paragraph');

// font family

function myFunction(){
    let font = document.getElementById('select').value;

    switch(font){
        case "arial":
            paragraph.style.fontFamily ="arial";
            break;
        case "cambria":
            paragraph.style.fontFamily ="cambria";
            break;
        case "monospace":
            paragraph.style.fontFamily ="monospace";
            break;
        case "georgia":
            paragraph.style.fontFamily ="georgia";
            break;
        case "default":
            paragraph.style.fontFamily ="";
            break;
    }
}


// font size

let slider = document.getElementById('range-slider');
let output = document.getElementById('size');
output.innerHTML - slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    let num = this.value;
    let string = num.toString();
    document.getElementById('paragraph').style.fontSize = num + "px";
}



// font color
let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');

black.addEventListener('click', function(){
    paragraph.style.color = "black";
})
red.addEventListener('click', function(){
    paragraph.style.color = "red";
})
blue.addEventListener('click', function(){
    paragraph.style.color = "blue";
})
green.addEventListener('click', function(){
    paragraph.style.color = "green";
})


// font style 
let normal = document.getElementById('normal');
let cursive = document.getElementById('cursive');
let light = document.getElementById('light');
let bold = document.getElementById('bold');

normal.addEventListener('click', function(){
    paragraph.style.fontStyle = "normal";
})
cursive.addEventListener('click', function(){
    paragraph.style.fontStyle = "italic";
})
light.addEventListener('click', function(){
    paragraph.style.fontWeight = "lighter";
})
bold.addEventListener('click', function(){
    paragraph.style.fontWeight = "bold";
})