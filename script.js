function carregar(){
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
msg.innerHTML = `Agora  são  ${hora}:${minuto}`; 


if (hora >=0 && hora < 12){
 //bom dia
 imagem.src = 'img/manha.png';  
 document.body.style.background = '#eddc5c';

} else if( hora >=12 && hora <= 18){
    //boa tarde
    imagem.src = 'img/tarde.png'
    document.body.style.background ='#fe8701'
}else{
    //boa noite
    imagem.src = 'img/noite.png'
    document.body.style.background = '#1d4754'
}
}