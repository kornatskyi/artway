"use strict";


/*
Fetch project data and put it in DOM
*/
let htmlContainer = document.createElement("div");

let imageLinks = [];
let description = "";
let date = "";
let name = "";
const linkToTheGllery = "http://192.168.0.9:5500/assets/img/gallery";

const fillFrame = (name, date, description, imageLinks) => {
    return `<div class="project-header">
              <h5>${name}</h5>
              <span>Date ${date}</span>
            </div>
            <div class="gallery">
              <div class=" first">
                <img class="image image-2" src="${imageLinks[0]}" alt="" />
            </div>
            <div class=" second-1">
             <img class="image image-2" src="${imageLinks[1]}" alt="" />
            </div>
            <div class=" second-2">
              <img class="image image-2" src="${imageLinks[2]}" alt="" />
            </div>
            <div class=" third-1">
              <img class="image image-2" src="${imageLinks[3]}" alt="" />
            </div>
            <div class=" third-2">
              <img class="image image-2" src="${imageLinks[4]}" alt="" />
            </div>
            <div class=" third-3">
              <img class="image image-2" src="${imageLinks[5]}" alt="" />
            </div> 
          

            </div>
          <div class="ptoroject-footer">
              <div class="description">
                  <p>${description}</p>
              </div>
          </div>`;
};



const getProjectsDataFomGallery = function (linkToTheGllery, numberOfProjects) {
    let data = [];
    fetch(linkToTheGllery, {
        headers: {
            "Content-Type": "text/html",
            Accept: "text/html",
        },
    }).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();
    }).then(galleryHTMLString => {
        let galleryHTML = document.createElement('div')
        galleryHTML.innerHTML = galleryHTMLString;
        console.log(galleryHTML);
        galleryHTML.querySelector("#files").childElementCount;
        for (let i = 1; i < galleryHTML.querySelector("#files").childElementCount; i++) {
            fetch(`http://192.168.0.9:5500/assets/img/gallery/project-${i}`, {
                headers: {
                    "Content-Type": "text/html",
                    Accept: "text/html",
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.text();
                })
                .then((htmlString) => {
                    let imagesPaths;
                    let projectInfo;
                    let imagesAnchorns;
                    let infoAnchorn;
                    //Container for HTML. By whitch you can get acces to its components
                    htmlContainer.innerHTML = htmlString;
                    console.log(htmlContainer);

                    //Get NodeList of <a> elements that link to images in requested directory. And convert in to Array.
                    imagesAnchorns = Array.from(
                        htmlContainer.querySelectorAll(".icon-image")
                    );
                    //Get link from anchorns
                    imagesPaths = imagesAnchorns.map((imgA) => imgA.getAttribute("href"));
                    console.log('image anchorns',imagesAnchorns);
                    //Get an <a> element that links to json file with project info
                    infoAnchorn = htmlContainer.querySelector(".icon-application-json");
                    data.push([infoAnchorn, imagesPaths]);
                    fetch(infoAnchorn, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            projectInfo = data;
                            console.log("Data: " + JSON.stringify(projectInfo));
                            let projectContainer = document.createElement('div');
                            projectContainer.className = "project";
                            projectContainer.innerHTML = fillFrame(projectInfo.name, projectInfo.date, projectInfo.description, imagesPaths);
                            document.querySelector("#my-container").appendChild(projectContainer);

                            return projectInfo;
                        });
                })
                .catch(() => {
                    console.log("error");
                });
        }
    })

    return data;
}

console.log(getProjectsDataFomGallery(linkToTheGllery));

// fetch("http://192.168.0.9:5500/assets/img/gallery", {
//     headers: {
//         "Content-Type": "text/html",
//         Accept: "text/html",
//     },
// }).then(response => {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response.text();
// }).then(galleryHTMLString => {
//     let galleryHTML = document.createElement('div')
//     galleryHTML.innerHTML = galleryHTMLString;
//     console.log(galleryHTML);
//     galleryHTML.querySelector("#files").childElementCount;
//     for (let i = 1; i < galleryHTML.querySelector("#files").childElementCount; i++) {
//         fetch(`http://192.168.0.9:5500/assets/img/gallery/project-${i}`, {
//             headers: {
//                 "Content-Type": "text/html",
//                 Accept: "text/html",
//             },
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response.text();
//             })
//             .then((htmlString) => {
//                 let imagesPaths;
//                 let projectInfo;
//                 let imagesAnchorns;
//                 let infoAnchorn;
//                 //Container for HTML. By whitch you can get acces to its components
//                 htmlContainer.innerHTML = htmlString;
//                 console.log(htmlContainer);

//                 //Get NodeList of <a> elements that link to images in requested directory. And convert in to Array.
//                 imagesAnchorns = Array.from(
//                     htmlContainer.querySelectorAll(".icon-image")
//                 );
//                 //Get link from anchorns
//                 imagesPaths = imagesAnchorns.map((imgA) => imgA.getAttribute("href"));
//                 console.log(imagesAnchorns);
//                 //Get an <a> element that links to json file with project info
//                 infoAnchorn = htmlContainer.querySelector(".icon-application-json");

//                 fetch(infoAnchorn, {
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                 })
//                     .then((response) => response.json())
//                     .then((data) => {
//                         projectInfo = data;
//                         console.log("Data: " + JSON.stringify(projectInfo));
//                         let projectContainer = document.createElement('div');
//                         projectContainer.className = "project";
//                         projectContainer.innerHTML = fillFrame(projectInfo.name, projectInfo.date, projectInfo.description, imagesPaths);
//                         document.querySelector("#my-container").appendChild(projectContainer);

//                         return projectInfo;
//                     });
//             })
//             .catch(() => {
//                 console.log("error");
//             });
//     }
// })



/**
 * Interactive gallery
 */





