function add(){
   const pargraph= document.createElement('p');
   const container=document.querySelector('.container-todo')
   const input=document.getElementById('do')
   pargraph.innerText= input.value ;
   const edit= document.createElement('button');
   const drop= document.createElement('button');
   drop.addEventListener('click', () =>{ 
    pargraph.removeAttribute;

})
   container.append(pargraph)
   pargraph.style.width='200px';
   pargraph.style.border='black 2px soild';
   pargraph.setAttribute('class','todo');
   container.append(edit)
    container.append(drop)
    edit.innerHTML='Edit';
    drop.innerText='Delete';
    input.value=' ';
}
function remove(){
    
}