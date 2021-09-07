const container = document.querySelector('.bookmark');
const links = document.querySelectorAll('.link');
const contents = document.querySelectorAll('.content');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      //console.log('link-clicked')
      toggleLinks(e)
      toggleContent(e)
    })
  })

function toggleLinks(e){
  links?.forEach(link => {
    link.classList.remove('active');
    e.target.classList.add('active');
  })
}

function toggleContent(e){
  contents?.forEach(content => {
    content.classList.remove('active');
  })

  const selected = e.target.getAttribute('data-target');
  const shown = container.querySelector(selected);
  shown.classList.add('active')
}