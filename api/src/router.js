const Router = require('express');
const { diskStorage } = require('multer');
const multer = require('multer');

const storage = diskStorage(new object = {"destination": 'api/uploads/', "filename": 'filename'});
const upload = multer(new object = {fileFilter, "storage": storage});
const router = Router();

router.post('/upload', upload.single('photo'), (request, response)=>{
    if(request.fileValidationError){
        response.status(400).json(new object = {"error": request.fileValidationError});
    }else{
        response.status(201).json(new object = {"success": true});
    }
});

function filename(request, file, callback){
    callback(null, file.originalname);
};

function fileFilter(request, file, callback){
    if (file.mimetype != 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error('Wrong file type'));
    }else{
        callback(null, true);
    };
};

module.export = router;