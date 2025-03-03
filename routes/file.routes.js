const express=require('express');
const router=express.Router();
const {uploadFiles,allfiles}=require('../controllers/file.controller');
const upload=require("../multer.config");


const uploadFields = upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "documents", maxCount: 5 }    
  ]);

/**
 * @swagger
 * /uploadfiles/upload:
 *   post:
 *     summary: Upload files to Cloudinary
 *     description: Upload profile pictures and documents to Cloudinary
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePic:
 *                 type: string
 *                 format: binary
 *               documents:
 *                 type: string
 *                 format: binary
 *             required:
 *               - profilePic
 *               - documents
 *     responses:
 *       200:
 *         description: Files uploaded successfully
 *       500:
 *         description: Upload failed
 */


router.post("/upload", uploadFields, uploadFiles);


/**
 * @swagger
 * /uploadfiles/files:
 *   get:
 *     summary: Retrieve all files
 *     description: Retrieve all files from the database
 *     responses:
 *       200:
 *         description: Successfully retrieved all files
 *       500:
 *         description: Internal server error
 */

router.get("/files",allfiles);

 module.exports=router;