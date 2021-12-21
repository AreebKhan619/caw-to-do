const inputSelectionString = "#task__to__be__added"

let tasks = []

const renderTasks = () => {
    document.querySelector("#item__list").innerHTML = ""
    tasks.forEach(({ name, isCompleted }, index) => {
        let myChild = document.createElement('li')

        let taskName = document.createElement('div')
        taskName.className = "task__name"
        taskName.appendChild(document.createTextNode(name))

        myChild.appendChild(taskName)
        myChild.id = "task__" + index
        myChild.classList.add("task__item")


        let rightSideContainer = document.createElement('div')
        rightSideContainer.className = "right__side__action"

        if (isCompleted) {
            myChild.classList.add("task__complete")
        }
        else {
            let markDoneBtn = document.createElement("button")
            markDoneBtn.innerHTML = "Mark Done"
            markDoneBtn.className = "mark__done__btn"
            markDoneBtn.onclick = () => markDoneHandler(index)
            rightSideContainer.appendChild(markDoneBtn)
        }


        let removeBtn = document.createElement("button")
        removeBtn.className = "remove__btn"
        removeBtn.innerHTML = "❌"
        removeBtn.onclick = () => removeHandler(index)
        rightSideContainer.appendChild(removeBtn)

        myChild.appendChild(rightSideContainer)
        document.querySelector("#item__list").appendChild(myChild)
    })
}

renderTasks()

const removeHandler = (index) => {
    tasks.splice(index, 1)
    renderTasks()
}

const markDoneHandler = index => {
    tasks[index] = {
        ...tasks[index],
        isCompleted: true
    }
    renderTasks()
}



const submitHandler = e => {
    e.preventDefault()
    const taskSubmitted = document.querySelector(inputSelectionString).value
    if (taskSubmitted.trim()) addTask(taskSubmitted)
    document.querySelector(inputSelectionString).value = ""
}



const addTask = taskName => {
    tasks.push({
        name: taskName,
        isCompleted: false
    })
    renderTasks()
}


