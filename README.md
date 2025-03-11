# PROJETO PDV  
**PROGRAMAÇÃO WEB**  
**Centro Universitário Católica de Joinville**  
**Alunos: Nathalia Berri e William Pereira**  
[ATIVIDADE 1 - Nathalia e William.pdf](https://github.com/user-attachments/files/19172431/ATIVIDADE.1.-.Nathalia.e.William.pdf)

Nosso objetivo é desenvolver um sistema de vendas simples para aplicar os conceitos da disciplina de Programação Web, explorando tecnologias frontend, backend e banco de dados, além de práticas como CI/CD, TDD e controle de acesso.

## ESTRATÉGIAS DE DESENVOLVIMENTO
As estratégias de desenvolvimento para o sistema serão focadas em agilidade, qualidade e escalabilidade. O desenvolvimento seguirá uma abordagem incremental e iterativa, com ciclos curtos de planejamento, implementação, testes e feedback direto do professor, permitindo ajustes rápidos ao longo do processo. Algumas das principais estratégias incluem:
- **Metodologia Ágil (Scrum)**: Será adotado o modelo ágil de desenvolvimento, com entregas rápidas e constantes, garantindo que o projeto esteja sempre evoluindo de acordo com as necessidades observadas e também as apontadas pelo professor, com ajustes contínuos durante o ciclo de vida do desenvolvimento.  
- (TENTAR) **Test-Driven Development (TDD)**: O desenvolvimento será orientado por testes, ou seja, os testes serão escritos antes do código. Isso garante que o código implementado atenda aos requisitos e seja de fácil manutenção, além de reduzir o risco de bugs e melhorar a cobertura de testes.
- **Integração Contínua e Deploy Contínuo (CI/CD)**: Será utilizada a integração contínua (CI) para garantir que o código seja testado e validado a cada alteração. O deploy contínuo (CD) será implementado para facilitar a entrega de versões do sistema de forma automatizada e sem interrupções no fluxo de trabalho.
- **Versionamento e Controle de Código (Git/GitHub)**: O uso do Git, juntamente com a plataforma GitHub, permitirá a colaboração eficiente da equipe, o controle de versões do código e a rastreabilidade de todas as alterações feitas no sistema.

## TIPO DE ARQUITETURA
O sistema utilizará uma **arquitetura monolítica** devido à sua simplicidade de desenvolvimento, implantação e manutenção, sendo mais adequada para um primeiro projeto. Como se trata de um sistema de vendas simples, a abordagem monolítica permite integrar todas as funcionalidades em um único código-fonte, reduzindo a complexidade na comunicação entre módulos e facilitando o gerenciamento do banco de dados. Além disso, essa estrutura exige menos configurações e recursos computacionais, tornando a implementação mais ágil e eficiente dentro do contexto acadêmico. Caso seja necessário no futuro, a aplicação poderá ser refatorada para microserviços conforme a demanda por escalabilidade e modularidade aumentar.  

Na arquitetura monolítica, o sistema será desenvolvido utilizando o padrão MVC (Model-View-Controller), que organiza a aplicação em três componentes principais:  
## MCV
- **Model (Modelo)**: Representa os dados e a lógica de negócios do sistema. Ele é responsável pela manipulação das informações, como o acesso ao banco de dados e a validação dos dados.
- **View (Visão)**: É a interface do usuário, ou seja, o que o usuário vê e interage. A View exibe as informações fornecidas pelo Modelo e recebe as ações do usuário.
- **Controller (Controlador)**: Atua como intermediário entre o Modelo e a Visão. Ele recebe as ações do usuário (como cliques ou preenchimento de formulários), processa essas informações e atualiza o Modelo e a View conforme necessário.  
Esse padrão ajuda a organizar o código, facilitando a manutenção e escabilidade do sistema, além de permitir que diferentes partes da aplicação sejam desenvolvidas de forma independente. Ao manter essas responsabilidades separadas, o MVC facilita a gestão do sistema, tornando o código mais limpo e modular dentro da arquitetura monolítica.

## TECNOLOGIAS ESCOLHIDAS
- **Frontend: HTML, CSS e JavaScript**, por serem tecnologias amplamente utilizadas e de fácil aprendizado, permitindo a criação de uma interface simples e responsiva para o usuário.
- **Backend: Node.js com Express**, escolhido por sua eficiência no desenvolvimento de APIs REST, sua integração nativa com JavaScript e a grande comunidade de suporte.
- **Banco de Dados: MySQL**, devido à sua confiabilidade, facilidade de uso e compatibilidade com aplicações web, além de suportar transações e garantir a integridade dos dados.
- **Autenticação: JWT (JSON Web Token)**, garantindo um controle seguro de acesso ao sistema sem a necessidade de armazenar sessões no servidor.
- **Controle de Versão: Git/GitHub**, permitindo colaboração e rastreamento das alterações no código, garantindo organização e segurança no desenvolvimento.

## REQUISITOS FUNCIONAIS
RF001. O sistema deve permitir que usuários façam login utilizando e-mail e senha.  
RF002. O sistema deve autenticar os usuários utilizando JWT (JSON Web Token).  
RF003. O sistema deve permitir diferentes níveis de acesso (exemplo: operador de caixa, gerente, administrador).  
RF004. O sistema deve permitir o CRUD de produtos (cadastrar, visualizar, editar e excluir produtos).  
RF005. Cada produto deve conter nome, descrição, preço, código de barras, categoria e quantidade em estoque.  
RF006. O sistema deve controlar o saldo de estoque e reduzir automaticamente a quantidade disponível após cada venda.  
RF007. O sistema deve permitir o CRUD de clientes.  
RF008. Cada cliente deve conter nome, CPF/CNPJ, telefone, e-mail, CEP e número do logradouro.  
RF009. O sistema deve permitir associar uma venda a um cliente previamente cadastrado.  
RF010. O sistema deve permitir adicionar produtos ao carrinho.  
RF011. O sistema deve calcular automaticamente o total da compra.  
RF012. O sistema deve permitir remover produtos do carrinho.  
RF013. O sistema deve permitir a seleção de um cliente antes da finalização da compra.  
RF014. O sistema deve permitir escolher a forma de pagamento (dinheiro, cartão de crédito/débito, PIX).  
RF015. O sistema deve calcular o troco quando necessário.  
RF016. O sistema deve confirmar o pagamento antes de finalizar a venda.  
RF017. O sistema deve gerar um comprovante de venda contendo os detalhes do fornecedor (loja), do cliente,  dos produtos vendidos, valores e forma de pagamento.  
RF018. O sistema deve gerar um número único para cada nota fiscal.  
RF019. O sistema deve utilizar o Singleton para garantir que a loja tenha um único CNPJ na nota fiscal.  
RF020. O sistema deve armazenar o histórico de vendas.  
RF021. O sistema deve permitir a consulta de vendas por data e cliente.  
RF022. O sistema deve permitir gerar relatórios simples, como total de vendas do dia.  

## REQUISITOS NÃO FUNCIONAIS
RFN001. Arquitetura Monolítica: O sistema deve ser desenvolvido utilizando a arquitetura monolítica, onde todas as funcionalidades serão integradas em uma única aplicação.  
RFN002. Senhas de usuários devem ser criptografadas utilizando bcrypt ou outro algoritmo seguro.  
RFN003. O sistema deve restringir acessos indevidos com controle de permissões baseado em papéis (exemplo: caixa, gerente, administrador).  
RFN004. O sistema deve registrar logs de autenticação e ações críticas para auditoria.  
RFN005. O tempo de resposta das requisições deve ser inferior a 1 segundo para operações comuns.  
RFN006. O sistema deve suportar múltiplas transações simultâneas sem degradação de desempenho.  
RFN007. A interface do usuário deve ser intuitiva e responsiva, funcionando em diferentes dispositivos e tamanhos de tela.  
RFN008. As telas devem seguir um fluxo lógico e minimizar a necessidade de cliques desnecessários.  
RFN009. As telas devem seguir um fluxo lógico e minimizar a necessidade de cliques desnecessários.  
RFN010. O design deve seguir um padrão moderno e agradável, utilizando boas práticas de UI/UX.  
RFN011. O código deve ser modular e seguir boas práticas de desenvolvimento, facilitando manutenção e evolução.  
RFN012. O sistema deve ter testes automatizados implementados (TDD) para garantir confiabilidade.  
RFN013. O projeto deve ser versionado com Git/GitLab, permitindo rastreamento de mudanças e colaboração.  
RFN014. Deve ser possível realizar backup periódico dos dados, evitando perda de informações.  
RFN015. O sistema deve contar com um pipeline de CI/CD para automação de testes e deploy contínuo.  
RFN016. O ambiente de desenvolvimento deve permitir testes locais antes da implantação.  
