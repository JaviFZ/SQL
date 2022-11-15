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


// // CALCULAR NOTA MEDIA DE LOS ALUMNOS DE LA ASIGNAURA 1

// let sql = "SELECT AVG (mark) AS media_notas FROM marks WHERE id_subject = 1";
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




// // CALCULAR TOTAL DE ALUMNOS DEL BOOTCAMP


// let sql1 = "SELECT COUNT (*) AS total_alumnos FROM studients";
// connection.query(sql1, function (err, result) 
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Actualizado");
//         console.log(result);
//     }    
// });


// // LISTAR LOS CAMPOS DE LA TABLA GROUPS

// let sql2 = "SELECT (*)  FROM grupos";
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



// // ELIMINAR TODAS LA NOTAS POR ENCIMA DE 5 Y QUE SEAN DEL AÑO PASADO (SIN BETWEEN)


// let sql3 = "DELETE FROM marks WHERE mark >= 5 AND date < '2022-01-01'";
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


// // OBTEN LOS DATOS DE LOS ESTUDIANTES QUE ESTEN ESTE AÑO EN EL BOOTCAMP. (AÑO DE INGRESO EN TABLA ESTUDIANTES)

// let sql4 = "SELECT (*)  FROM studients WHERE year_ingress = 2022";
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


// // CALCULAR EL NUMERO DE PROFESORES POR ASIGNATURA

// let sql5 = "SELECT id_teacher, COUNT(*) AS profXasign FROM subject_teacher GROUP BY id_subject";
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

