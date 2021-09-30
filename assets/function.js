fetch("../assets/response_marvel.json")
    .then(res => res.json())
    .then(function(datos) {
        for (let index = 0; index < datos.data.results.length; index++) {
            const element = datos.data.results[index];
            for (let j = 0; j < element.comics.items.length; j++) {
                const comic = element.comics.items[j];
                let container = `<div class="container-comic grid mt-20 trans-opacity">
                                    <div class="spacing d-flex-aic">
                                        <img src="https://via.placeholder.com/300/09f/${element.thumbnail.path+'.'+element.thumbnail.extension}" alt="heroe-cover" class="box-img">
                                        <div class="pl-space">
                                            <h4 class="fs-20">${element.name}</h4>
                                            ${ comic.name.includes('Captain America') ? `<span class="fs-15 name font-muli-bold">${comic.name}</span>` : `<span class="fs-15">${comic.name}</span>`}
                                        </div>
                                    </div>
                                    <div class="box-delete text-center pointer">
                                        <span class="style-cross">X</span>
                                    </div>
                                    <span class="style-cross pos-delete delete">Eliminar</span>
                                </div>`
                document.querySelector('.padding-main-section').innerHTML += container;
                let boxDelete = document.querySelectorAll('.box-delete');
                let btnDelete = document.querySelectorAll('.delete');
                boxDelete.forEach(element => {
                    element.addEventListener('click', function(e) {
                        if(element.parentElement.offsetWidth === 1090) {
                             element.parentElement.style.width='1000px';
                             this.firstElementChild.textContent='>';
                             element.parentElement.children[2].style.zIndex='1';
                        } else {
                             element.parentElement.style.width='1090px';
                             this.firstElementChild.textContent='X';
                             element.parentElement.children[2].style.zIndex='-1';
                        }
                     })
                });
                btnDelete.forEach(element => {
                    element.addEventListener('click', function(e) {
                        element.style.opacity = '0';
                        e.target.parentElement.remove();
                    })
                })
            }
        }
    })