## Informações de Identificação:

- **Instituição:** Univassouras - Campus Maricá
- **Disciplina:** Banco de Dados Não Relacionais
- **Professor:** Fabricio Dias
- **Período:** 5º Período - Turma A - 2024.1
- **Aluno e Matrícula:** Hugo Lelly de Lima Marinho - 202211182

## BDNR Atividade 2024-03-25
Atividade 2: Finalizar o código para a conexão com o mongodb utilizando o padrão MVC.

### 1. userController.js
- Este arquivo contém funções que lidam com diferentes tarefas relacionadas aos usuários.
- Por exemplo, a função `getAllUsers` obtém todos os usuários existentes, enquanto outras funções lidam com a criação, atualização e exclusão de usuários.
- Se algo der errado, como um erro ao buscar os usuários no banco de dados, essas funções retornarão uma mensagem de erro.

### 2. userRoutes.js
- Aqui estão as rotas que o servidor deve seguir quando alguém faz uma solicitação relacionada aos usuários.
- Por exemplo, se alguém acessa a rota principal dos usuários, o servidor deve chamar a função para obter todos os usuários.
- Se alguém faz uma solicitação para criar, atualizar ou excluir um usuário, o servidor deve encaminhar essa solicitação para a função correspondente no controlador de usuários.

### 3. server.js
- Este é o arquivo principal que configura o servidor da nossa aplicação.
- Ele define a porta onde o servidor estará ouvindo as solicitações dos clientes.
- Além disso, aqui também são definidas rotas básicas, como uma rota inicial que apenas retorna uma mensagem de saudação.
- As rotas relacionadas aos usuários são importadas do arquivo `userRoutes.js` e são usadas aqui para lidar com solicitações específicas relacionadas aos usuários.

Basicamente, o controlador manipula os dados e a lógica de negócios, as rotas direcionam as solicitações para as funções corretas do controlador e o servidor é como o "anfitrião" que recebe as solicitações dos clientes e as encaminha para o lugar certo para serem atendidas.
