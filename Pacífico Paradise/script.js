function galeria(imagem) {

    imagem.style.width = '60%';
    imagem.style.zIndex = 10;
    imagem.style.position = 'fixed';
    imagem.style.top = '20%';
    imagem.style.left = '20%';

    var div = document.createElement('div')
    div.style.width = '100vw';
    div.style.height = '100vh';
    div.style.backgroundColor = '#333';
    div.style.opacity = 0.7;
    div.style.zIndex = 9;
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';

    document.body.appendChild(div);

    div.addEventListener('click', () => {
        div.style.display = 'none';
        imagem.style = 'none';
    })
}