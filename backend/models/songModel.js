import mongoose from "mongoose";

const songSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        emotion: {
            type: String,
            enum: ['happy', 'sad', 'energetic', 'relaxing', 'motivated', 'romantic', 'inspirational', 'intense', 'peaceful', 'heartbroken'],
            required: false
        },
        genre: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: true
        },
        uri: {
            type: String,
            required: true
        }
    }
);


export const Song = mongoose.model('Song', songSchema );