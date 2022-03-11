const fs = require('fs')
const path = require ('path')

const privateKey = fs.readFileSync(path.resolve(__dirname, './private.key'), 'utf8')
const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf8')

module.exports = {
    privateKey,
    publicKey,
    authOptions: {
        expiresIn: '30s',
        algorithm: 'RS256',
    }
}