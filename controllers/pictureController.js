import fs from 'fs';
import { google } from 'googleapis';
import googledrive from '../googledrive';

const GOOGLE_API_FOLDER_ID = '1z9xjl7CXjt-kL33XOsPnI6gZX20ipsXH';

const pictureController = {
    upload: async(req, res) => {
        const {name} = req.body;

        const file = req.file;

        const picture = {
            name,
            src: file.path
        };
        const filename = picture.src.split('/')[1];
        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: googledrive,
                scopes: ['https://www.googleapis.com/auth/drive']
            });

            const driveService = google.drive({
                version: 'v3',
                auth
            });

            const fileMetaData = {
                'name': filename,
                'parents': [GOOGLE_API_FOLDER_ID]
            }

            const media = {
                MimeType: req.body.type,
                body: fs.createReadStream('uploads/'+ filename)
            }

            const response = await driveService.files.create({
                resource: fileMetaData,
                media: media,
                fields: 'id'
            }) 
            return res.status(201).json({"imageUrl": response.data.id});
        } catch (err) {
            console.log(err);   
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Picture.findById(id);
            if(!data) {
                return res.status(404).json("Imagem não encontrada.");
            }
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = Picture.findById(id);
            if(!data) {
                return res.status(404).json("Image não encontrada.");
            }
            await Picture.findByIdAndDelete(id);
            return res.status(200).json("Imagem apagada com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default pictureController;