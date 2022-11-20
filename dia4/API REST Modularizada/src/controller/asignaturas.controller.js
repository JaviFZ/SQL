const connection = require("../database")






function getAsignatura(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM subjects";
    else
        sql = "SELECT * FROM subjects WHERE id_subject=" + request.query.id;
     
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



function postAsignatura(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO subjects (title)" +
                " VALUES ('" + request.body.title + "')";

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



function putAsignatura(request, response)
{
    console.log(request.body);
    let params = [request.body.title,
                  request.body.id_subject]
    let sql = "UPDATE subjects SET name = COALESCE(?, name) , " + 
                " WHERE id_subject = ?";
    // let sql = "UPDATE subjects SET title WHERE id_subject = ?" ;
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


function deleteAsignatura(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM subjects WHERE id_subject = '" + request.body.id_subject + "'";
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


module.exports = {getAsignatura, postAsignatura, putAsignatura, deleteAsignatura};