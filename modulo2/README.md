#code clean
yarn add eslint -D
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

#sequelize
yarn add sequelize
yarn add sequelize-cli -D
#banco de dados dependencias
yarn add pg pg-hstore
#criptografia de senha
yarn add bcryptjs

#gerando o token com jsonwebtoken
yarn add jsonwebtoken

#validação de entradas
yarn add yup

#upload de arquivos usando o multar
yarn add multer

#criando tabela de arquivos
yarn sequelize migration:create --name=create-files
#adicionando relacionamento com a tabela de usuarios

yarn sequelize migration:create --name=add-avatar-field-to-users
yarn sequelize migration:create --name=create-appointments

#lib para tratar com datas no nodejs
yarn add date-fns@next

#instalando mongodb para o projeto
docker run --name mongobarber -p 27017:27017 -d -t mongo

#plugin de conexão mongoose

#plugin para mongodb
yarn add mongoose
#plugin para enviar email nodemailer
yarn add nodemailer
-- Soluções para usar servidor de email produção - Amazon SES, Mailgun, Sparkpost
-- Soluções para dev - Mailtrap (dev)

#personalizando email - hendlebarsjs
yarn add express-handlebars nodemailer-express-handlebars

#trabalhando com fila usando redis
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
#plugin para filas
yarn add bee-queue

#monitoramento de execption
yarn add @sentry/node@5.10.2
#plugin para auxilia a sincronização se houver errors
yarn add express-async-errors
yarn add youch

#configurando variaveis ambientes
yarn add dotenv
