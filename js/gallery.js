"use strict";


/*
Fetch project data and put it in DOM
*/
let htmlContainer = document.createElement("div");

let name = "";
let date = "";
let description = "";
let imageLinks = [];

const linkToTheGllery = "https://github.com/kornatskyi/artway/tree/production/assets/img/gallery";

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
          <div class="project-footer">
              <div class="description">
                  <p>${description}</p>
              </div>
          </div>`;
};



let selector=".img-view>.close"
try {
    
    document.querySelector(selector).addEventListener("click", () => {
        document.querySelector(".img-view").style.display = "none";
    })
} catch (error) {
    console.log("No button with " + selector + " selector");
}

class Project {
    constructor(name, date, description, imageLinks) {
        this.imageLinks = imageLinks;
        this.imgElements = imageLinks.map(link => {
            let element = document.createElement('img');
            element.setAttribute('src', link);
            element.addEventListener('click', (e) => {
                 
                let counter = this.imgElements.indexOf(element);
                console.log(counter);
                console.log(e.target);
                document.querySelector(".img-view>img").src = element.src;
                document.querySelector(".img-view").style.display = "flex";
                document.querySelector(".img-view>.left").addEventListener('click', () => {

                    if (counter === 0) {
                        counter = this.imgElements.length;
                    }
                    counter--;
                    document.querySelector(".img-view>img").src = this.imgElements[counter].src;

                });
                document.querySelector(".img-view>.right").addEventListener('click', () => {
                    counter++;
                    if (counter >= this.imgElements.length) {
                        counter = 0;
                    }
                    document.querySelector(".img-view>img").src = this.imgElements[counter].src;

                });;
            
            })
         
            return element;
        });

        this.description = description;
        this.date = date;
        this.name = name;
        this.htmlComponent = document.createElement('div');
        this.htmlComponent.className = "project";
        this.htmlComponent.innerHTML = `<div class="project-header">
                                        <h5>${this.name}</h5>
                                        <span>Date ${this.date}</span>
                                    </div>
                                    <div class="gallery">
                                        <div class=" first">
                                    </div>
                                    <div class=" second-1">
                                    </div>
                                    <div class=" second-2">
                                    </div>
                                    <div class=" third-1">
                                    </div>
                                    <div class=" third-2">
                                    </div>
                                    <div class=" third-3">
                                    </div> 
                                    </div>
                                    <div class="project-footer">
                                        <div class="description">
                                            <p>${this.description}</p>
                                        </div>
                                    </div>`;
        this.htmlComponent.querySelectorAll(".gallery>div").forEach((div, index) => div.appendChild(this.imgElements[index]));
        this.appendTo(document.querySelector("#my-container"));
    }

    appendTo(parent) {
        parent.appendChild(this.htmlComponent)
    }

    slider() {

    }


}

let projects = [];






// /**
//  * 
//  * @param {strin} linkToTheGllery link to the directory which containes all projects directorys and will fetch data from 
//  * @param {number} numberOfProjects number of projects to fetch
//  * @returns data in form [name of the project(string), date of the project(string),
//  *  descriotion of th project(string), link to the images(array of strings ) ]
//  */
// const getProjectsDataFomGallery = async function (linkToTheGllery, numberOfProjects) {
//     let data = [];
//     await fetch(linkToTheGllery, {
//         headers: {
//             "Content-Type": "text/html",
//             Accept: "text/html",
//         },
//     }).then(response => {

//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.text();
//     }).then(async (galleryHTMLString) => {
//         let galleryHTML = document.createElement('div')
//         galleryHTML.innerHTML = galleryHTMLString;

//         galleryHTML.querySelector("#files").childElementCount;
//         for (let i = 1; i < galleryHTML.querySelector("#files").childElementCount; i++) {
//             await fetch(linkToTheGllery + `project-${i}`, {
//                 headers: {
//                     "Content-Type": "text/html",
//                     Accept: "text/html",
//                 },
//             })
//                 .then((response) => {


//                     if (!response.ok) {
//                         throw Error(response.statusText);
//                     }
//                     return response.text();
//                 })
//                 .then(async (htmlString) => {
//                     let imagesPaths;
//                     let projectInfo;
//                     let imagesAnchorns;
//                     let infoAnchorn;
//                     //Container for HTML. By whitch you can get acces to its components
//                     htmlContainer.innerHTML = htmlString;

//                     //Get NodeList of <a> elements that link to images in requested directory. And convert in to Array.
//                     imagesAnchorns = Array.from(
//                         htmlContainer.querySelectorAll(".icon-image")
//                     );
//                     //Get link from anchorns
//                     imagesPaths = imagesAnchorns.map((imgA) => imgA.getAttribute("href"));
//                     //Get an <a> element that links to json file with project info
//                     infoAnchorn = htmlContainer.querySelector(".icon-application-json");

//                     await fetch(infoAnchorn, {
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                     })
//                         .then((response) => response.json())
//                         .then((JSONdata) => {
//                             data.push([JSONdata.name, JSONdata.date, JSONdata.description, imagesPaths]);
//                         });
//                 })
//                 .catch(() => {
//                     console.log("error");
//                 });
//         }
//     })

//     return data;
// }

// getProjectsDataFomGallery(linkToTheGllery).then(projectsData => {
//     projectsData.forEach(projectData => projects.push(new Project(projectData[0], projectData[1], projectData[2], projectData[3])))
// })


const projectData1 = {
    "name": "First project",
    "date": "20/21/2018",
    "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"
}
const imageLinks1 = ["assets/img/gallery/project-1/first.jpeg", "assets/img/gallery/project-1/second-1.jpeg", "assets/img/gallery/project-1/second-2.jpeg", "assets/img/gallery/project-1/third-1.jpg", "assets/img/gallery/project-1/third-2.jpeg", "assets/img/gallery/project-1/third-3.jpg"]
const projec1 = new Project(projectData1["name"], projectData1["date"], projectData1["description"],  imageLinks1 );


const projectData2 = {
    "name": "Second project",
    "date": "20/21/2020",
    "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"
}
const imageLinks2 = ["assets/img/gallery/project-2/first.jpeg", "assets/img/gallery/project-2/second-1.jpeg", "assets/img/gallery/project-2/second-2.jpeg", "assets/img/gallery/project-2/third-1.jpeg", "assets/img/gallery/project-2/third-2.jpeg", "assets/img/gallery/project-2/third-3.jpeg"]
const projec2 = new Project(projectData1["name"], projectData1["date"], projectData1["description"],  imageLinks1 );
