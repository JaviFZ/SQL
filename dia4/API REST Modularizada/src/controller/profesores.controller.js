const connection = require("../database")






function getProfesores(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM teachers";
    else
        sql = "SELECT * FROM teachers WHERE id_teacher=" + request.query.id;
     
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



function postProfesor(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO teachers (first_name, last_name)" +
                " VALUES ('" + request.body.first_name + "', '" +
                                request.body.last_name+ "')";

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



function putProfesor(request, response)
{
    console.log(request.body);
    let params = [request.body.first_name, 
                  request.body.last_name, 
                  request.body.id_teacher]

    let sql = "UPDATE teachers SET first_name = COALESCE(?, first_name) , " + 
               "last_name = COALESCE(?, last_name)WHERE id_teacher = ?" 
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


function deleteProfesor(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM teachers WHERE id_teacher = '" + request.body.id_teacher + "'";
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


module.exports = {getProfesores, postProfesor, putProfesor, deleteProfesor};
