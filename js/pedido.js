const contador = document.getElementById(`contador`)

const precioTotal = document.getElementById(`precioTotal`)

const cantidadResuelta = document.getElementById(`cantidadResuelta`)

function mostrarCarrito(productoAgregado) {
    let tr = document.createElement(`tr`)
    tr.innerHTML = `
                        <td id = "remove${productoAgregado.id}"><a href="#"><i class="fa-solid fa-x"></i></a></td>
                        <td><img src="${productoAgregado.img}" alt=""></td>
                        <td>${productoAgregado.nombre}</td>
                        <td>$${productoAgregado.precio}</td>
                        <td><input type="number" value="0" id = "incrementarCant"></td>
                        <td id = "cantidadResuelta"></td>
                    `
                    contCarrito.appendChild(tr) 

    let eliminarItems = document.getElementById(`remove${productoAgregado.id}`)
    eliminarItems.addEventListener(`click`, ()=> {
    eliminarItems.parentElement.remove()
        
    carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregado.id)
    actualizarCarrito()
    localStorage.setItem(`carrito`, JSON.stringify(carritoDeCompras))
} )


}

function actualizarCarrito (){
    contador.innerText = carritoDeCompras.length

    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    /* let incrementarCant = document.getElementById(`incrementarCant`)

    incrementarCant.addEventListener(`change`, () => {
        incrementarCant.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio * incrementarCant.value, 0)
        console.log(incrementarCant)
        
    }) */
    
}

function recuperarLS(){
    let recuperar = JSON.parse(localStorage.getItem(`carrito`))
    console.log(recuperar)
    if(recuperar){
        recuperar.forEach(elemento => {
            carritoDeCompras.push(elemento)
            mostrarCarrito(elemento)
            actualizarCarrito()
        });
    }
}


recuperarLS()