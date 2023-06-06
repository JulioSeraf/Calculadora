const screen = document.querySelector('.screen');
document.querySelectorAll('.tema').forEach((item)=>item.addEventListener('click',nextTheme)
)
// functoion de Cambio de Temas------------------------------------------------------------------
function nextTheme(e){
    let bts = e.target.value;
    let linkTema = document.getElementById('linkTema');
    if(bts == 1){
        linkTema.setAttribute('href','temas/style-Tema1.css')
    }else if(bts == 2){
        linkTema.setAttribute('href','temas/style-Tema2.css')
    }else if(bts == 3){
        linkTema.setAttribute('href','temas/style-Tema3.css')
    }  
}
document.querySelectorAll('.bts').forEach((item)=>(
    item.addEventListener('click', limeteLetras)
))
function limeteLetras(e){
    let bts = [];
    bts.push(e.target.innerHTML)
// function de tamaño de letra y limite de caracter en Screen-----------------------------------
    if(screen.innerHTML.length >= 11 && screen.innerHTML.length <= 30){
        screen.style.fontSize = '2em';
    }else if(screen.innerHTML.length >= 31 && screen.innerHTML.length <= 60){
        screen.style.fontSize = '1.5em';
    }else if(screen.innerHTML.length >= 61 && screen.innerHTML.length <= 100 ){
        screen.style.fontSize = '1em';
    }else if(screen.innerHTML.length == ''){
        screen.style.fontSize = '3em';
    }
// butoes y calculadores----------------------------------------------------------------------
    if(bts >= 0 || bts == '.' || bts == '+' || bts == '-' || bts == '/' || bts == 'x'){
        screen.innerHTML += bts;
    }else if(bts == 'DEL'){
        screen.innerHTML = screen.innerHTML.toString().slice(0,-1)
    }
    else if( bts == 'RESET'){
        screen.innerHTML = ''
    }
    else if(bts == '='){
        if(screen.innerHTML == ''){
            screen.innerHTML = '0';
        }
        console.log(screen.innerHTML)
        let res = screen.innerHTML.toString();
        screen.innerHTML = eval(res.replace('x','*'))
    }
}

