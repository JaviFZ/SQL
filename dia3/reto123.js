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



// // OBTEN NOMBRES Y APELLIDOS DE LOS ALUMNOS Y LOS NOMBRES DE LAS ASIGNATURAS EN LAS QUE ESTAN APUNTADOS

let sql = "SELECT first_name, last_name, title FROM studients JOIN subjects ON (studients.id_studients = subjects.id_subjects)";
connection.query(sql, function (err, result) 
{
    if(err)
    console.log(err);
    else
    {
        console.log("Actualizado");
        console.log(result);
    }    
});





// // OBTEN LOS NOMBRES Y APELLIDOS DE LOS PROFESORES Y LOS NOMBRES DE LAS ASIGNATURAS QUE IMPARTEN


let sql2 = "SELECT first_name, last_name, title FROM teachers JOIN subjects ON (teachers.id_teachers = subjects.id_subjects)";
connection.query(sql2, function (err, result) 
{
    if(err)
    console.log(err);
    else
    {
        console.log("Actualizado");
        console.log(result);
    }    
});





// // OBTEN NUMERO TOTAL DE ALUMNOS POR ASIGNATURA, NOMBRE DE LA ASIGNATURA  EL NOMBRE Y APELLIDOS DEL PROFESOR QUE LA IMPARTE

// SELECT   title, COUNT(*) FROM subjects JOIN studients ON ( subjects.id_subjects = studients.id_studients );
let sql3 = "SELECT COUNT (*) AS total_alumnos UNION FROM studients SELECT title, first_name, last_name,  FROM teachers JOIN subjects ON (teachers.id_teachers = subjects.id_subjects)";
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
