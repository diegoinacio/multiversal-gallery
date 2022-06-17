import { INDEX } from "../../metadata.mjs";

// ! Init main content
const main = document.querySelector("#main");
main.innerHTML = "";

for (const [i, a] of INDEX.entries()) {
  // * Build article
  const article = document.createElement("article");
  article.id = a.id;
  article.className = "thumb";
  main.appendChild(article);

  article.innerHTML = `
  <a href="images/fulls/${a.id}.png" class="image">
    <img src="images/thumbs/${a.id}.png" />
  </a>
  <h2>${a.name}</h2>
  <p>${a.description}</p>
  <a
    href="https://raw.githubusercontent.com/diegoinacio/multiversal-gallery/master/images/fulls/${a.id}.png"
    class="fa regular fa-expand" 
    id="bt-full-resolution" 
    title="view full resolution"
    target="_blank"
  ></a>
  `;
}

// ! Include copyright to header
const header = document.querySelector("#header");

const copyright = document.createElement("div");
copyright.className = "copyright";

let year_ft = new Date().getFullYear();
copyright.innerText = `© ${year_ft} Diego Inácio. All rights reserved.`;

header.appendChild(copyright);
