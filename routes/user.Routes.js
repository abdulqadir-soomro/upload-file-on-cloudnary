const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



/**
 * @swagger
 * /users/getalluser:
 *   get:
 *     summary: Retrieve all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully retrieved all users
 *       500:
 *         description: Internal server error
 */
router.get('/getalluser',userController.getalluser);


/**
 * @swagger
 * /users/createuser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               phonenum:
 *                 type: number
 *               address:
 *                 type: string
 *               designation:
 *                 type: string
 *               gender:
 *                 type: number
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 */

router.post('/createuser', userController.createuser);


module.exports = router;






