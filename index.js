//parte 
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {Leitor} from './Leitor.js';
import { Ebook, LivroFisico } from './TiposDeItens.js';
import { AtendimentoBiblioteca } from './AtendimentoBiblioteca.js';

const rl = readline.createInterface({ input, output });
console.log("=== BIBLIOTECA MUNICIPAL!===");

async function iniciarSistema() {
 const nome= await rl.question("Digite o nome do usúario:");
 const idade= await rl.question("Digite a idade do usúario:");
 const novo = new AtendimentoBiblioteca();
 novo.cadastrarnovoleitor(nome, idade);
}
 //parte 02//
 const cadastro= parseFloat(await rl.question("Qual opção quer cadastrar 1-Ebook, 2-LivroFisico?"));
 const titulo= await rl.question("Informe o titulo do livro:");
 const autor= await rl.question("Infome o nome do autor:");
 const anoPublicacao= await rl.question("Informe o ano da publicação:");
 //parte 03//
 let livro
 switch(cadastro){
   case 1:
      livro = new Ebook(titulo, autor, anoPublicacao);
      break;
      
      case 2:
          const corredor= parseFloat(await rl.question("Informe o número do corredor:"));
         livro = new LivroFisico(titulo, autor, anoPublicacao, corredor);
         break;
default:
   console.log("Opção inválida!");
   rl.close()
   process.exit();
}

 //parte 04//
   const diasAtraso = parseInt(await rl.question("Informe a quantidade de dias de atraso: "));
   const calcMulta = livro.calcularMulta(diasAtraso);

   console.log(`\n O valor total da multa: ${calcMulta.toFixed(2)}`);

   rl.close()



