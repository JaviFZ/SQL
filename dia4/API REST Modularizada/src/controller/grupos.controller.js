const connection = require("../database")






function getGrupos(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM grupos";
    else
        sql = "SELECT * FROM grupos WHERE id_grupo=" + request.query.id;
     
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



function postGrupo(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO grupos (name)" +
                " VALUES ('" + request.body.name + "')";

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



function putGrupo(request, response)
{
    console.log(request.body);
    let params = [request.body.name,
                  request.body.id_grupo]

    let sql = "UPDATE grupos SET name WHERE id_grupo = ?" 
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


function deleteGrupo(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM grupos WHERE id_grupo = '" + request.body.id_grupo + "'";
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


module.exports = {getGrupos, postGrupo, putGrupo, deleteGrupo};
