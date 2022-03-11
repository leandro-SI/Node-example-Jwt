# Node-example-Jwt
Exemplo de uma API em Node.js utilizando JWT (JSON Web Token) para segurança de envio das informações e autenticação

## Instalar dependências
```
    npm install
```

## Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```
A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

## Iniciar o servidor
Para iniciar o servidor Express, use o comando:

```
   npm start
```

## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
