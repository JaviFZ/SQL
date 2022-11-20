const {Router} = require ("express")
const router = Router();
const profesoresCtrl = require("../controller/profesores.controller")



router.get("/profesores", profesoresCtrl.getProfesores);

router.post("/profesores", profesoresCtrl.postProfesor);

router.put("/profesores", profesoresCtrl.putProfesor);

router.delete("/profesores", profesoresCtrl.deleteProfesor);





module.exports = router;