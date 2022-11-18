const connection = require("../database")






function getAlumnos(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM studients";
    else
        sql = "SELECT * FROM studients WHERE id_studient=" + request.query.id;
     
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
    let sql = "INSERT INTO studients (first_name, last_name , id_grupo, year_ingress)" +
                " VALUES ('" + request.body.first_name + "', '" +
                                request.body.last_name + "' , '" +
                                request.body.id_grupo + "' , '" +
                                request.body.year_ingress + "')";

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
    let params = [request.body.first_name, 
                  request.body.last_name, 
                  request.body.id_group,
                  request.body.year_ingress,
                  request.body.id_studient]

    let sql = "UPDATE studients SET first_name = COALESCE(?, first_name) , " + 
               "last_name = COALESCE(?, last_name) , " + 
               "id_grupo = COALESCE(?, id_grupo) , " + 
               "year_ingress = COALESCE(?, year_ingress)  WHERE id_studient = ?";
    console.log(sql); 
    connection.query(sql, params, function (err, result) 
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
    let sql = "DELETE FROM studients WHERE id_studient = '" + request.body.id_studient + "'";
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
