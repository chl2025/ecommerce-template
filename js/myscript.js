fetch('partials/myheader.sect')
  .then(response => response.text())
  .then(data => {
    document.getElementById('myheader').innerHTML = data;
    
    // ✅ Now that the header is injected, calculate navHeight
    const navHeight = document.querySelector(".fixed-top")?.offsetHeight || 0;
    document.querySelector(".content-wrapper").style.paddingTop = navHeight + "px";
  });

fetch('partials/myfooter.sect')
  .then(response => response.text())
  .then(data => {
    document.getElementById('myfooter').innerHTML = data;
  });

// 📐 Keep resize logic separate — it works after everything is rendered
window.addEventListener("resize", function () {
  const navHeight = document.querySelector(".fixed-top")?.offsetHeight || 0;
  document.querySelector(".content-wrapper").style.paddingTop = navHeight + "px";
});
