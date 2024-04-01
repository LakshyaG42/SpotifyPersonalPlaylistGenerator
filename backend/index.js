import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import { Song } from "./models/songModel.js";


const app = express();

app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send("Hello, world!");
});

 // Route to save a new song
app.post('/songs', async (req, res) => {
    try {
        if(
            !req.body.name ||
            !req.body.artist ||
            !req.body.emotion ||
            !req.body.genre ||
            !req.body.id ||
            !req.body.uri
        ) {
            return response.status(400).send({ message: "Missing required fields" });
        }
        const newSong = {
            emotion: req.body.emotion,
            genre: req.body.genre,
            id: req.body.id,
            uri: req.body.uri
        };
        
        const song = await Song.create(newSong);

        return res.status(201).send(song);
    } catch (err) {
        console.log(err);
        res.status(500).send( { message: err.message } );
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB", err);
    });