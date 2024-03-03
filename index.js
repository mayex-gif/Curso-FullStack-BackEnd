const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`<nav 
            style="width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 0;
            padding: 0;">
                <a href='./'>Start</a>
                <a href='./send'>Form</a>
                <a href='./redirect'>Redirect</a>
            </nav>

            <h1>BIENVENIDOS...</h1>`
)});


app.get("/send", function (req, res) {
  console.log("========================================================================")
  console.log(req.url);
  console.log("========================================================================")

  res.send(`<nav 
            style="width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 0;
            padding: 0;">
                <a href='./'>Start</a>
                <a href='./send'>Form</a>
                <a href='./redirect'>Redirect</a>
            </nav>
                
            <br><br>
                
            <div 
            style="display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;">
                <form method="post"
                style="display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 30px;">
                  
                    <label for="username"
                    style="margin-bottom: 5px;
                    color: #DA5552">Usuario:</label>
                        
                    <input type="text" id="username" name="username" autofocus required
                    style="padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #DA5552;
                    border-radius: 4px;"><br>
                        
                    <label for="password"
                    style="margin-bottom: 5px;
                    color: #DA5552">Contraseña:</label>
                        
                        
                    <input type="password" id="password" name="password" minlength="8" required
                    style="padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #DA5552;
                    border-radius: 4px;"><br>

                    <button type="submit"
                    style="background-color: #DF7373;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;">Iniciar Sesión</button><br>
                      
                </form>
            <div>`
)})


app.get("/redirect", (req, res) => {
  console.log("========================================================================");
  console.log(req.url);
  console.log("========================================================================");

  res.redirect("./")
})


app.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})