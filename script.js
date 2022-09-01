const targetSlider = document.querySelector(".slider");
const targetCircle = document.querySelector(".circle");

targetSlider.addEventListener("mousemove", (e) => {
    let xPos = e.clientX - targetSlider.offsetLeft;

    //console.log(xPos);
    xPos = xPos < 0 ? 0 : xPos;
    xPos = xPos > 300 ? 300 : xPos;
    document.documentElement.style.setProperty('--fill', `${(xPos)}px`);
    document.documentElement.style.setProperty('--slide', `${(xPos - 10)}px`);

    document.querySelector(".sub-val").innerHTML = parseInt(xPos / 3);
})