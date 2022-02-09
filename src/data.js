import {
    brassier,
    bufanda,
    bufandaInfinita,
    bustier,
    conjuntoMujer,
    sacoMascota,
    bag,
    bags,
    dogFlag,
    grayScarf,
    hatPet,
    clothePet} from "./assets/images/exportImages"

const dataProducts = [
    {
        id: 1,
        name: "Bustier",
        colors: ["#920A0A", "#FFFFFF", "#222222"],
        size: ["u"],
        price: 35.000,
        category: 1,
        image: bustier
    },
    {
        id: 2,
        name: "Saco mascota",
        colors: ["#FF66C4", "#5E17EB", "#A6A6A6"],
        size: ["U"],
        price: 20.000,
        category: 2,
        image: sacoMascota
    },
    {
        id: 3,
        name: "Bufanda Infinita",
        colors: ["#FFDE59", "#65CB65"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: bufandaInfinita
    },
    {
        id: 4,
        name: "Interiores",
        colors: ["#22BACB", "#A6A6A6", "#920A0A","#FFFFFF"],
        size: ["U"],
        price: 45.000,
        category: 1,
        image: conjuntoMujer
    },
    {
        id: 5,
        name: "Bufanda",
        colors: ["#008037", "#FFFFFF","#A6A6A6"],
        size: ["U"],
        price: 20.000,
        category: 1,
        image: bufanda
    },
    {
        id: 6,
        name: "Gorro mascota",
        colors: ["#22BACB","#5E17EB"],
        size: ["U"],
        price: 10.000,
        category: 2,
        image: hatPet
    },
    {
        id: 7,
        name: "Conjunto",
        colors: ["#EF6622", "#A6A6A6", "#65CB65"],
        size: ["U"],
        price: 25.000,
        category: 2,
        image: clothePet
    },
    {
        id: 8,
        name: "Bufanda Larga",
        colors: ["#222222", "#FFFFFF"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: grayScarf
    },
    {
        id: 9,
        name: "Brassier",
        colors: ["#FF66C4", "#22BACB", "#FFDE59"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: brassier
    },
    {
        id: 10,
        name: "Mochila",
        colors: ["#920A0A", "#FFFFFF", "#222222"],
        size: ["U"],
        price: 15.000,
        category: 2,
        image: bag
    },
    {
        id: 11,
        name: "Billetera",
        colors: ["#65CB65", "#EF6622", "#A6A6A6", "#FFFFFF", ],
        size: ["U"],
        price: 15.000,
        category: 2,
        image: bags
    },
    {
        id: 12,
        name: "Pañoleta",
        colors: ["#222222", "#A6A6A6", "#920A0A", "#008037"],
        size: ["U"],
        price: 10.000,
        category: 2,
        image: dogFlag
    },
]

export { dataProducts }