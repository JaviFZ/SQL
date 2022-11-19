const { response, request } = require("express");
const connection = require("../database")



// // OBTIENE LA NOTA MEDIA DEL ALUMNO CUYO ID PASES POR PARAMETRO

function getMedia(request, response ) {
    let sql;
    if (request.query.id == null)
        console.log(err);
    else
        sql = "SELECT AVG (mark) AS media FROM marks WHERE id_studient=" + request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result);
        }    
    })  
};


// // OBTIENE LA LISTA DE ASIGNATURAS A LAS QUE ESTÁ APUNTADO EL ALUMNO CUYO ID PASES POR PARAMETRO,
// // SI NO INTRODUCES ID, MUESTRA NOMBRES Y APELLIDOS DE TODOS LOS ALUMNOS Y LOS NOMBRES DE LAS ASIGNATURAS A LAS QUE ESTAN APUNTADOS.

function getApuntadas(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT first_name,last_name,title FROM studients JOIN marks on (studients.id_studient = marks.id_studient) JOIN subjects on (marks.id_subject = subjects.id_subject) ";
    else
        sql = "SELECT first_name,last_name,title FROM studients JOIN marks on (studients.id_studient = marks.id_studient) JOIN subjects on (marks.id_subject = subjects.id_subject) WHERE studients.id_studient=" + request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result)
        }    
    })  
}


// // // OBTIENE LA LISTA DE ASIGNATURAS QUE IMPARTE EL PROFESOR CUYO ID ES PASADO POR PARAMETRO.
// // // SIN ID, MUESTRA LOS NOMBRES Y APELLIDOS DE TODOS LOS PROFESORES Y LOS NOMBRES DE LAS ASIGNATURAS QUE IMPARTEN

// function getImpartidas(params) {
    //
// }
function getImpartidas(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT first_name,last_name,title FROM teachers JOIN subject_teacher on (teachers.id_teacher = subject_teacher.id_teacher) JOIN subjects on (subject_teacher.id_subject = subjects.id_subject)";
    else
        sql = "SELECT first_name,last_name,title FROM teachers JOIN subject_teacher on (teachers.id_teacher = subject_teacher.id_teacher) JOIN subjects on (subject_teacher.id_subject = subjects.id_subject) WHERE teachers.id_teacher="+ request.query.id;

     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result);
        }    
    })  
}


module.exports = {getMedia, getApuntadas, getImpartidas}