fetch("../assets/response_marvel.json")
    .then(res => res.json())
    .then(function(datos) {
        for (let index = 0; index < datos.data.results.length; index++) {
            const element = datos.data.results[index];
            for (let j = 0; j < element.comics.items.length; j++) {
                const comic = element.comics.items[j];
                let container = `<div class="container-comic grid mt-20">
                                    <div class="spacing d-flex-aic">
                                        <img src="https://via.placeholder.com/300/09f/${element.thumbnail.path+'.'+element.thumbnail.extension}" alt="heroe-cover" class="box-img">
                                        <div class="pl-space">
                                            <h4 class="fs-20">${element.name}</h4>
                                            <span class="fs-15 name">${comic.name}</span>
                                        </div>
                                    </div>
                                    <div class="box-delete text-center pointer">
                                        <span class="style-cross">X</span>
                                    </div>
                                    <span class="style-cross pos-delete delete${j} pointer">Eliminar</span>
                                </div>`
                document.querySelector('.padding-main-section').innerHTML += container;
            }
        }
    })
