import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';


export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  
  
  }
  
   
  
  const createTask = (evento) => {
    evento.preventDefault();
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];//esto significará q es un arreglo
    console.log("tasklist");
    //lo deabajo es para calendario
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    console.log(moment(date).format("DD/MM/YYYY"))
  
  
  
    
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
  
    const taskObj = {     //esto es un objeto
      value,
      dateFormat
    }
  
    tasklist.push(taskObj)
  
    /*sessionStorage.setItem("tasks",JSON.stringify(taskObj));*/  //funciona para almanecar en la sesión , si se cierra la página se reinicia la información guardada
    localStorage.setItem("tasks",JSON.stringify(tasklist)); // almancena y guarda incluso si se cierra la página web
  
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
  
    const dateElement =  document.createElement("span");
    dateElement.innerHTML = dateFormat;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task  //sino se pone esto , el addtask no puede jalar la infomración de este módulo
  };