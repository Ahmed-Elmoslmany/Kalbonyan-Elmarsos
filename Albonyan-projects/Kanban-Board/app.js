const addStart = document.querySelector('.addStart')
const addProg = document.querySelector('.addProg')
const addComp = document.querySelector('.addComp')
let startedList = document.querySelector('.started-list')
let progressList = document.querySelector('.progress-list')
let completedList = document.querySelector('.completed-list')
const closeBtn = document.getElementById('close');
const addTask1 = document.getElementById('addTask1');
const addTask2 = document.getElementById('addTask2');
const addTask3 = document.getElementById('addTask3');
const textarea = document.getElementById('text');

let StartedTasks = localStorage.getItem('StartedTasks') !== null ?
JSON.parse(localStorage.getItem('StartedTasks')) : []
let ProgressTasks = localStorage.getItem('ProgressTasks') !== null ?
JSON.parse(localStorage.getItem('ProgressTasks')) : []
let CompletedTasks = localStorage.getItem('CompletedTasks') !== null ?
JSON.parse(localStorage.getItem('CompletedTasks')) : []




// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}


function addStartedDom(StartedTasks){
  
      const TaskEl = document.createElement('li');

      TaskEl.className = 'draggable'
      TaskEl.setAttribute('draggable', 'true')

    // create addData to taskel
    TaskEl.innerHTML = `
    <input type="text" id='in${StartedTasks.id}' value="${StartedTasks.text}" readonly='true'>
    <button class="edit" onclick="editTransTask(document.getElementById('in${StartedTasks.id}'))"><ion-icon class="icon edit" name="create-outline"></ion-icon></button>
    <button class="delete" onclick="removeTransTask1(${StartedTasks.id})"><ion-icon class="icon delete" name="trash-outline"></ion-icon></button>
    `
    // onclick="editTransTask1(TaskEl.querySelector('input))"
  
    // console.log(TaskEl)

    // Append task to list
    startedList.appendChild(TaskEl)
    
    document.getElementById('text-box').classList.remove('show')
    
    
  
}



function addTransStart(){
  if(textarea.value.trim() !== ''){
  const StartTask = {
    id: generateID(),
    text: textarea.value
  }
  StartedTasks.push(StartTask)
  addStartedDom(StartTask)
  setStartedTasks()
  textarea.value = ''
  }else{
    document.getElementById('text').classList.add('error')
    setTimeout(() => {
      document.getElementById('text').classList.remove('error')
    }, 500);

  }
}


function addProssedDom(ProgressTasks){
  
  const TaskEl = document.createElement('li');

  TaskEl.className = 'draggable'
  TaskEl.setAttribute('draggable', 'true')

// create addData to taskel
TaskEl.innerHTML = `
<input type="text" id='in${ProgressTasks.id}' value="${ProgressTasks.text}" " readonly>
<button class="edit" onclick="editTransTask(document.getElementById('in${ProgressTasks.id}'))"><ion-icon class="icon edit" name="create-outline"></ion-icon></button>
<button class="delete" onclick="removeTransTask2(${ProgressTasks.id})"><ion-icon class="icon delete" name="trash-outline"></ion-icon></button>
`

// Append task to list
progressList.appendChild(TaskEl)
document.getElementById('text-box').classList.remove('show')



}

function addTransPross(){
  if(textarea.value.trim() !== ''){
  
  const ProgressTask = {
    id: generateID(),
    text: textarea.value
  }
  ProgressTasks.push(ProgressTask)
  addProssedDom(ProgressTask)
  setProgressTasks()
  textarea.value = ''
  }else{
    document.getElementById('text').classList.add('error')
    setTimeout(() => {
      document.getElementById('text').classList.remove('error')
    }, 500);

  }
}


function addCompDom(CompletedTasks){
  
  const TaskEl = document.createElement('li');

  TaskEl.className = 'draggable'
  TaskEl.setAttribute('draggable', 'true')

// create addData to taskel
TaskEl.innerHTML = `
<input type="text" id='in${CompletedTasks.id}' value="${CompletedTasks.text}"  readonly>
<button class="edit" onclick="editTransTask(document.getElementById('in${CompletedTasks.id}'))"><ion-icon class="icon edit" name="create-outline"></ion-icon></button>
<button class="delete" onclick="removeTransTask3(${CompletedTasks.id})"><ion-icon class="icon delete" name="trash-outline"></ion-icon></button>
`

// Append task to list
completedList.appendChild(TaskEl)
document.getElementById('text-box').classList.remove('show')



}

function addTransComp(){
  if(textarea.value.trim() !== ''){
  const CompTask = {
    id: generateID(),
    text: textarea.value
  }
  CompletedTasks.push(CompTask)
  addCompDom(CompTask)
  setCompletedTasks()
  textarea.value = ''
  }else{
    document.getElementById('text').classList.add('error')
    setTimeout(() => {
      document.getElementById('text').classList.remove('error')
    }, 500);

  }
}




function setStartedTasks(){
  localStorage.setItem('StartedTasks', JSON.stringify(StartedTasks))
}


function setProgressTasks(){
  localStorage.setItem('ProgressTasks', JSON.stringify(ProgressTasks))

}


function setCompletedTasks(){
  localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks))

}

function removeTransTask1(id){
  StartedTasks = StartedTasks.filter((item) => item.id !== id)
 
  
  init();
  setStartedTasks()
  setTimeout(() => {
    location.reload()
  }, 300); 
  

}

