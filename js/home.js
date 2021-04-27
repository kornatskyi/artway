'use strict';


//Services section

let serviceContainers;



const serviceDisplayFunc = () => {
  serviceContainers = Array.from(document.querySelectorAll(".tab-pane"));
  if(window.innerWidth > 900) {
    serviceContainers.map(serviceContainer => serviceContainer.style.flexDirection = "row") ;
  } else {
    serviceContainers.map(serviceContainer => serviceContainer.style.flexDirection = "column") ;
  }
}

serviceDisplayFunc();
window.addEventListener('resize', serviceDisplayFunc)


//Licence section for diferent sizes. 
const licensesContainer = document.getElementById("licenses");

const licensesDisplayFunc = () => {
if(window.innerWidth < 900) {
    licensesContainer.innerHTML = `
    <div class="col">
      <h2 class="section-title">We are licensed and inssured</h2>
      <ul
        class="nav nav-pills nav-fill"
        id="pills-tab-licenses"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-license-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-license"
            type="button"
            role="tab"
            aria-controls="pills-license"
            aria-selected="true"
          >
            <i class="license-icon"></i>
            <span>License</span>
          </button>
        </li>
        <li class="nav-item d-flex align-items-center" role="presentation">
          <button
            class="nav-link"
            id="pills-insurance-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-insurance"
            type="button"
            role="tab"
            aria-controls="pills-insurance"
            aria-selected="true"
          >
            <i class="license-icon"></i>
            <span>Insurance</span>
          </button>
        </li>
        <li class="nav-item d-flex align-items-center" role="presentation">
          <button
            class="nav-link"
            id="pills-bonded-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-bonded"
            type="button"
            role="tab"
            aria-controls="pills-bonded"
            aria-selected="true"
          >
            <i class="license-icon"></i>
            <span>Bonded</span>
          </button>
        </li>
      </ul>
      <div class="tab-content bg-white" id="pills-tabContent-licenses">
        <div
          class="tab-pane fade show active"
          id="pills-license"
          role="tabpanel"
          aria-labelledby="pills-license-tab"
        >
          <div class="description">
            <h5>VERIFIED LICENSE</h5>
            License # ARTWAC830D2 <br />
            Status <span style="color: green">Active</span><br />
            State Washington<br />

            <a href="#" style="color: blueviolet">Verify</a> this license's
            status for Artway Construction at the Washington State
            Department of Labor & Industries.
          </div>
          <div class="d-flex image-container">
            <img
              class="m-auto"
              src="assets/img/licenses/license.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-insurance"
          role="tabpanel"
          aria-labelledby="pills-insurance-tab"
        >
          <div class="description">
            <h5>INSURED</h5>
            Insurer Ohio Security Ins Co Insured up to $1,000,000
          </div>
          <div class="d-flex image-container">
            <img class="m-auto" src="assets/img/licenses/insurance.png" alt="" />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-bonded"
          role="tabpanel"
          aria-labelledby="pills-bonded-tab"
        >
          <div class="description">
            <h5>BONDED</h5>
            Bonded Agent Philadelphia Indemnity Ins Co Bond Value $6,000
          </div>
          <div class="d-flex image-container">
            <img
              class="m-auto"
              src="assets/img/licenses/bound.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  `;
} else {
    licensesContainer.innerHTML = `
    <h2 class="section-title">We are licensed and inssured</h2>
    <div class="col">
      <div class="my-card-header">
        <i class="license-icon"></i>
        <span>License</span>
      </div>

      <div class="my-card-body">
        <div class="description">
          <h5>VERIFIED LICENSE</h5>
          License # ARTWAC830D2 <br />
          Status <span style="color: green">Active</span><br />
          State Washington<br />

          <a href="#" style="color: blueviolet">Verify</a> this license's
          status for Artway Construction at the Washington State Department of
          Labor & Industries.
        </div>
        <div class="image-container">
          <img class="m-auto" src="assets/img/licenses/license.png" alt="" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="my-card-header">
        <i class="license-icon"></i>
        <span>Insurance</span>
      </div>

      <div class="my-card-body">
        <div class="description">
          <h5>INSURED</h5>
          Insurer Ohio Security Ins Co Insured up to $1,000,000
        </div>
        <div class="image-container">
          <img class="" src="assets/img/licenses/insurance.png" alt="" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="my-card-header">
        <i class="license-icon"></i>
        <span>Bonded</span>
      </div>

      <div class="my-card-body">
        <div class="description">
          <h5>BONDED</h5>
          Bonded Agent Philadelphia Indemnity Ins Co Bond Value $6,000
        </div>
        <div class="image-container">
          <img class="" src="assets/img/licenses/bound.png" alt="" />
        </div>
      </div>
    </div>`;
}
}

window.onload = licensesDisplayFunc;

window.addEventListener('resize', licensesDisplayFunc)




