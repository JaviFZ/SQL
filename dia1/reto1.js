// // INICIAR NPM INIT, npm install mysql2

// // ESTABLECEMOS CONEXION CON EL SERVIDOR

let mysql = requre("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Calzada99?",
        database: "codenotch"
    }
);

// // funcion que conecta y si no da error
connection.connect((error) => {
    if(error){console.log(error);}
    else{console.log("connection established");}
});


// // HACER INSERT

// let sql = "INSERT INTO alumnos (nombre, apellido1, apellido2, telefono) VALUES ('Jusuf', 'pekin', 'Almen', 645345345)";
// connection.query(sql, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Alumno Insertado");
//         console.log(result);
//     }    
// });



// // // CREAR COLUMNA

// let sql1= "ALTER TABLE alumnos ADD newColumn VARCHAR(40)"
// connection.query(sql1, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Columna Insertada");
//         console.log(result);
//     }    
// });


// // // BORRAR COLUMNA

// let sql2 = "ALTER TABLE alumnos DROP COLUMN newColumn";
// connection.query(sql2, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Columna Eliminada");
//         console.log(result);
//     }    
// });

// // ELIMINAR TABLA

// let sql4 = "DELETE FROM asignaturas";
// connection.query(sql4, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Tabla Eliminada");
//         console.log(result);
//     }    
// });



// // // UPDATE

// let sql3 = "UPDATE alumnos SET apellido2 = 'Majano'";
// connection.query(sql3, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });
