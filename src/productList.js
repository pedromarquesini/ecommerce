export let list = [    
    {
        id: 2,
        name: "Camisa Botafogo",
        price: 299,
        team: "Botafogo",
        fileName: "camisa-2.jpeg"
    },
    {
        id: 3,
        name: "Camisa Brasil",
        price: 299,
        team: "Brasil",
        fileName: "camisa-3.jpeg"
    },
    {
        id: 4,
        name: "Camisa Manchester City",
        price: 299,
        team: "Manchester City",
        fileName: "camisa-4.jpeg"
    },
    {
        id: 5,
        name: "Camisa Fluminense",
        price: 299,
        team: "Fluminense",
        fileName: "camisa-5.jpeg"  
    },
    {
        id: 6,
        name: "Camisa Inglaterra",
        price: 299,
        team: "Inglaterra",
        fileName: "camisa-6.jpeg"

    },
    {
        id: 7,
        name: "Camisa Korea",
        price: 299,
        team: "Korea",
        fileName: "camisa-7.jpeg"
    },
    {
        id: 8,
        name: "Camisa Liverpool",
        price: 299,
        team: "Liverpool",
        fileName: "camisa-8.jpeg"
    },
    {
        id: 9,
        name: "Camisa Palmeiras",
        price: 299,
        team: "Palmeiras",
        fileName: "camisa-9.jpeg"
    },    
];

//Utilizando o push e unshift para adicionar um novo produto na lista
list.push({//push adiciona no final da lista
    id: 10,
    name: "Camisa USA",
    price: 299,
    team: "USA",
    fileName: "camisa-10.jpeg"
});

list.unshift({//unshift adiciona no inicio da lista
    id:1,
    name: "Camisa Arsenal Preta",
    price: 299,
    team: "Arsenal",
    fileName: "camisa-1.jpeg"
});