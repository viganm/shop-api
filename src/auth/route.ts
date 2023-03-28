import { Router } from 'express';
import * as authController from './controller';

const router = Router();

router.post('/login', authController.login);
router.get('/validate-token', authController.validateToken);
router.get('/logout', authController.logout);