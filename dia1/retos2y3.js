// // INICIAR NPM INIT, npm install mysql2

// // ESTABLECEMOS CONEXION CON EL SERVIDOR

let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Calzada99?",
        database: "codenotch2"
    }
);

// // funcion que conecta y si no da error
connection.connect((error) => {
    if(error){console.log(error);}
    else{console.log("connection established");}
});


// // SETEAR TODAS LAS NOTAS A 0

// let sql = "UPDATE marks SET mark = 0";
// connection.query(sql, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });



// // OBTENER NOMBRE Y APELLIDO DE ESTUDIANTES

// let sql2 = "SELECT first_name , last_name FROM studients";
// connection.query(sql2, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });


// // OBTENER TODOS LOS DATOS DE LOS PROFESORES

let sql3 = "SELECT * FROM teachers";
connection.query(sql3, function (err, result) 
{
    if(err)
    console.log(err);
    else
    {
        console.log("Actualizado");
        console.log(result);
    }    
});


// // RETO3 //////////////////////////////////////////////////////

// // ELIMINAR TODAS LAS NOTAS CON MAS DE 10 AÑOS

// let sql4 = "ALTER TABLE marks DROP ROW WHERE date < 2012-9-9 ";
// connection.query(sql4, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });



// // PONER A 5 TODAS LAS NOTAS INFERIORES

// let sql5 = "UPDATE marks WHERE mark < 5 SET mark = 5";
// connection.query(sql5, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });