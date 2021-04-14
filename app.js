const moment = require('moment');
const fs = require('fs');
const nomeArquivo = 'pets.json';
const nomePetshop = " *** PETSHOP DH ***";

//primeiro le o json e depois converte
let petsJson = fs.readFileSync(nomeArquivo); //le o conteudo do arquivo
let arquivoPets = JSON.parse(petsJson);//coverte para o formato JS

//console.log(arquivoPets.pets);
const atualizarJson= () => {
    let listaJson = JSON.stringify(arquivoPets,null,2); //converte o objeto literal,null para minificar, 2 para o numero de linhas, para Json
    fs.writeFileSync(nomeArquivo,listaJson, 'utf-8');//caminho arquivo,conteudo novo,formato

}

// let pets = [
//     {
//         nome: 'Bob',
//         idade: 2,
//         raca: 'pug',
//         tipo:'cachorro',
//         vacinado: true,
//         genero: 'M',
//         servicos: [] 
//     },
//     {
//         nome: 'Snoopy',
//         idade: 4,
//         raca: 'pug',
//         tipo:'cachorro',
//         vacinado: true,
//         genero: 'M',
//         servicos: [] 
//     },
//     {
//         nome: 'Paçoca',
//         idade: 10,
//         raca: 'vira-lata caramelo',
//         tipo:'cachorro',
//         vacinado: false,
//         genero: 'F',
//         servicos: [] 
//     }
// ];

// function adicionarPet(){
//}

// vamos usar o arrow function
const adicionarPet = (infoPet) => {
    arquivoPets.pets.push(infoPet);
    atualizarJson();
    console.log(`${infoPet.nome} está cadastrado no nosso sistema!`)
}

// adicionarPet({
//     nome: 'Rex',
//     idade:4,
//     raca: 'caramelo',
//     tipo: 'cachorro',
//     vacinado: false,
//     genero: 'M',
//     servicos: []
// });

// console.log(pets);

//tentar fazer para 24/03 pets[0].nome

//let arrowFunction = listaDePets => 
// function listarPets(listaDePets){
//     //return listaDePets[0].nome+ listaDePets[0].idade
//     let vacinado = '';

//     for (let i=0; i<listaDePets.length; i++){
//         if(listaDePets[i].vacinado == true){
//             vacinado = "vacinado"
//         }else {
//             vacinado = "não vacinado";
//         }
//         console.log (listaDePets[i].nome + ',' +  listaDePets[i].idade + ',' +  listaDePets[i].raca + ',' +  listaDePets[i].tipo + ',' +  vacinado + ',' +  listaDePets[i].genero + ',' +  listaDePets[i].servicos);
//     }

    //console.log (lista[i])
    // }
// }

const listarPets = (listaDePets) => {
    let vacinado
    for(let i=0;i<listaDePets.length;i++){
        // if(listaDePets[i].vacinado==true){
        //     vacinado = "vacinado";
        // }else {
        //     vacinado = "não vacinado";
        // }
        console.log(`${listaDePets[i].nome}, ${listaDePets[i].idade} anos, ${listaDePets[i].tipo}, ${listaDePets[i].raca}, ${(listaDePets[i].vacinado) ? `vacinado`: `não vacinado`}`);

        for(let index = 0; index< listaDePets[i].servicos.length;index++){
            console.log(`${listaDePets[i].servicos[index].data} - ${listaDePets[i].servicos[index].nome}`);
        }
    }
};
//listarPets(arquivoPets.pets)

//listarPets(pets);

const vacinarPet = (pet) => {
    if (!pet.vacinado){
        pet.vacinado = true;
        atualizarJson();
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}
//vacinarPet(arquivoPets.pets[0])

//vacinarPet(pets[0]);
// vacinarPet(pets[1]);
// vacinarPet(pets[2]);

const campanhaVacina = (listaPets) => {
    let totalVacinados=0
    for(let i=0;i<listaPets.length;i++){
        if(!listaPets[i].vacinado){
            listaPets[i].vacinado = true;
            //totalVacinados=totalVacinados+1;
            //totalVacinados += 1;
            totalVacinados++;
        }
    }
    atualizarJson();
    console.log(`Parabéns,${totalVacinados} pets foram vacinados nessa campanha!`);
};
//campanhaVacina(arquivoPets.pets)

//campanhaVacina(pets);

const darBanhoPet = (pet) => {
    pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJson();

console.log(`${pet.nome} está cheiroso!`);
}
//darBanhoPet(arquivoPets.pets[0])

// darBanhoPet(pets[2]);

const tosarPet = (pet) => {
    pet.servicos.push({
        nome: 'tosa',
        data:moment().format('DD-MM-YYYY')
    });
    atualizarJson();
console.log(`${pet.nome} está com cabelinho na régua!`);
} 
//tosarPet(arquivoPets.pets[1])

// tosarPet(pets[2]);

const apararUnhasPet = (pet) => {
        pet.servicos.push({
            nome: 'corte de unhas',
            data:moment().format('DD-MM-YYYY')
        });
        atualizarJson();
console.log(`${pet.nome} está de unhas aparadas!`);
}
//apararUnhasPet(arquivoPets.pets[2])

// apararUnhasPet(pets[2]);
// console.log("-----")
// listarPets(pets);

//método de array busca o primeiro elemento do array que seja o pet procurado:
const buscarPet= (nomePet) =>{
    const petEncontrado = arquivoPets.pets.find((pet) => {
        return pet.nome ==nomePet;
    });
    //console.log(petEncontrado);
    //console.log(petEncontrado ? petEncontrado : 'Nenhum pet encontrado com esse nome');
    console.log(petEncontrado ? petEncontrado : `Nenhum pet encontrado com esse nome ${nomePet}`);
}
//buscarPet('Ventilador');

const atenderCliente = (pet, servico) =>{
    console.log(`Olá, ${pet.nome}!`);
    servico(pet);
    console.log('Até mais');
}
atenderCliente(arquivoPets.pets[0], darBanhoPet);
console.log('--------')
atenderCliente(arquivoPets.pets[2], tosarPet);

//adiconar um novo atributo
const addInfoCastrado = (listaPets)=>{
    let listaPetsAtualizado = listaPets.map((pet)=> {
        pet.castrado = true;

        return pet;
    });
    arquivoPets.pets = listaPetsAtualizado;
    atualizarJson();
}
addInfoCastrado(arquivoPets.pets);
listarPets(arquivoPets.pets);


const listarVacinados = () =>{
    console.log('** VACINADO **');

    let vacinados = arquivoPets.pets.filter((pet) => {
        return pet.vacinado;
//se for verdadeiro retorna a lista 
    })
    console.log(vacinados);
    console.log(`Temos ${vacinados.length} pets vacinados!`);
}
listarVacinados();

