


const express = require("express")
const cors = require("cors")
const alumnosRouters = require("./routers/alumnos.routers")
const notasRouters = require("./routers/notas.routers")
const mediasRouters = require("./routers/medias.routers")
const profesoresRouters = require("./routers/profesores.routers")
const gruposRouters = require("./routers/grupos.routers")
const asignaturasRouters = require("./routers/asignaturas.routers")
const {errorHandling} = require("./error/errorHandling")

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(alumnosRouters, notasRouters, mediasRouters, profesoresRouters, gruposRouters, asignaturasRouters);
app.use(function (req, res, next) {
    res.status(404).json({
        error: true,
        codigo: 404,
        message: "Endponit doesnt found"
    })

})

app.use(errorHandling);

module.exports = app ;