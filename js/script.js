 // Aquí tu código

 




 const boton = document.getElementById('agregar')
 const lista = document.getElementById('lista')
 const buttonreset = document.getElementById('reset')
 
 
 
 boton.addEventListener('click', function(){
    const producto = prompt('Agregar Elementos');
    if(producto){
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto;
        lista.appendChild(nuevoItem);
    }

 })

 buttonreset.addEventListener('click', function(){
  lista.innerHTML = '';
 });








