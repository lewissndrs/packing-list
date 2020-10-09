document.addEventListener("DOMContentLoaded",() => {

    // post message on init.
    console.log("Javascript loaded");

    // form listener
    const form = document.querySelector('#form');
    form.addEventListener('submit',(event) => {
        // TEST console log
        console.log("event: ",event);
        // prevent POST request
        event.preventDefault();
        // remove "not posted anything" message
        removeEmptyMessage();
        // create list item from form
        createListItem(event);
        // clear the form
        event.target.reset();
    })

    // delete button listener
    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click',(event) => {
        // capture list parent
        const listParent = document.querySelector('ul');
        // cycle through li items and delete all
        while (listParent.firstChild) {
            listParent.removeChild(listParent.firstChild);
        }
        // replace empty message
        replaceEmptyMessage();
    })


    function removeEmptyMessage(){
        const emptyMessage = document.querySelector('#empty-message');
        emptyMessage.classList.add('hide');
        console.log('"empty" message hidden');
    };

    function replaceEmptyMessage() {
        const emptyMessage = document.querySelector('#empty-message');
        emptyMessage.classList.remove('hide');
        console.log('"empty" message visible');
    }

    function createListItem(event){
        // capture the parent element
        const listParent = document.querySelector('ul');
        // create a child element
        const listChild = document.createElement('li');
        // add classes
        listChild.classList.add('list-item');
        const categoryClass = event.target.category.value;
        listChild.classList.add(categoryClass)
        // create elements for each input within the child
        const item = document.createElement('h3');
        item.textContent = event.target.item.value;

        const quantity = document.createElement('p');
        quantity.textContent = `x${event.target.quantity.value}`;

        const weight = document.createElement('p');
        weight.textContent = `${event.target.weight.value}g each`;

        const category = document.createElement('p');
        category.textContent= event.target.category.value;
        // append the elements to the parents
        
        listChild.appendChild(item);
        listChild.appendChild(quantity);
        listChild.appendChild(weight);
        listChild.appendChild(category);

        listParent.appendChild(listChild);
    }

})