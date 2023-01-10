const searchPro = document.getElementById('search')
const projects = document.querySelectorAll('.project')
searchPro.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase()
    projects.forEach((project) => {
        project.querySelector(".project-title").innerHTML.toLowerCase().includes(searchString) ? project.style.display = 'block' : project.style.display = 'none'
    })
});

