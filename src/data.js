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
        colors: ["#5A0912", "#BF8B38", "#0F858C"],
        size: ["S"],
        price: 35.000,
        category: 1,
        image: bustier
    },
    {
        id: 2,
        name: "Saco mascota",
        colors: ["#C0478E", "#120820", "#C1B8B6"],
        size: ["U"],
        price: 20.000,
        category: 2,
        image: sacoMascota
    },
    {
        id: 3,
        name: "Bufanda Infinita",
        colors: ["#CE8F30", "#405459"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: bufandaInfinita
    },
    {
        id: 4,
        name: "Interiores",
        colors: ["#5A85A5", "#B3BDC6", "#5A0912"],
        size: ["U"],
        price: 45.000,
        category: 1,
        image: conjuntoMujer
    },
    {
        id: 5,
        name: "Bufanda",
        colors: ["#306764"],
        size: ["U"],
        price: 20.000,
        category: 1,
        image: bufanda
    },
    {
        id: 6,
        name: "Gorro mascota",
        colors: ["#608BAC"],
        size: ["U"],
        price: 10.000,
        category: 2,
        image: hatPet
    },
    {
        id: 7,
        name: "Conjunto",
        colors: ["#955E6B", "#A6A7A2"],
        size: ["U"],
        price: 25.000,
        category: 2,
        image: clothePet
    },
    {
        id: 8,
        name: "Bufanda Larga",
        colors: ["#4F535B", "#807269"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: grayScarf
    },
    {
        id: 9,
        name: "Brassier",
        colors: ["#CDA0B5", "#80A9A3"],
        size: ["U"],
        price: 25.000,
        category: 1,
        image: brassier
    },
    {
        id: 10,
        name: "Mochila",
        colors: ["#725037", "#D4D5D0"],
        size: ["U"],
        price: 15.000,
        category: 2,
        image: bag
    },
    {
        id: 11,
        name: "Billetera",
        colors: ["#63694F", "#D57434", "#5F5959", "#D5D3C4", ],
        size: ["U"],
        price: 15.000,
        category: 2,
        image: bags
    },
    {
        id: 12,
        name: "Pañoleta",
        colors: ["#101627", "#5D2111"],
        size: ["U"],
        price: 10.000,
        category: 2,
        image: dogFlag
    },
]

export { dataProducts }