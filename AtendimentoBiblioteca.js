import { Leitor } from "./Leitor.js";
export class AtendimentoBiblioteca{
    cadastrarnovoleitor(nome,idade){
    try{
        const leitor= new Leitor(nome,idade);
        leitor.validarIdade(idade);
        console.log("Leitor cadastrado com sucesso!");
    }
    catch {
        console.log("Iremos verificar o possivel erro! ");
        this.traduzirCodigoDeErro(erro.message)
    }
    finally{
        console.log("operação concluida com sucesso!");
    }
  }
    traduzirCodigoDeErro(erro){
        switch(erro){
            case 1:
            novo= new ("Ano Invalido!");
            new ("Idade Invalida!");
            const erro= new("Os campos de ano de publicação e idade do leitor aceitam apenas números!");
            
            case 2:
            novo = new("Ano fora do limite!");
            console.log("O ano no catálogo dese ser situado entre 1000 e 2026!");

            case 3:
             novo = new("leitor menor de idade!");
             console.log("Leitores menores  de 12 anos necessitam da presença fisica do responsavel para realizar o cadastro!");
             break;

             default:
                console.log("Serviço Indisponível!");

        }
    }
}