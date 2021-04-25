'use strict';


document.querySelector("header").innerHTML = `
<nav class="navbar navbar-expand-md navbar-light">
  <a class="navbar-brand" href="">
    <img src="assets/img/logo-154x149.png" alt="ArtWay Construction painting company" />
  </a>
  <button class="navbar-toggler navbar-custom" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link nav-link-custom active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-custom" href="services.html">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-custom" href="projects.html">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-custom" href="blog.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-custom nav-link-contact" href="contactus.html">Contact</a>
      </li>
    </ul>
  </div>
</nav>
`;



document.querySelector("footer").innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-3 col-sm-2 offset-1">
      <h6>Links</h6>
      <ul class="list-unstyled">
        <li><a href="index.html">Home</a></li>
        <li><a href="aboutus.html">About</a></li>
        <li><a href="#">Sites</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="col-8 col-sm-5 text-center">
      <h6>Social</h6>
      <a class="btn btn-social-icon btn-instagram" href="http://yelp.com/"><i class="fab fa-yelp fa-2x"></i>
      </a>
      <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
          class="fab fa-facebook-f fa-2x"></i>
      </a>
      <a class="btn btn-social-icon btn-twitter" href="http://telegram.org/"><i
          class="fab fa-telegram-plane fa-2x"></i></a>
      <a class="btn btn-social-icon btn-google" href="http://linkedin.com/"><i
          class="fab fa-linkedin-in fa-2x"></i></a>
    </div>
    <div class="col col-sm-4 text-center">
      <a role="button" class="btn btn-link" href="tel:+12065551234"><i class="fa fa-phone"></i>
        1-206-555-1234</a><br />
      <a role="button" class="btn btn-link" href="mailto:artwayconstruction@gmai.com"><i
          class="far fa-envelope"></i>artwayconstruction@gmai.com</a>
    </div>
  </div>
</div>
`;
