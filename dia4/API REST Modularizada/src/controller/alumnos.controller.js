const connection = require("../database")






function getAlumnos(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM alumnos";
    else
        sql = "SELECT * FROM alumnos WHERE id=" + request.body.id;
     
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



function postAlumno(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO alumnos (nombre_alumno, apellido1_alumno, apellido2_alumno)" +
                " VALUES ('" + request.body.nombre + "', '" +
                                request.body.apellido1 + "' , '" +
                                request.body.apellido2 + "')";

    console.log(sql);
    connection.query(sql, function (err, result) 
    {
        if(err)
            console.log(err);
        else
        {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
            {
                response.send("-1");
            }
        }        
    })
}



function putAlumno(request, response)
{
    console.log(request.body);
    let params = [request.body.nombre_alumno, 
                  request.body.apellido1_alumno, 
                  request.body.apellido2_alumno,
                  request.body.id_alumno]

    let sql = "UPDATE alumnos SET nombre_alumno = COALESCE(?, nombre_alumno) , " + 
               "apellido1_alumno = COALESCE(?, apellido1_alumno) , " + 
               "apellido2_alumno = COALESCE(?, apellido2_alumno)  WHERE id_alumno = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


function deleteAlumno(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM alumnos WHERE id_alumno = '" + request.body.id_alumno + "'";
    console.log(sql); 
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


module.exports = {getAlumnos, postAlumno, putAlumno, deleteAlumno};
