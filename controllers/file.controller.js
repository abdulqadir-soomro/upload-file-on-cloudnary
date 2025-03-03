const File = require("../models/file.model");


exports.uploadFiles = async (req, res) => {
    try {
        if (!req.files || (Object.keys(req.files).length === 0)) {
            return res.status(400).json({ message: "Please Enter file or pic" });
        }

        const uploadedFiles = [];

        // Handle 'profilePic' field (single file)
        if (req.files.profilePic) {
            const profilePic = req.files.profilePic[0]; // Since maxCount = 1
            uploadedFiles.push({
                filename: profilePic.originalname,
                url: profilePic.path,  // Cloudinary URL
                filetype: profilePic.mimetype
            });
        }

        // Handle 'documents' field (multiple files)
        if (req.files.documents) {
            req.files.documents.forEach(file => {
                uploadedFiles.push({
                    filename: file.originalname,
                    url: file.path,
                    filetype: file.mimetype
                });
            });
        }

        // Save all files to the database
        const savedFiles = await File.insertMany(uploadedFiles);

        res.json({ message: "Files uploaded successfully!", files: savedFiles });

    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ message: "Upload failed", error: error.message });
    }
};



exports.allfiles= async (req, res) => {
    const files = await File.find();
    res.json(files);
};