const {Router} = require ("express")
const router = Router();
const asignaturasCtrl = require("../controller/asignaturas.controller")



router.get("/asignaturas", asignaturasCtrl.getAsignatura);

router.post("/asignaturas", asignaturasCtrl.postAsignatura);

router.put("/asignaturas", asignaturasCtrl.putAsignatura);

router.delete("/asignaturas", asignaturasCtrl.deleteAsignatura);





module.exports = router;