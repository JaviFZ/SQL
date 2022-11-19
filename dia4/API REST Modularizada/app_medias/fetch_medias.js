// // FUNCION PARA MOSTRAR EL TOAST (UNA ESPECIE DE ALERT)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}




function getMedia()
{
    let lista = document.getElementById("resultados");  
    lista.innerHTML=""
    let id = document.getElementById("id_studient").value;
    // console.log(id);
    if(id){
        let url = "http://localhost:3000/media?id="+id;
    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    // console.log(url);
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {      
            console.log(result);
            result.forEach(function () {
                lista.innerHTML += `<p>Nota media de estudiante: ${result[0].media} </p>`
            })                                                                      
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")
    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        showToast("ERROR: introduce id de alumno" , "bg-danger")
    }
}




function getApuntadas()
{
    let lista = document.getElementById("resultados");  
    lista.innerHTML=""
    let id = document.getElementById("id_studient").value;
    console.log(id);
    if(id){

        let url = "http://localhost:3000/apuntadas?id="+id;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    console.log(url);
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {      
        result.forEach(function (asig) {
            lista.innerHTML += `<p>Nombre: ${asig.first_name} <br>  
                            Apellido: ${asig.last_name}<br>
                            Asignatura: ${asig.title}<br>
                            </p>`
        })                             
        
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/apuntadas";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {        
            console.log(result);
    result.forEach(function (asig) {               
        // console.log(alumno);                                
        lista.innerHTML += `<p>Nombre: ${asig.first_name} <br>  
                            Apellido: ${asig.last_name}<br>
                            Asignatura: ${asig.title}<br>
                            </p>`
    })                                                       
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    }
}




function getImpartidas()
{
    let lista = document.getElementById("resultados");  
    lista.innerHTML=""
    let id = document.getElementById("id_teacher").value;
    console.log(id);
    if(id){

        let url = "http://localhost:3000/impartidas?id="+id;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    console.log(url);
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {      
        result.forEach(function (data) {
            lista.innerHTML += `<p>Nombre: ${data.first_name} <br>  
                            Apellido: ${data.last_name}<br>
                            Asignatura: ${data.title}<br>
                            </p>`
        })                             
        
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/impartidas";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {        
            console.log(result);
    result.forEach(function (asig) {               
        // console.log(alumno);                                
        lista.innerHTML += `<p>Nombre: ${asig.first_name} <br>  
                            Apellido: ${asig.last_name}<br>
                            Asignatura: ${asig.title}<br>
                            </p>`
    })                                                       
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    }
}



