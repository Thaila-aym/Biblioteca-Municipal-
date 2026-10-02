import { ItemBase } from "./ItemBase.js";  

export class LivroFisico extends ItemBase{
    constructor( titulo, autor, anoPublicacao, corredor) {
        super(titulo, autor, anoPublicacao);
        this.corredor = corredor;
    }
    calcularMulta(diasAtraso) {
        let multa = diasAtraso * 2.50;
        console.log("O valor da multa do livro fisico: R$");
        return multa;
    }
}

export class Ebook extends ItemBase{
    constructor( titulo, autor, anoPublicacao, formatoArquivo) {
        super(titulo, autor, anoPublicacao);
        this.formatoArquivo = formatoArquivo;
    }
    calcularMulta(diasAtraso) {
        throw new ERROR("[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor")
        return 0.00;
    }
}