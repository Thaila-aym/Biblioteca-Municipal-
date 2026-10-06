export class ItemBase{
    #anoPublicacao;

    constructor(titulo,autor, anoPublicacao){
         if (new.target === ItemBase) {
            throw new Error ("[ERRO] ItemBase Não é permitido cadastrar um item genérico!");
         }
            this.titulo = titulo;
            this.autor = autor;
            this.anoPublicacao = anoPublicacao;
        
    }
     get anoPublicacao() { return this.#anoPublicacao; }

set anoPublicacao(novoano){
    if (novoano <1000 || novoano >2026){
        console.log("[BLOQUEIO] O ano é invalido!");
        return;
    }
    if(isNaN(novoano)){
        throw new Error("Ano Invalido!");
    }
    this.#anoPublicacao = novoano;
}

calcularMulta(diasAtraso){
throw new Error ("[ERROR] A classe filha precisa implementar o cálculo de multa `calcularMulta()`!")
}    
     

} 