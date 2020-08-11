// -------------- MAIN LEER MAS SECTION -------------
const leerMasButton =  document.querySelector('#leerMasButton');
const leerMasSection =  document.querySelector('#leerMasSection');

leerMasButton.addEventListener('click',(e)=>{
    e.preventDefault();
    leerMasSection.innerHTML = "El revestimiento de PVC es flexible y resistente. Las palas producen en pvc especial no propagan el fuego y no conducen la electricidad, lo que garantiza una mayor seguridad."
});

// -------------- DONDE COMPRAR SECTION ------------
const todos = document.querySelector('#donde-comprar-todos');
const caba = document.querySelector('#donde-comprar-caba');
const gba = document.querySelector('#donde-comprar-gba');

const todosButton = document.querySelector('#todosButton');
const cabaButton = document.querySelector('#cabaButton');
const gbaButton = document.querySelector('#gbaButton');

todosButton.addEventListener('click', (e)=>{
    e.preventDefault();
    chooseSection(todos);
});

cabaButton.addEventListener('click', (e)=>{
    e.preventDefault();
    chooseSection(caba);
});

gbaButton.addEventListener('click', (e)=>{
    e.preventDefault();
    chooseSection(gba);
});


function chooseSection(section){
    todos.style.display = 'none';
    caba.style.display = 'none';
    gba.style.display = 'none';
    section.style.display = 'inline-block';
}
