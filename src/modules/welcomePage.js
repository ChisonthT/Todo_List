
// Creates the welcome page
function homePage() {
    let content = document.getElementById("content")

    let text = document.createElement("h1");
    text.textContent = "Welcome to the Todo List!";
    content.appendChild(text); 



}


export default homePage;