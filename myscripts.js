let input = document.getElementById('input');
let submit = document.getElementById('submit');
let parentList = document.getElementById('parentList');

/* TO ADD CHAPTER */
submit.addEventListener('click', (e) => {
    //if empty msg is shown 1st remove msg then add element
    e.preventDefault();
    if(parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();
    }

    //save input value as a chapter name
    let currChapter = input.value;

    //create new element
    let newLi = document.createElement('li');

    //add classes
    newLi.className = "list-group-item d-flex justify-content-between itm bg-transparent";

    //add innerHTML content
    newLi.innerHTML = `<h3 class="flex-grow-1">${currChapter}</h3>
    <button class="q btn btn-warning mx-3 text-white" onclick="editChapter(this)">Edit</button>
    <button class="q btn btn-danger" onclick="removeChapter(this)">Remove</button>` ;

    //add to list(ul)
    parentList.appendChild(newLi);
    input.value = "";

})

// /* TO REMOVE CHAPTER */
function removeChapter(currElement) {

    //remove current element
    currElement.parentElement.remove(); 

    //check if no element exist
    if(parentList.children.length <= 0) {

        //create msg
        let emptyMsg = document.createElement("h3");
        emptyMsg.className ="emptyMsg";
        emptyMsg.textContent = "Nothing is here, Plz add chapter!";
        emptyMsg.style.textAlign = 'center';
        
        //append to list(ul)
        parentList.append(emptyMsg);
    }
}

function editChapter(currElement) {
    if(currElement.textContent == "Done") {

		//change button text
        currElement.textContent = "Edit";

		//save input chapter name
        let currChapter = currElement.previousElementSibling.value;

		//create h3 element
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1";
        currHeading.textContent = currChapter;
		
		//replace new value to old value
        currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling);
    }
    else {
		//change button text
        currElement.textContent = "Done";

		//save chapter name
        let currChapter = currElement.previousElementSibling.textContent;

		//create an input
        let currInput = document.createElement('input');
        currInput.type = "text"
        currInput.placeholder = "Chapter Name"
        currInput.className = "form-control"
        currInput.value = currChapter;
        
		//replace new value to old value
        currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling);
    }
}

