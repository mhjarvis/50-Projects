const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');          // add active class to element when it is clicked on
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');       // remove active class from element when clicked
    })
}