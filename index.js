//parte 
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { ItemBase } from './ItemBase.js';
import {Leitor} from './Leitor.js';
import { Ebook, LivroFisico } from './TiposDeItens.js';

const rl = readline.createInterface({ input, output });
console.log("=== BIBLIOTECA MUNICIPAL!===");

async function iniciarSistema() {
 const mome= await rl.question("Digite o nome do usúario:");
 const idade= await rl.question("Digite a idade do usúario:");
}
 //parte 02//
 const cadastro= parseFloat(await rl.question("Qual opção quer cadastrar 1-LivroFisico, 2-Ebook ?"));
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
disasAtraso = ("* 2.50")
   console.log("Quantos dias de atraso tem essa devoluçaõ?");

 //parte 05//
calcularMulta();
   console.log(`\n O valor total da multa: ${calcularMulta.toFixed(2)}`);

   rl.close()



