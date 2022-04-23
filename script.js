window.addEventListener('load', ()=>{
    const form = document.getElementById('navbar');
    const input = document.getElementById('taskname');
    const list_el = document.querySelector("#tasks");
    const c_list_el = document.querySelector("#ctask");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const task = input.value;
        
        if(!task){
            alert("Please fill out the task!!!");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("contents");
        // task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const task_input_el= document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "delete";

        //complete button
        const task_done_el = document.createElement("button");
        task_done_el.classList.add("done");
        task_done_el.innerHTML = "done";

        //complete delete button
        const task_cdelete_el = document.createElement("button");
        task_cdelete_el.classList.add("delete");
        task_cdelete_el.innerHTML = "delete";
        
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', ()=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }
            else{
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "Edit";
            }
        });

        task_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
            
            
        });
        
        task_done_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
            c_list_el.appendChild(task_el);
            task_actions_el.removeChild(task_edit_el);
            task_actions_el.removeChild(task_done_el);
            task_actions_el.removeChild(task_delete_el);
            task_actions_el.appendChild(task_cdelete_el);

        })

        task_cdelete_el.addEventListener('click', ()=>{
            c_list_el.removeChild(task_el);
        })
    });
});

// JUST ADD LOCALSTORAGE TO THIS JAVASCRIPT SO THAT WHEN A USER REFRESHES A PAGE THEN THE DATA SAVED IN THE LIST WILL BE THERE UNTIL AND UNLESS YOU DELETE IT FROM THE DELETE BUTTON.