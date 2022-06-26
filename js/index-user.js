/* Creo funcion para que los productos se tomen del archivo stock */ 


const contProductos = document.getElementById(`product-container`)

const contCarrito = document.getElementById(`contCarrito`)

const contador = document.getElementById(`contador`)

const marca = document.getElementById(`marca`)

const categoria = document.getElementById(`categoria`)

function filtro(){
    marca.addEventListener(`change`, () => {
        console.log(marca.value)
        if(marca.value == `all`){
            publicarProductos(stockProd)
        } else {
            publicarProductos(stockProd.filter(elemento => elemento.marca == marca.value))
        }
    })
}

filtro()


publicarProductos(stockProd)

function publicarProductos (array){
    contProductos.innerHTML = ""
    array.forEach(el => {
        let div = document.createElement(`div`)
        div.className = `pro-container`
        div.innerHTML = `<div class="pro">
                            <img src="${el.img}" alt="">
                                <div class="desc">
                                    <span>${el.marca}</span>
                                    <h5>${el.nombre}</h5>
                                    <div class="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                <h4>$${el.precio}</h4>
                            </div>
                            <a href="#" id="cart${el.id}"><i class="fa-solid fa-cart-plus"></i></a>
                        </div>`

        contProductos.appendChild(div)

        let btnSum = document.getElementById(`cart${el.id}`)

        /* console.log(btnSum) */

        btnSum.addEventListener(`click`, () =>{
            console.log(el.id)
            agregarAlCarrito(el.id)
        })
    })
}

function agregarAlCarrito(id) {
    let productoAgregado = stockProd.find(item => item.id === id)
    console.log(productoAgregado)
    carritoDeCompras.push(productoAgregado)
    // mostrarCarrito(productoAgregado)
    actualizarCarrito()

    localStorage.setItem(`carrito`, JSON.stringify(carritoDeCompras))
}

function actualizarCarrito (){
    contador.innerText = carritoDeCompras.length
}


function recuperarLS(){
    let recuperar = JSON.parse(localStorage.getItem(`carrito`))
    console.log(recuperar)
    if(recuperar){
        recuperar.forEach(elemento => {
            carritoDeCompras.push(elemento)
            actualizarCarrito()
        });
    }
}

recuperarLS()



