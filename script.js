document.querySelectorAll('.tema').forEach((item)=>item.addEventListener('click',nextTheme)
)

function nextTheme(e){
    let bts = e.target.value;
    let linkTema = document.getElementById('linkTema');
    if(bts == 1){
        linkTema.setAttribute('href','temas/style-Tema1.css')
    }else if(bts == 2){
        linkTema.setAttribute('href','temas/style-Tema2.css')
    }else{
        linkTema.setAttribute('href','temas/style-Tema3.css')
    }  
}
const screen = document.querySelector('.screen');
document.querySelectorAll('.bts').forEach((item)=>(
    item.addEventListener('click', teclas)
))
    const bts = [];
function teclas(e){
    bts.push(e.target.innerHTML);
    if(bts.length == 10){
        screen.style.fontSize = '2em';
    }else if(bts.length == 20){
        screen.style.fontSize = '1.5em';
    }
    screen.innerHTML = bts;

}

