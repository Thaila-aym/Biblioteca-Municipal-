export class Leitor{
    #idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    set idade(idade){
    if (idade >= 12){
        throw new Error ("LEITOR MENOR E IDADE!");
        return;
}
if(isNaN(idade)){
    throw new Error("Idade Invalido!");
}
this.idade= idade;
}
}