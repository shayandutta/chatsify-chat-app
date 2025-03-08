import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
    }],
},
//created at and updated at => conversation.createdAt and conversation.updatedAt will be available
{timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
//Conversation is the model and conversationSchema is the schema of the model
//if we use "Conversation" then mongoDB will create a collection of conversations
//mongoDB will figure out "Conversation" and will create a collection of conversations
//ref: 'User' is used to refer to the User model