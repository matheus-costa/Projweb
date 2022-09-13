const Sequelize = require("sequelize")

const sequelize = new Sequelize('projweb','postgres','5432',{
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate().then(()=>{
    console.log("conectado com sucesso ao banco")
}).catch((erro)=>{
    console.log(`erro ao conectar ao banco: ${erro}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}