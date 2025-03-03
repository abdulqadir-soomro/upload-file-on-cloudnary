const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary.config");

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        const isPDF = file.mimetype === "application/pdf";
        return {
            folder: "uploads",
            public_id: `${Date.now()}-${file.originalname}`,
            resource_type: isPDF ? "raw" : "image", // Set 'raw' for PDFs, 'image' for others
        };
    }
});

const upload = multer({ 
    storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

module.exports = upload;
