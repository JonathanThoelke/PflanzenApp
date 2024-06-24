document.addEventListener("DOMContentLoaded") {
    const HomeButton=document.getElementById("HomeButton");
    const container=document.getElementById("container");
    const bild=docoument.getElementById("bild");
    const info=document.getElementById(info);
}
    HomeButton.addEventListener("click") {
        container.classList.toggle("hidden");
    }

    bild.addEventListener("click") {
        info.classList.toggle("hidden");
    }
