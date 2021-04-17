'use strict';

let htmlContainer = document.createElement('div');
let projectFrame = (name, date, description, imagesLinks) => {
    return `<div class="project">
            <div class="project-header">
              <h5>${name}</h5>
              <span>Date ${date}</span>
            </div>
            <div class="gallery">
              <div class="first">
                <img class="image-2" src="${imagesLinks[0]}" alt="" />
            </div>
            <div class="second-1">
             <img class="image-2" src="${imagesLinks[1]}" alt="" />
            </div>
            <div class="second-2">
              <img class="image-2" src="${imagesLinks[2]}" alt="" />
            </div>
            <div class="third-1">
              <img class="image-2" src="${imagesLinks[3]}" alt="" />
            </div>
            <div class="third-2">
              <img class="image-2" src="${imagesLinks[4]}" alt="" />
            </div>
            <div class="third-3">
              <img class="image-2" src="${imagesLinks[5]}" alt="" />
            </div> 
          

            </div>
          <div class="ptoroject-footer">
              <div class="description">
                  <p>${description}</p>
              </div>
          </div>
        </div>`
}
let imagesPaths = [];





fetch(`http://192.168.0.9:5500/assets/img/gallery/project-1`, {
    headers: {
        'Content-Type': 'text/html',
        'Accept': 'text/html'
    }

})
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();

    }).then(htmlString => {
        //Container for HTML. By whitch you can get acces to its components 
        htmlContainer.innerHTML = htmlString;
        console.log(htmlContainer);
        //Get NodeList of <a> elements that link to images in requested directory. And convert in to Array.
        const imagesAnchorns = Array.from(htmlContainer.querySelectorAll(".icon-image"));
        //Get link from anchorns
        const imagesLinks = imagesAnchorns.map(imgA => imgA.getAttribute("href"))
        console.log(imagesAnchorns);
        //Get an <a> element that links to json file with project info
        const infoAnchorn = htmlContainer.querySelector(".icon-application-json");

        const projectInfo = fetch(`${infoAnchorn}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => {
                return data;
            }) //should return data but return promise
            console.log(projectInfo);


        console.log(infoAnchorn);

    }).catch(() => {
        console.log("error");
    })


//   .then((stringHtml) => {
    //   htmlContainer.innerHTML = stringHtml;
    //   console.log(htmlContainer);
    //   console.log(Array.from(htmlContainer.getElementsByClassName("icon-image")).map(x => x.getAttribute('href')));
    //   imagesPaths = Array.from(htmlContainer.getElementsByClassName("icon-image")).map(x => {
    //     document.getElementsByClassName(`image-${i}`)[Array.from(htmlContainer.getElementsByClassName("icon-image")).indexOf(x)].setAttribute("src", x.getAttribute('href'))
    //   });
//   });



// let htmlContainer = document.createElement('div');                  

// fetch("http://192.168.0.9:5500/assets/img/gallery/project-1", {
//         headers : { 
//       'Content-Type': 'text/html',
//       'Accept': 'text/html',

//      }
// }).then(response => response.text())
//     .then((stringHtml) => {
//         htmlContainer.innerHTML = stringHtml;            //convert plain text to Html to have acces to its elements

//         //htmlContainer will containe html representation of our project diretories and files, so from there will be able to get files paths
//        console.log( Array.from(htmlContainer
//                             .querySelector('#files')
//                                 .querySelectorAll("li>a"))
//                                     .map( x => x.getAttribute('href'))) //will print an array with all file and direcotory paths in our directory

//     })



