fetch('partials/myheader.sect')
    .then(response => response.text())
    .then(data => document.getElementById('myheader').innerHTML = data);

fetch('partials/myfooter.sect')
    .then(response => response.text())
    .then(data => document.getElementById('myfooter').innerHTML = data);

// window.addEventListener("load", function () {
//     const navHeight = document.querySelector(".fixed-top").offsetHeight;
//     document.querySelector(".content-wrapper").style.paddingTop = navHeight + "px";
// });

window.addEventListener("resize", function () {
    const navHeight = document.querySelector(".fixed-top").offsetHeight;
    document.querySelector(".content-wrapper").style.paddingTop = navHeight + "px";
});

window.addEventListener("load", function () {
    setTimeout(function () {
        const navHeight = document.querySelector(".fixed-top")?.offsetHeight || 0;
        document.querySelector(".content-wrapper").style.paddingTop = navHeight + "px";
    }, 500); // 500 milliseconds = 0.5 seconds
});

