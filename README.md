
# Planejador Financeiro Pessoal

Este é um aplicativo de planejamento financeiro pessoal desenvolvido utilizando **Ionic** e **Angular**. Ele permite simular empréstimos bancários, investimentos e controlar despesas mensais. O app oferece alertas e sugestões para ajudar o usuário a tomar decisões financeiras mais informadas e equilibrar seu orçamento.

## Funcionalidades

### 1. Simulação de Empréstimo Bancário
O usuário pode calcular o valor das parcelas do empréstimo, inserindo o valor total do empréstimo, a taxa de juros anual e o número de parcelas. O app alertará o usuário se a taxa de juros for superior a 20% ao ano, indicando um risco elevado.

### 2. Simulação de Investimento
Essa funcionalidade permite calcular o valor final de um investimento com base no valor inicial, na taxa de retorno anual e no período de investimento. O app alerta para investimentos de alto risco, caso a taxa de retorno seja superior a 15% ao ano.

### 3. Simulação de Despesas Mensais
Aqui, o usuário insere o valor de suas despesas mensais (moradia, alimentação, transporte e lazer) e o app calcula o total de despesas. Se as despesas forem superiores à renda líquida do usuário, o app sugere cortes de gastos em categorias específicas.

## Tecnologias Utilizadas

- **Frontend**: Ionic Framework, Angular
- **Lógica de Programação**: Condicionais `if` e `else` para validação de dados e controle de fluxo
- **Importações**: Módulos do Ionic e Angular para estruturação das funcionalidades do app.

### Exemplo de Lógica com if/else

Utilizamos a lógica condicional `if/else` para validar as taxas de juros e retorno do investimento, garantindo que o usuário receba alertas adequados. Exemplo:

```typescript
if (taxaDeJuros > 0.20) {
  alert("A taxa de juros é muito alta! O empréstimo pode ser arriscado.");
} else {
  alert("Taxa de juros dentro da média. Avalie com mais cautela.");
}
```

### Exemplo de Importação de Módulos

Abaixo está um exemplo de como utilizamos imports no projeto para estruturar a funcionalidade das páginas:

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
}
```

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/planejador-financeiro-pessoal.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd planejador-financeiro-pessoal
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o aplicativo:
   ```bash
   ionic serve
   ```

## Screenshots (opcional)

*Adicione capturas de tela ou imagens do seu aplicativo aqui.*

## Contribuições

Se você deseja contribuir para o projeto, fique à vontade para enviar um pull request. Toda contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
