
// const {Professional} = require("./profesional")
class Alumno {
    
    constructor(first_name, last_name, id_grupo ,year_ingress){
        this.first_name = first_name;
        this.last_name = last_name;
        this.id_grupo = id_grupo;
        this.year_ingress = year_ingress;
        
    }
}    


// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(alumno)
{
    resultado = false
    if (alumno.first_name == "" || alumno.first_name == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (alumno.last_name == "" || alumno.last_name == "null")
    {
        ("AVISO: Campo apellido no informado", "bg-warning")
    }
    else if (alumno.id_grupo == "" || alumno.id_grupo == "null")
    {
        showToast("AVISO: Campo grupo no informado", "bg-warning")
    }
    else if (alumno.year_ingress == "" || alumno.year_ingress == "null")
    {
        showToast("AVISO: Campo año no informado", "bg-warning")
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



function postAlumno()
{
    let alumno = new Alumno(document.getElementById("first_name").value,
                        document.getElementById("last_name").value,
                        document.getElementById("id_grupo").value,
                        document.getElementById("year_ingress").value,)
    
    const url = "http://localhost:3000/alumnos";

    if (validar(alumno))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(alumno),
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
                showToast(`Alumno con ID: ${result}  Creado Correctamente`, "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
}



function getAlumnos()
{

    let lista = document.getElementById("alumnos");  
    lista.innerHTML=""
    let id = document.getElementById("id_studient").value;
    console.log(id);
    if(id){

        let url = "http://localhost:3000/alumnos?id="+id;

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
    .then(function(data)
    {      
        if (!data.error)
        {      
              console.log(id + 'en fech');
              console.log(data);
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID alumno: ${data[0].id_studient} <br> 
                            Nombre: ${data[0].first_name} <br>  
                            Apellido: ${data[0].last_name}<br>
                            Grupo: ${data[0].id_grupo}<br>
                            Año de ingreso: ${data[0].year_ingress}<br>
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
        let url = "http://localhost:3000/alumnos";

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

    result.forEach(function (alumno) {               
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID: ${alumno.id_studient} <br>
                            Nombre: ${alumno.first_name} <br>  
                            Apellido: ${alumno.last_name}<br>
                            Grupo: ${alumno.id_grupo}<br>
                            Año de ingreso: ${alumno.year_ingress}<br>
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


function putAlumno() {
    let newName = document.getElementById("first_name").value;
    let newLast = document.getElementById("last_name").value;
    let newGrupo = document.getElementById("id_grupo").value;  
    let newYear = document.getElementById("year_ingress").value;
    let id = document.getElementById("id_studient").value;

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
        first_name: newName, 
        last_name: newLast, 
        id_grupo: newGrupo, 
        year_ingress: newYear,
        id_studient: id

    }
    console.log(put);
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body:JSON.stringify(put)
        
    };

    console.log(newYear);
 
    let url = "http://localhost:3000/alumnos"
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
          console.log(data.resultado);
          showToast("Alumno Modificado Correctamente", "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  error.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}



function deleteAlumno() {
    let id = document.getElementById("id_studient").value;
    // console.log(id);
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8"},
      method: "DELETE",
      body: JSON.stringify({id_studient: id})
    };
  
    const url = "http://localhost:3000/alumnos";
  
    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        // console.log(data);
        showToast("Alumno eliminado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}


