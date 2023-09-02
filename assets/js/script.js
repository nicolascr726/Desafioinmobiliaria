const propiedadesVentas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5.000,
    smoke: false,
    pets: false,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de unamontaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1.200,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4.500,
        smoke: false,
        pets: true,
    },
    ];
    

const propiedadesAlquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2.000,
    smoke: false,
    pets: true,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2.500,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2.200,
        smoke: false,
        pets: false,
    },
    ];

    const templateCards = (data, cards = data.length) => {

        let template = "";
    
        for (let i = 0; i < cards; i++) {
    
            template +=
                `<div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${data[i].src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">
                        ${data[i].nombre}
                        </h5>
                        <p class="card-text">
                        ${data[i].descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${data[i].ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${data[i].habitaciones} Habitaciones | 
                            <i class="fas fa-bath"></i> ${data[i].baños} Baños
                        </p>
                        <p>
                        <i class="fas fa-dollar-sign"></i> ${data[i].costo}
                        </p>
                        <p class= "${data[i].smoke ? "text-success" : "text-danger"}">
                        <i
                            class="fas ${data[i].smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> ${data[i].smoke ? "Permitido fumar" : "No se permite fumar"}
                        </p>
                        <p class="${data[i].pets ? "text-success" : "text-danger"}">
                            <i class= "${data[i].pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i>
                            ${data[i].pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                        </p>
                    </div>
                </div>
            </div>`
            ;
        }
        return template;
    }

const ventaContainer = document.querySelector('#venta > .row');
const alquilerContainer = document.querySelector('#alquiler > .row');

//* Condicionando en renderizado de elementos

const currentPage = location.pathname;

switch (currentPage) {
    case "/index.html":
        alquilerContainer.innerHTML = templateCards(propiedadesAlquiler, 3);
        ventaContainer.innerHTML = templateCards(propiedadesVentas, 3);
        break;

    case "/propiedades_alquiler.html":
        alquilerContainer.innerHTML = templateCards(propiedadesAlquiler);
        break;

    case "/propiedades_venta.html":
        ventaContainer.innerHTML = templateCards(propiedadesVentas);
        break;
    default:
        console.error("Página no reconocida:", currentPage);
        break;
}