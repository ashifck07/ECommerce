const express = require('express')
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth/authRoutes')






const dbConnect = require('./dbConnection');

dbConnect();

const app = express();
const PORT = process.env.PORT || 4000

app.use(

    cors({
        origin :'http://localhost:5173',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})

