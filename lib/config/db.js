import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://HknH:Makotosilica110!!@cluster0.ss9ge.mongodb.net/note-app')
    console.log("DB Connected")
}