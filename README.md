# Frontend Cryptocalc

Esse é o frontend do serviço Cryptocalc desenvolvido durante o bootcamp da DIO em conjunto com a Eduzz.

# Stacks

Esse projeto foi desenvolvido utilizando Next.Js e Typescript como linguagem de programação, Styled-Components e Material UI para a estilização, Axios para a requisição à API.

A ideia de utilização do Next se deu devido às facilidades e aos ganhos de desempenhos em server-side rendering que são possíveis nesse projeto, principalmente para as telas relacionadas ao investimento do usuário.

# Conceito

Baseado no conceito do protótipo do bootcamp de auxiliar na gestão de campanhas, desenvolvi esse serviço visando o auxilio na gestão de investimentos em criptomoedas que ganha força todos os anos.

# Rotas

- /login: Rota inicial da aplicação na qual é permitido o usuário fazer o login na aplicação;

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/login.png" />
</p>

- /login/cadastro: Rota para fazer o cadastro na plataforma

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/new-user.png" />
</p>

- /login/forgot-password: Rota para envio de email para recuperação de senha

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/forgot-password.png" />
</p>

- /dashboard: Tela principal da aplicação onde ficam os valores de investimento, ROI e retorno total além das informações sobre os investimentos;

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/dashboard.png" />
</p>

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/dashboard-investiment.png" />
</p>

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/dashboard-usermenu.png" />
</p>

- /dashboard/investiment/:id : Tela que permite a edição ou a criação de um novo investimento. Caso o investimento com o ID fornecido no slug da página não exista ou não pertença àquele usuário, ele será automaticamente para a rota de criação de um investimento. Caso o investimento exista e pertença ao usuário logado, é permitido a ele que atualize o valor investido.

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/new-investiment.png" />
</p>

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/new-investiment-coins.png" />
</p>

- /user: Rota com informações do usuário, que permite que ele faça alterações em seu perfil, seja no email cadastrado, no username, ou na senha.

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/config-password.png" />
</p>

<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/cryptoinvestiment-calculator-front/blob/main/snapshots/config-user.png" />
</p>
