const textArea = document.querySelector('#text-input')
const inputName = document.querySelector('#file-name')
const selectMenu = document.querySelector('#select-menu')
const saveBtn = document.querySelector('.save-btn')

const handleSaveFile = () => {
    if(textArea.value) {
        const blob = new Blob([textArea.value], {type: selectMenu.value})
        const fileURL = URL.createObjectURL(blob)
        const aElement = document.createElement('a')
        aElement.href = fileURL
        aElement.download = inputName.value
        aElement.click()
    }else{
        alert('please enter your document')
    }
}

const handleChangeBtnText = () => {
    const options = selectMenu.options[selectMenu.selectedIndex].text.split(' ')
    saveBtn.innerText = `Save As ${options[0]} File`
}

saveBtn.addEventListener('click', handleSaveFile)
selectMenu.addEventListener('change', handleChangeBtnText)