let tasks = []

const renderTasks = () => {
    document.querySelector("#item__list").innerHTML = ""
    tasks.forEach(({ name, isCompleted }, index) => {
        let myChild = document.createElement('li')
        myChild.appendChild(document.createTextNode(name))
        myChild.id = "task__" + index
        myChild.classList.add("task__item")

        if (isCompleted) {
            myChild.classList.add("task__complete")
        }
        else {
            let markDoneBtn = document.createElement("button")
            markDoneBtn.innerHTML = "Mark As Done"
            markDoneBtn.onclick = () => markDoneHandler(index)
            myChild.appendChild(markDoneBtn)
        }


        let removeBtn = document.createElement("button")
        removeBtn.innerHTML = "Remove"
        removeBtn.onclick = () => removeHandler(index)


        // childBtn.setAttribute("data-index", index)
        // childBtn.setAttribute("data-listId", "task__" + index)

        myChild.appendChild(removeBtn)

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
    const taskSubmitted = document.querySelector("#task__to__be__added").value
    addTask(taskSubmitted)
}



const addTask = taskName => {
    tasks.push({
        name: taskName,
        isCompleted: false
    })
    renderTasks()
}


