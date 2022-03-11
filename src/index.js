const Express = require('express')
const bodyParser = require('body-parser')

const { verifyToken, protectRoute }  = require('./middlewares/auth')
const generateToken = require('./services/auth')

const app = Express()
const port = 3000

app.set('json spaces', 2);
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(protectRoute)
app.use(verifyToken)

app.get('/', (req, res) => res.send('Olá mundo pelo Express!'))

app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username !== 'admin' || password !== '123456') {
        return res.status(400).send({ error: 'Usuário ou senha inválidos!' })
    }

    const payload = {
        sub: 1,
        name: 'Nome Usuário',
        roles: ['admin']
    }
    const token = generateToken.generateToken(payload)

    res.send({
        token
    })
})

app.get('/protected', protectRoute, (req, res) => res.send(req.decoded))


app.listen(port, () => console.log('Api rodando na porta 3000'))