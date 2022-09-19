document.getElementById("input").addEventListener('change', () =>{
    if(document.body.className.indexOf('dark') === -1){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');

    }

})

let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      yOffset = -100; // задаете отступ
      element = document.querySelector(anchorId); // находим элемент до которого нужно прокручивать страницу
      y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; // находим расстояние до элемента
      window.scrollTo({top: y, behavior: 'smooth'});
    })
  }
}