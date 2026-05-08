


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

document.getElementById("site-footer").innerHTML = `
<section class="footer body-s">
    <div class="footer-flex-container width">
        <div>
            <br class="mobile">
            <p>Site hand-crafted and hosted by GitHub.</p>
            <p>© 2026. All rights reserved.</p>
        </div>
        <div class="footer-left-flex-container">
            <p>Let's connect!</p>
            <div class="icon">
                <a href="https://scholar.google.com/citations?user=_48_CFsAAAAJ&hl=en" target="_blank"><img src="images/icon-gs-default.png" class="img-icon"></a>
                <a href="https://www.linkedin.com/in/mengfeiguan/" target="_blank"><img src="images/icon-li-default.png" class="img-icon"></a>
                <a href="mailto:mengfeiguan@gmail.com"><img src="images/icon-em-default.png" class="img-icon"></a>
            </div>
        </div>
    </div>
</section>
`;

