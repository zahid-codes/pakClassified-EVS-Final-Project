const multer = require("multer");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads")
    },
    filename(req, file, cb) {
        const FileName = `${Date.now()}-${file.originalname}`
        cb(null, FileName)
    },
})
const uploadFiles = multer({ storage }).single("image")
module.exports = uploadFiles