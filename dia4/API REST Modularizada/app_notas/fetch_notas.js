class Nota {
    
    constructor(id_studient, id_subject, date ,mark){
        this.id_studient = id_studient;
        this.id_subject = id_subject;
        this.date = date;
        this.mark = mark;
        
    }
}    


// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(nota)
{
    resultado = false
    if (nota.id_studient == "" || nota.id_studient == "null")
    {
        showToast("AVISO: Campo ID de estudiante no informado", "bg-warning")
    }
    else if (nota.id_subject == "" || nota.id_subject == "null")
    {
        ("AVISO: Campo ID asignatura no informado", "bg-warning")
    }
    else if (nota.date == "" || nota.date == "null")
    {
        showToast("AVISO: Campo fecha no informado", "bg-warning")
    }
    else if (nota.mark == "" || nota.mark == "null")
    {
        showToast("AVISO: Campo nota no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

// // FUNCION PARA MOSTRAR EL TOAST (UNA ESPECIE DE ALERT)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



function postNota()
{
    let nota = new Nota(document.getElementById("id_studient").value,
                        document.getElementById("id_subject").value,
                        document.getElementById("date").value,
                        document.getElementById("mark").value,)
    
    const url = "http://localhost:3000/notas";

    if (validar(nota))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(nota),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result.error)
                showToast("ERROR: " +  result.mensaje, "bg-danger")
            else
                showToast("nota Creada Correctamente", "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
}



function getNotas()
{

    let lista = document.getElementById("notas");  
    lista.innerHTML=""
    let id = document.getElementById("id_studient").value;
    
    // console.log(id);
    if(id){

        let url = "http://localhost:3000/notas?id="+id;

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
    .then(function(data)
    {      
        if (!data.error)
        {      
            //   console.log(id + 'en fech');
              console.log(data);
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID de estudiante: ${data[i].id_studient} <br>  
                            ID asignatura: ${data[i].id_subject}<br>
                            Fecha: ${data[i].date}<br>
                            Nota: ${data[i].mark}<br>
                            </p>`
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/notas";

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

    result.forEach(function (nota) {               
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID estudiante: ${nota.id_studient} <br>  
                            ID asignatura: ${nota.id_subject}<br>
                            Fecha: ${nota.date}<br>
                            Nota: ${nota.mark}<br>
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


function putNota() {
    let newName = document.getElementById("id_studient").value;
    let newLast = document.getElementById("id_subject").value;
    let newGrupo = document.getElementById("date").value;  
    let newYear = document.getElementById("mark").value;
    let id = document.getElementById("id_mark").value;

    if(newName == ''){
        newName = null;
    }
    if(newLast == ''){
        newLast = null;
    }
    if(newGrupo == ''){
        newGrupo= null;
    }
    if(newYear == ''){
        newYear = null;
    }

    let put ={
        id_studient: newName, 
        id_subject: newLast, 
        date: newGrupo, 
        mark: newYear,
        id_studient: id

    }
    console.log(put);
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body:JSON.stringify(put)
        
    };

    console.log(newYear);
 
    let url = "http://localhost:3000/notas"
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
          console.log(data.resultado);
          showToast("Profesional Modificado Correctamente", "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  error.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}



function deleteNota() {
    let id = document.getElementById("id_mark").value;
    // console.log(id);
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8"},
      method: "DELETE",
      body: JSON.stringify({id_mark: id})
    };
  
    const url = "http://localhost:3000/notas";
  
    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        // console.log(data);
        showToast("nota eliminada", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}


