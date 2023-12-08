import express from "express";
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile} from "../controllers/userController.js";

router.post('/', registerUser);
router.post('/login', authUser);
router.post('/sair', logoutUser);
router.route('/perfil').get(getUserProfile).put(updateUserProfile);


export default router;