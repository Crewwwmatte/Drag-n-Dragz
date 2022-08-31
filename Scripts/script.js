console.log('Yo!')

const placeholders = document.querySelectorAll('.placeholder')
const item = document.querySelector('.item')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    // console.log(placeholder)
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
    // console.log('dragstart', event.target)
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)

    event.target.classList.add('hold')
}

function dragEnd(event) {
    // console.log('dragend')
    event.target.classList.remove('hold', 'hide')
}

function dragOver(event) {
    // console.log('Over')
    event.preventDefault()
}

function dragEnter(event) {
    // console.log('enter')
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    // console.log('leave')
    // setTimeout(() => {
    //     event.target.classList.remove('hovered')
    // }, 250)
    event.target.classList.remove('hovered')
}

function dragDrop(event) {
    // console.log('drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}