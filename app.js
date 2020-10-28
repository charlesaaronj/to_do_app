// 

const addForm = document.querySelector ('.adds');
const list = document.querySelector('.to-dos');
const search = document.querySelector('.search input');
const button = document.querySelector('.button');
const wait = document.querySelector('.wait');


//Get value from form on submit

addForm.addEventListener('submit', e => {

    //prevent the default action of browser reload
    
    e.preventDefault();

    //create variable with value from input field and trim it

    const todo = addForm.add.value.trim();

    console.log ('adding', 'to-do', todo)

    // if there is a value of length greater than zero run generateTemplate function with value from input field

    if (todo.length){
    generateTemplate(todo);

    // reset the input field

    addForm.reset();

    };
});



//function used to output html

const generateTemplate = todo => {

    const html = `
    
    <li class="item list-group-item d-flex justify-content-between align-items-center">
    <span class="flex-grow-1">${todo}</span>
    <i class="far fa-trash-alt delete p-2"></i>
    <i class="fas fa-exclamation-circle important p-2"></i>
    </li>
    `;
    
    // add the previous html to list

    list.innerHTML += html;
    
    };


//delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

const filterTodos = (term) => {
Array.from(list.children)
.filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add('filtered'));

Array.from(list.children)
.filter((todo) =>  todo.textContent.includes(term))
.forEach((todo) => todo.classList.remove('filtered'));


};

//keyup event

search.addEventListener('keyup', e => {
    console.log('searching');
    e.preventDefault();
    const term = search.value.trim().toLowerCase();
    console.log(term);
    filterTodos(term);

})


    list.addEventListener('click', e => {
        if(e.target.classList.contains('important')){
            e.target.parentElement.style.background = 'red';
        };
    });