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


// //  SELECT COUNT(id_studients), title, teachers.first_name, teachers.last_name FROM studients
// // JOIN grupos ON (studients.id_group = grupos.id_groups)
// // JOIN subject_teacher ON (grupos.id_groups = subject_teacher.id_group)
// // JOIN subjects ON (subject_teacher.id_subject = subjects.id_subjects)
// // JOIN teachers ON (subject_teacher.id_teacher = teachers.id_teachers)
// // GROUP BY subjects.title


let sql3 = "SELECT COUNT(id_studients), title, teachers.first_name, teachers.last_name FROM studients JOIN grupos ON (studients.id_group = grupos.id_groups) JOIN subject_teacher ON (grupos.id_groups = subject_teacher.id_group) JOIN subjects ON (subject_teacher.id_subject = subjects.id_subjects) JOIN teachers ON (subject_teacher.id_teacher = teachers.id_teachers) GROUP BY subjects.title"


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
