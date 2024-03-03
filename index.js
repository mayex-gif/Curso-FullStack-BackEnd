const express = require('express')  
const dotenv = require('dotenv')

//Iniciamos la configuracion de las variables de entorno
dotenv.config()

//Método dos de configuracion de variables de entorno
//require('datenv').config()


const app = express()
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    console.log("========================================================================")
    console.log(process.env);
    console.log("========================================================================")

    //Imprimimos en consulta las variables de entorno agregadas
    console.log(procces.env.PORT)
    console.log(process.env.PASSWORD)
    console.log(process.env.PASSWORD_GOOGLE)

    console.log("========================================================================")

    res.send('Yo de nuevo saludad');
    console.log('doc enviado')

    //Respuestas que podemos procesar con express
    // res.send()
    // res.end()
    // res.redirect()
    // res.json()
    // res.status()
    // res.render()
    // res.sendfile()
    // res.download
})



//send

app.get('/send', function (req, res) {
            console.log("========================================================================")
            console.log(req.env);
            console.log("========================================================================")

            res.send(`
                <form>
                    <p>
                        Ingresa tu nombre completo: 
                        <input type = "text" name = "nombrecompleto">
                        <input type = "submit" value = "Enviar la información">
                        <input type = "reset" value = "Eliminar datos">
                    </p>
                </form>
                `)

            // res.sendFile(__dirname + '/index.html')
            // res.sendFile(__dirname + '/index.
})

app.listen(PORT, (err) => {
    if (err) console.log(err);

    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

app.get('/download', (req, res) => {
    console.log("========================================================================")
    console.log(req.url);
    console.log("========================================================================")

    res.download('./file.txt')
})