const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")
const { route } = require("./userRoutes")


// router.post("/",protect,accessChat)
// router.get("/",protect,fetchat)
// router.post("/",protect,createGroupchat)
// router.put("/",protect,renameGroup)
// router.put("/",protect,removeGroup)
// router.put("/",protect,addgroup)

module.exports = router