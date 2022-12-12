function addUIItem(txt) {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    const delBtn = document.createElement("button");
    delBtn.textContent = "-";
    delBtn.style.width = "25px";
    delBtn.style.height = "25px";
    delBtn.style.borderRadius = "5px";
    delBtn.style.fontSize = "20px";
    delBtn.style.marginLeft = "10px";

    li.appendChild(delBtn);
    delBtn.addEventListener("click", (e) => {
        li.parentNode.removeChild(li);
        savedTasks = savedTasks.filter((e) => e !== txt);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
}
let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
// выгрузка из LS имеющихся задач
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// UI элементы для любых сохраненных задач
savedTasks.forEach(addUIItem);

btn.addEventListener("click", () => {
    let txt = input.value.trim();
    if (txt === "") {
        alert("Пожалуйста, напишите вашу задачу!");
    } else {
        savedTasks.push(txt);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        input.value = "";
        addUIItem(txt);
    }
});

list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
});
