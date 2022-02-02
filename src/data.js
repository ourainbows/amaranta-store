import {brassier,bufanda,bufandaInfinita,bustier,conjuntoMujer,sacoMascota} from "./assets/images/exportImages"

const dataProdcuts = [
    {
        id: 1,
        name: "Bustier",
        colors: ["#5A0912", "#BF8B38", "#0F858C"],
        size: ["S"],
        price: 35000,
        category: 1,
        image: bustier
    },
    {
        id: 2,
        name: "Saco para mascota",
        colors: ["#C0478E", "#120820", "#C1B8B6"],
        size: ["U"],
        price: 20000,
        category: 2,
        image: sacoMascota
    },
    {
        id: 3,
        name: "Bufanda Infinita",
        colors: ["#CE8F30", "#405459"],
        size: ["U"],
        price: 25000,
        category: 1,
        image: bufandaInfinita
    },
    {
        id: 4,
        name: "Conjunto ropa Interior",
        colors: ["#5A85A5", "#B3BDC6", "#BBBFC0"],
        size: ["U", "S", "SX "],
        price: 45000,
        category: 1,
        image: conjuntoMujer
    },
    {
        id: 5,
        name: "Bufanda",
        colors: ["#306764"],
        size: ["U"],
        price: 20000,
        category: 1,
        image: bufanda
    },
    {
        id: 6,
        name: "Gorro para mascota",
        colors: ["#608BAC"],
        size: ["U"],
        price: 10000,
        category: 2,
        image: sacoMascota
    },
    {
        id: 7,
        name: "Conjunto para mascota ",
        colors: ["#955E6B", "#A6A7A2"],
        size: ["U"],
        price: 25000,
        category: 2,
        image: sacoMascota
    },
    {
        id: 8,
        name: "Brassier",
        colors: ["#CDA0B5", "#80A9A3"],
        size: ["U", "S", "L"],
        price: 20000,
        category: 1,
        image: brassier
    }
]

export { dataProdcuts }