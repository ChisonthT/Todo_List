


export function header(homePage, supportPage, resetPage, featuresPage) {
  let container = document.getElementById("header");
  container.classList.add("container"); 
  container.style.height = "100px";
  
  
  let logoContainer = document.createElement("div");
  logoContainer.classList.add("logo", "container");
  logoContainer.style.flexGrow = "2";
  let btn = document.createElement("button");
  btn.textContent = "Logo";
  logoContainer.appendChild(btn);
  
  let navContainer = document.createElement("div");
  navContainer.classList.add("nav","container");
  navContainer.style.flex = "auto";
  

  let featuresButton = document.createElement("button");
  featuresButton.classList.add("navButton");
  featuresButton.textContent = "Features";

  let supportButton = document.createElement("button");
  supportButton.classList.add("navButton");
  supportButton.textContent = "Support";  
  


  container.appendChild(logoContainer);
  container.appendChild(navContainer);
  navContainer.appendChild(featuresButton);
  navContainer.appendChild(supportButton);


  featuresButton.addEventListener("click", function() {
    resetPage();
    featuresPage();
  });

  supportButton.addEventListener("click", function() {
    resetPage();
    supportPage();
  });

  logoContainer.addEventListener("click", function() {
    resetPage();
    homePage();
  });
}