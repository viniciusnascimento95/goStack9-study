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

yarn add mongoose
