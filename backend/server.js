const express = require("express");
const app = express();
const dotenv = require("dotenv")
const {chats} = require("./data/data")
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} = require('../backend/middleware/errorMidleware')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const path = require("path");

 connectDB();
dotenv.config()
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("API is Running successfly ");
// })
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/backend/frontend/build")));

app.use('/api/user',userRoutes)
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname1,"backend","frontend", "build",     
   "index.html"));  
});
app.use(notFound);
app.use(errorHandler)

const PORT= process.env.PORT || 8080
const server = app.listen(PORT,console.log("Server Started on PORT ",PORT));

const io = require("socket.io")(server,{
    pingTimeout:60000,
    cors:{
        origin: "https://talktome.azurewebsites.net/",
    },
});
io.on("connection", (socket) =>{
    console.log("cpnnected to socket.io");
    socket.on("setup" , (userData) =>{
        socket.join(userData._id);
        socket.emit("connected");

    });

    socket.on('join chat' , (room) =>{
        socket.join(room);
        console.log("User Joined Room: " + room);
    });

      socket.on("typing", (room) => socket.in(room).emit("typing"));
      socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

      socket.on('new message' , (newMessageRecieved) =>{
  
        console.log("new message sent");
        var chat = newMessageRecieved.chat;
        if(!chat.users) return console.log("chat users not define");
        chat.users.forEach(user =>{
               
            if(user._id == newMessageRecieved.sender._id){
                return;
            }
            socket.in(user.id).emit("message Recieved" , newMessageRecieved);
        })
    });

      socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
