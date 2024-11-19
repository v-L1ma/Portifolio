function abrirMenu(){
            
    var menu = document.querySelector('#menu-list')

    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
}