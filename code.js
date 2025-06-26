const button = document.getElementById("button");
const textbox = document.getElementById("textbox");
const maindiv = document.getElementById("main");
button.onclick = function(){
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const para = document.createElement("p");
    para.innerText = textbox.value;
    para.className = "para"

    const taskwrapper = document.createElement("div");
    taskwrapper.className = "task hidden"; 

    const deleteimg = document.createElement("i");
    deleteimg.className = "fa-solid fa-trash";
    deleteimg.style.width = "20px";
    deleteimg.style.height = "20px";
    deleteimg.style.cursor = "pointer";

    if (!textbox.value.trim()){
        return
    } else{
        taskwrapper.appendChild(checkbox);
        taskwrapper.appendChild(para);
        taskwrapper.appendChild(deleteimg)
        checkbox.onchange = function(){
        para.style.textDecoration = checkbox.checked ? "line-through" : "none";
        };
    
        maindiv.appendChild(taskwrapper);
        textbox.value = "";;
    
    }
    deleteimg.onclick = () => {
    taskwrapper.classList.add("hidden");
    taskwrapper.addEventListener("transitionend", () => {
      taskwrapper.remove();
    });
  };
    
    requestAnimationFrame(() => {
    taskwrapper.classList.remove("hidden");
  });
    
}