function removeTransTask2(id){
  ProgressTasks = ProgressTasks.filter((item) => item.id !== id)
  
  
  init();
  setProgressTasks()
 
  setTimeout(() => {
    location.reload()
  }, 300);

}

function removeTransTask3(id){
  CompletedTasks = CompletedTasks.filter((item) => item.id !== id)

  

  init();
  setCompletedTasks()
  setTimeout(() => {
    location.reload()
  }, 300);

}


function editTransTask(el){
  console.log(el);
  el.removeAttribute('readonly')
  el.value = ''
  el.focus()
  el.classList.add('focus')
  el.addEventListener('focusout', () => {
    el.setAttribute('readonly', 'true')

    el.classList.remove('focus')
    updateStorageTask1()
    updateStorageTask2()
    updateStorageTask3()
    init()
    location.reload()
  })
  
}


// listen to buttons
function targetListByBtn1(){
  document.getElementById('text-box').classList.add('show')
  addTask1.addEventListener('click', addTransStart)
  addTask2.addEventListener('click', addTransPross)
  addTask3.addEventListener('click', addTransComp)  
  // console.log("strta")
}



// listen to buttons
function targetListByBtn2(){
  document.getElementById('text-box').classList.add('show')
  addTask1.addEventListener('click', addTransStart)
  addTask2.addEventListener('click', addTransPross)
  addTask3.addEventListener('click', addTransComp)  
  // console.log("strta")
}



// listen to buttons
function targetListByBtn3(){
  document.getElementById('text-box').classList.add('show')
  addTask1.addEventListener('click', addTransStart)
  addTask2.addEventListener('click', addTransPross)
  addTask3.addEventListener('click', addTransComp)
  
  // console.log("strta")
}



// open add task container
addStart.addEventListener('click', targetListByBtn1)
addProg.addEventListener('click', targetListByBtn2)
addComp.addEventListener('click', targetListByBtn3)

// close add task container
closeBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.remove('show')
})

function init(){
  startedList.innerHTML =''
  StartedTasks.forEach(addStartedDom)

  progressList.innerHTML =''
  ProgressTasks.forEach(addProssedDom)

  completedList.innerHTML =''
  CompletedTasks.forEach(addCompDom)
  
}

init()

function updateStorageTask1(){
  StartedTasks = []
  containers.forEach((item, idx) => {
    if(idx === 0){
      let allDataTask1 = item.querySelectorAll('li')
      allDataTask1.forEach((diiv) => {
        if(diiv.querySelector('input').value.trim() !== ''){
        const firsttask = {
          id: generateID(),
          text: diiv.querySelector('input').value
          
        };
        StartedTasks.push(firsttask)
        }
      })
    }
  })
  setStartedTasks()
}

function updateStorageTask2(){
  ProgressTasks = []
  containers.forEach((item, idx) => {
    if(idx === 1){
      let allDataTask1 = item.querySelectorAll('li')
      allDataTask1.forEach((diiv) => {
        if(diiv.querySelector('input').value.trim() !== ''){
        const firsttask = {
          id: generateID(),
          text: diiv.querySelector('input').value
          
        };
        ProgressTasks.push(firsttask)
      }
      })
    }
  })
  setProgressTasks()
}

function updateStorageTask3(){
  CompletedTasks = []
  containers.forEach((item, idx) => {
    if(idx === 2){
      let allDataTask1 = item.querySelectorAll('li')
      allDataTask1.forEach((diiv) => {
        if(diiv.querySelector('input').value.trim() !== ''){
        const firsttask = {
          id: generateID(),
          text: diiv.querySelector('input').value
          
        };
        CompletedTasks.push(firsttask)
      }
      })
    }
  })
  setCompletedTasks()
}

/* Drag and Drop desktop test */
let draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
   
  })

  
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    draggable.classList.remove('bb-drag')
    
    setStartedTasks()
    setCompletedTasks()
    setProgressTasks()


  })

  draggable.addEventListener('dragover', () => {
    draggable.classList.add('bb-drag')
  })

  draggable.addEventListener('dragleave', () => {
    draggable.classList.remove('bb-drag')

  })



  draggable.addEventListener('drop', () => {
    draggable.classList.remove('bb-drag')
    draggable.classList.remove('dragging')

  })


  // touch 
  draggable.addEventListener('touchstart', () => {
    draggable.classList.add('dragging')

  })

  draggable.addEventListener('touchend', () => {
    draggable.classList.remove('dragging')

  })

  
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    console.log(e.clientY)
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
    updateStorageTask1()
    updateStorageTask2()
    updateStorageTask3()
  })

  

})

containers.forEach((container) => {
  container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    // console.log(e.targetTouches[0].clientY)
    const afterContainer = getDragAfterContainerTouched(e.targetTouches[0].clientY);
    if (afterContainer) {
      const afterElement = getDragAfterElement(
        afterContainer,
        e.targetTouches[0].clientY
      );
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
        afterContainer.appendChild(draggable);
      } else {
        afterContainer.insertBefore(draggable, afterElement);
      }
      updateStorageTask1();
      updateStorageTask2();
      updateStorageTask3();
    }
  });
});

function getDragAfterContainerTouched(y) {
  const lists = [...document.getElementsByTagName('ul')];
  return lists.find((el) => {
    const box = el.getBoundingClientRect();
    if (y >= box.top && y <= box.bottom) {
      return el;
    }
  });
}


function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
/* End Drag and Drop desktop test */
