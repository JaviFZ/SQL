const connection = require("../database")



function getNotas(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM marks";
    else
        sql = "SELECT id_studient, id_subject, date, mark FROM marks WHERE id_studient=" + request.query.id;
     
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


function postNota(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO marks (id_studient, id_subject , date, mark)" +
                " VALUES ('" + request.body.id_studient + "', '" +
                                request.body.id_subject + "' , '" +
                                request.body.date + "' , '" +
                                request.body.mark + "')";

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

function putNota(request, response)
{
    console.log(request.body);
    let params = [request.body.id_studient, 
                  request.body.id_subject, 
                  request.body.date,
                  request.body.mark,
                  request.body.id_mark]

    let sql =  "UPDATE marks SET id_studient = COALESCE(?, id_studient) , " + 
               "id_subject = COALESCE(?, id_subject) , " + 
               "date = COALESCE(?, date) , " + 
               "mark = COALESCE(?, mark)  WHERE id_mark = ?";
    // console.log(sql); 
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



function deleteNota(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM marks WHERE id_mark = '" + request.body.id_mark + "'";
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


module.exports = {postNota, getNotas, putNota, deleteNota}