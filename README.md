# Labenu Music Awards
  
  Uma aplicação Back-End feita para gerir os shows desse importante evento promovido pela Labenu, onde famosos artistas irão performar.
  
## Link para o Render:
<a>https://labenu-music-awards.onrender.com</a>
## Documentação no Postman:
<a>https://documenter.getpostman.com/view/22395172/2s93XzwN9q</a>
  
## Como configurar:
<ul>
    <li> Use o link para clonar esse repositório em sua máquina </li>
    <li> Execute o comando <code>npm install</code> para que todas as dependências sejam instaladas </li>
    <li> Crie um arquivo .env e insira as seguintes informações referentes ao se cadastro: </li>
    
        DB_HOST =
        DB_USER =
        DB_PASSWORD =
        DB_NAME =
        JWT_KEY =
        JWT_EXPIRES_IN =
        BCRYPT_COST =
        
    
<li> Execute o comando <code>npm start</code> para rodar o código do repositório. </li></ul>

---

## Endpoints:

### Criar conta:

**Path:** <code>/user/signup</code>

**Body:**
<br>
<ul>

    {
    "name": "Carlinhos",  
    "email": "carlops@email.com", 
    "password": "carlotopia12",  
    "role": "ADMIN"
    }

</ul>

**Resposta:** Token

<br>
<br>

### Login:

**Path:** <code>/user/login</code>

**Body:**
<br>
<ul>

    { 
    "email": "carlops@email.com", 
    "password": "carlotopia12" 
    }

</ul>

**Resposta:** Token

<br>
<br>

### Criar banda:

**Path:** <code>/band/</code>

**Headers:**
>Token de autorização

**Body:**
<br>
<ul>

    { 
    "name": "Eletro Carlos", 
    "mainGenre": "Eletrônica",
    "responsibleUser": "Carlinhos"
    }

</ul>

**Resposta:** "Banda criada!"

<br>
<br>

### Buscar banda por ID:

**Path:** <code>/band/:id</code>

**Headers:**
>Token de autorização

**Resposta:** Banda correspondente ou erro (caso não exista).

<br>
<br>

### Criar show:

**Path:** <code>/show/sign-show</code>

**Headers:**
>Token de autorização

**Body:**
<br>
<ul>

    { 
    "weekday": "Domingo", 
    }

</ul>

**Resposta:** Lista de todos os shows agendados no dia inserido.

<br>
<br>

### Buscar shows por dia:

**Path:** <code>/show/</code>

**Headers:**
>Token de autorização

**Body:**
<br>
<ul>

 { 
 "weekday": "Domingo", 
 "startHour": 17,
 "endHour": 21,
 "bandID": "c3c57103-5c69-4e81-8790-a7410a09c81b"
 }
 
 </ul>

**Resposta:** "Show criado!"
