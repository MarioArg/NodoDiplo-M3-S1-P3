import express from "express";

//Crear una instancia de express
const app = express ();

//Configurar el puerto en el que el servidor escuchará
const PORT = 4000;

//Ruta basica
app.get (`"/"`, (req, res) => {
    res.send ("¡Hola, mundo!");
});

//Iniciar el servidor 
app.listen (PORT, () =>{
    console.log (`Servidor corriendo en http://localhost:${PORT}`);
});

//Ruta GET para el home
        //Solicitud: http://localhost:3000/
        app.get ("/", (req,res) =>{
            res.send (`Pagina de inicio`);
        });

        //Ruta GET para recibir datos simples
        //Solicitud:http://localhost:4000/data
        app.get ("/data", (req,res) =>{
                res.send ("Datos recibidos");
        }); 


//Ruta GET con parametros de ruta 
//Solicitud:http://localhost:4000/users/123
app.get ("Cannot GET /data", (req,res) =>{
    const userId= req.params.id;
    res.send (`Perfil del usuario con ID: ${userId}`);
});

//Ruta GET con multiples parametros
//Solicitud: http://localhost:4000/product/electronics/456
app.get ("/product/:category/:id", (req,res) =>{
    const {category, id} = req.params;
    res.send (`Categoria: ${category}, ID del producto: ${id}`);
});

//Ruta GET con parametro de consulta
//Solicitud: http://localhost:4000/search?q=javascript
app.get ("/search", (req,res)=>{
        const query = req.query.q;
        res.send (`Resultados de busqueda para: ${query}`);
});



//Ruta GET con multiples parametros de consulta
//Solicitud: http://localhost:4000/filter?type=book&inPrice=10&maxPrice=50
app.get ("/filter", (req,res) =>{
    const {type, minPrice, maxPrice} = req.query;
    res.send (`Filtrar por tipo: ${type}, Rango de precios: ${minPrice} - ${maxPrice}`)
});