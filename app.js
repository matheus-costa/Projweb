const express = require('express')
const app = express()
const port = 8080
const moment = require("moment")
const Aluno = require('./models/aluno')
const handlebars = require("express-handlebars")

app.engine("handlebars", handlebars.engine({ //motor template
    defaultLayout: 'cadastro',
    helpers:{
        formatDate: (date)=>{
            return moment(date).format('DD/MM/YYYY')
        } 
    }
}))
app.set('view engine', "handlebars")

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.get("/",(req, res)=>{ //motor do template
 /*   Aluno.findAll().then((alunos)=>{ 
    res.render('/app',{alunos: alunos})
    }) */
})

app.get("/cadastro", (req, res)=>{
    res.render('cadastro')
})

app.post("/criarCadastro", (req, res)=>{
  /*    Aluno.create({
        nome: req.body.nome,
        nomeMae: req.body.nomeMae,
        email: req.body.email
             }).then(()=>{
                res.redirect('/')
             }).catch((erro)=>{
                console.log(`erro ao inserir aluno: ${erro}`)
                res.redirect('/')
            }) */
})
app.get('/editar',(req, res)=>{  //EDITAR
    res.render('editar')
})
app.post('/editar', (req, res)=>{
   /* Aluno.update({
        nome: req.body.nome,
        nomeMae: req.body.nomeMae,
        email: req.body.email
    },{
    }).then(()=>{
        res.redirect('/');
    }).catch((erro)=>{
        console.log(`Erro ao editar: ${erro}`);
    }); */
});


app.listen(port), () => {
    console.log("Example app listening on port 1")
}