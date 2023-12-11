import express from "express";
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post('/', registerUser);
router.post('/login', authUser);
router.post('/sair', logoutUser);
router.route('/perfil').get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;