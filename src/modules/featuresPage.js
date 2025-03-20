/* This page will show all the features of the todo list app*/

export function featuresPage() {
    let content = document.getElementById("content");

    let title =document.createElement("h1");
    title.textContent = "Features";
    content.appendChild(title);

    let text = document.createElement("p");
    text.textContent = "This is the features page. You will be able to create, edit , and delete a to do list.";
    content.appendChild(text);
}