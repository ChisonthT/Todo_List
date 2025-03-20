export function supportPage() {
    let content = document.getElementById("content")
    
    let search = document.createElement("input")
    search.setAttribute.id = "search";
    search.type = "text";  
    search.placeholder = "Search";

    content.appendChild(search);
}