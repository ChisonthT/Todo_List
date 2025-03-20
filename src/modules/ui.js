
function resetPage() {
  let content = document.getElementById("content");
  content.remove();

  let newContent = document.createElement("div");
  newContent.id = "content";
  document.body.appendChild(newContent);
}

function homePage() {
  let content = document.getElementById("content")

  let text = document.createElement("h1");
  text.textContent = "Welcome to the Todo List!";
  content.appendChild(text); 

}

function supportPage() {
  let content = document.getElementById("content")
  
  let search = document.createElement("input")
  search.setAttribute.id = "search";
  search.type = "text";  
  search.placeholder = "Search";

  content.appendChild(search);
}

function featuresPage() {
  let content = document.getElementById("content");

  let title =document.createElement("h1");
  title.textContent = "Features";
  content.appendChild(title);

  let text = document.createElement("p");
  text.textContent = "This is the features page. You will be able to create, edit , and delete a to do list.";
  content.appendChild(text);
}

function header() {
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


export {header, resetPage, homePage, featuresPage, supportPage};