

export function header() {
  let container = document.getElementById("header");
  
  let logoContainer = document.createElement("div");
  let navContainer = document.createElement("div");

  let featuresButton = document.createElement("button");
  let supportButton = document.createElement("button");

  container.style.display = "flex";
  container.style.border = "1px solid black";
  container.style.height = "100px";
  
  
  logoContainer.style.flex = "auto";
  logoContainer.classList.add("logo");
  logoContainer.style.flexGrow = "2";
  logoContainer.style.border = "1px solid black";
  
  
  navContainer.style.display = "flex";
  navContainer.style.flex = "auto";
  navContainer.classList.add("nav");

  featuresButton.style.flex = "auto";
  featuresButton.classList.add("features");
  featuresButton.textContent = "Features";

  supportButton.style.flex = "auto";
  supportButton.textContent = "Support";  
  supportButton.classList.add("support");

  container.appendChild(logoContainer);
  container.appendChild(navContainer);
  navContainer.appendChild(featuresButton);
  navContainer.appendChild(supportButton);


}