

export function resetPage() {
    let content = document.getElementById("content");
    content.remove();

    let newContent = document.createElement("div");
    newContent.id = "content";
    document.body.appendChild(newContent);
}