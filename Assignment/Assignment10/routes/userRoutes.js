import express from 'express';
import { addUser, deleteUser, getAllUser, getById, updateUSer } from '../controller/userController.js';
const router=express.Router();

router.get("/",getAllUser)


router.post("/",addUser)

router.get("/:id",getById)

router.delete("/delete",deleteUser)




router.put("/update/:id",updateUSer)



export default router;