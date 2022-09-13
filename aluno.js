const db = require('../conection/db')

const aluno = db.sequelize.define('projweb',{
    nome:{ 
        type: db.Sequelize.STRING
        },
    nomeMae:{
        type: db.Sequelize.STRING 
        },
    email:{
        type: db.Sequelize.STRING
        }
})

//aluno.sync((force: true)) -> começou a executar o projeto, já comenta a linha
module.exports = aluno 
