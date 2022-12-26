const menu = () => {
    let menuBtn = document.getElementById('main-wrapper')
    if(menuBtn.classList.contains('show-sidebar')){
        menuBtn.classList.remove('show-sidebar')
    }else{
        menuBtn.classList.add('show-sidebar')
    }
}