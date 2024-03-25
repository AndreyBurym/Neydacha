/* function parallax() {
    windownaddEventListener("mousemove", function(event) {
        let mouseX = event.clientX
        let mouseY = event.clientY
        let newTransformX = mouseX
        let newTransformY = mouseY
        window.style.transform = `translateX(-${[checkIndex] / 40}%)`
        window.style.transform = `translateY(-${[checkIndex] / 40}%)`
    })
} */
/* let newMouse = document.querySelector(".icon__1")
    document.addEventListener("mousemove", function (event) {
        let mouseX = event.clientX
        let mouseY = event.clientY
        let react = newMouse.getBoundingClientRect()
        let rectWidth = react.rectWidth
        let rectHeight = react.Height
        newX = mouseX - rectWidth / 2
        let newY = mouseY - rectHeight / 2
        newMouse.style.transform = `translateX(-${[mouseX, mouseY + 0.1]}px) translateY(-$())`
    })
 */
const slideImage = document.querySelectorAll('.paralaks')

window.addEventListener("mousemove", (e) => {
    x = e.offsetX
    y = e.offsetY
    for (let i = 0; i < slideImage; i++){
        let newParalaks = 
    }
    style.transform = 'translate(${-x/70px}px, ${-y/70px}px,)'
})
