const {Router} = require ("express")
const router = Router();
const gruposCtrl = require("../controller/grupos.controller")



router.get("/grupos", gruposCtrl.getGrupos);

router.post("/grupos", gruposCtrl.postGrupo);

router.put("/grupos", gruposCtrl.putGrupo);

router.delete("/grupos", gruposCtrl.deleteGrupo);





module.exports = router;