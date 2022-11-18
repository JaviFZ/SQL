const {Router} = require ("express")
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller")




// router.get("/profesionales", profesionalsCtrl.getProfesional);

router.get("/alumnos", alumnosCtrl.getAlumnos);

router.post("/alumnos", alumnosCtrl.postAlumno);

router.put("/alumnos", alumnosCtrl.putAlumno);

router.delete("/alumnos", alumnosCtrl.deleteAlumno);





module.exports = router;



