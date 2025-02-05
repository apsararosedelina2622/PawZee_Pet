import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import connectDB from './config/mongoDB.js'

import user_router from './routes/users_router.js'
import orders_router from './routes/orders_router.js'

import cat_foods_router from './routes/cat_foods_router.js'
import cat_breeds_router from './routes/cat_breeds_router.js'
import cat_groomings_router from './routes/cat_groomings_router.js'
import cat_accessories_router from './routes/cat_accessories_router.js'

import dog_foods_router from './routes/dog_foods_router.js'
import dog_breeds_router from './routes/dog_breeds_router.js'
import dog_groomings_router from './routes/dog_groomings_router.js'
import dog_accessories_router from './routes/dog_accessories_router.js'

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);
connectDB();

const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use(cat_foods_router)
app.use(cat_breeds_router)
app.use(cat_groomings_router)
app.use(cat_accessories_router)

app.use(dog_foods_router)
app.use(dog_breeds_router)
app.use(dog_groomings_router)
app.use(dog_accessories_router)

app.use(user_router)
app.use(orders_router)

app.get('/',(req,res)=>{
  res.send('API WORKING')
})

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

