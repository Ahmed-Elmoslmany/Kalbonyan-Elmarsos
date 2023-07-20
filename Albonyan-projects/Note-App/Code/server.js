import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
// db connection and auth
import connectDB from './db/connect.js';

// Auth router
import authRouter from './routes/authRoute.js';
import notesRouter from './routes/noteRoute.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
  }
  

  const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));


app.use(cors())
app.use(express.json())


app.get('/', (req,res,next) => {
    res.send("hello")
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/notes', authenticateUser, notesRouter)


// only when ready to deploy
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.port || 5000

const start = async () => {
try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log("server rinning")
    })
}catch (err){
    console.log(err)
}
      
}

start()