import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div class="container-fluid">
      <a class="navbar-brand" href="#!">CraftY</a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Attractions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Opinions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section>
    <div id="intro" class="bg-image" style="
        background-image: url('https://mdbootstrap.com/img/Photos/new-templates/craftsman/img(1).jpg');
        height: 100vh;
      ">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.2);">
        <div class="container d-flex justify-content-center align-items-center h-100">
          <div class="row align-items-center">
            <div class="col-12">
              <h1 class="mb-0 text-white display-1">Studio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Navbar