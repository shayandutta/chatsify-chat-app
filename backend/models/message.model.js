import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  // message created at and updated at => message.createdAt and message.updatedAt will be available
  { timestamps: true }
);


const Message = mongoose.model("Message", messageSchema);
export default Message;
//Message is the model and messageSchema is the schema of the model
//if we use "Message" then mongoDB will create a collection of messages
//mongoDB will figure out "Message" and will create a collection of messages
//ref: 'User' is used to refer to the User model
//ref is used to refer to the model User