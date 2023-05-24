import { Picture } from "../models/Picture.js";
import fs from 'fs';
import { google } from 'googleapis';

const GOOGLE_API_FOLDER_ID = '1z9xjl7CXjt-kL33XOsPnI6gZX20ipsXH'

const pictureController = {
    upload: async(req, res) => {
        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: '../googledrive.json',
                scopes: ['https://www.googleapis.com/auth/drive']
            })

            const driveService = google.drive({
                version: 'v3',
                auth
            })

            const fileMetaData = {
                'name': req.body.name,
                'parents': [GOOGLE_API_FOLDER_ID]
            }

            const media = {
                MimeType: req.body.type,
                body: fs.createReadStream(req.body.uri)
            }

            const response = await driveService.files.create({
                resource: fileMetaData,
                media: media,
                fields: 'id'
            }) 
            return response.data.id;
        } catch (err) {
            console.log(err);   
        }
    },
    create: async(req, res) => {
        try {
            const picture = {
                name: req.body.name,
                src: req.body.src,
            }
            await Picture.create(picture);
            return res.status(201).json("Imagem criada com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Picture.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
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