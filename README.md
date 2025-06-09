
# 📱 H&L - Finanças Pessoais

Este aplicativo foi desenvolvido como parte de uma entrega para o **curso profissionalizante de desenvolvimento de software da fiap na matéria de Linguagem de Programação III**, em dupla com **Luiza Sales**. O foco do projeto é a **educação financeira**, permitindo simulações de empréstimos, investimentos e controle de despesas mensais.

Utilizamos o **Ionic Framework** com **Angular**, explorando conceitos de UI responsiva, lógica de negócios e manipulação de dados com `ngModel`. Neste repositório, estão incluídos apenas os arquivos **essenciais para o funcionamento da lógica principal** do aplicativo.

## 🧩 Funcionalidades

O app é dividido em três abas principais:

### 🔹 Tab 1 - Empréstimos
Simula o valor das parcelas mensais de um empréstimo com base no valor total, taxa de juros anual e número de meses.
- Inputs: valor do empréstimo, taxa de juros, tempo de pagamento.
- Resultado: valor estimado da parcela mensal.
- Função: `calcularEmprestimo()`.

### 🔹 Tab 2 - Investimentos
Calcula o valor futuro de um investimento com base em aportes únicos, considerando juros compostos com capitalização diária.
- Inputs: valor inicial, taxa de juros anual, tempo (anos).
- Alerta para investimentos de alto risco (taxa anual > 15%).
- Função: `calcularInvestimento()`.

### 🔹 Tab 3 - Despesas
Permite ao usuário inserir suas despesas mensais e comparar com a renda líquida mensal.
- Inputs: valores de moradia, alimentação, transporte, lazer e renda mensal.
- Avaliação automática com sugestões de ajustes por categoria.
- Função: `SomarDespesas()`.

## 📦 Tecnologias e Bibliotecas

- **Ionic Framework**: para a interface moderna e responsiva.
- **Angular**: estrutura do app com TypeScript.
- **ngModel**: binding bidirecional dos inputs.
- **Ionic Components**: `ion-card`, `ion-input`, `ion-button`, `ion-range`, etc.
- **Pipes**: `number:'1.2-2'` para formatação de valores monetários.

## 🛠️ Estrutura do Código

Cada aba do app é composta por dois arquivos:
- `tabX.page.ts`: lógica de cálculo.
- `tabX.page.html`: estrutura visual e inputs.

As imagens utilizadas são carregadas de `assets/img`.

## 🚀 Como Rodar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o app:
   ```bash
   ionic serve
   ```

3. Acesse em: `http://localhost:8100`.

## 👩‍💻 Autoria

Projeto desenvolvido por **Hugo Mariutti** e **Luiza Sales**  
Matéria: **Linguagem de Programação III**

## 📷 Imagens de Demonstração

> (Opcional: Adicione capturas de tela da interface)

