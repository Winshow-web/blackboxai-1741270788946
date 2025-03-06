import express from 'express';
import { register, login, adminLogin, getCurrentUser } from '../controllers/authController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/admin/login', adminLogin);

// Protected routes
router.get('/me', protect, getCurrentUser);

// Test protected routes
router.get('/test-auth', protect, (req, res) => {
  res.json({ message: 'You are authenticated', user: req.user });
});

router.get('/test-admin', protect, adminOnly, (req, res) => {
  res.json({ message: 'You have admin access' });
});

export default router;
