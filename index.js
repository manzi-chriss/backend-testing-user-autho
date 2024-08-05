const express= require('express');
const {connectDB}= require('./model/DBconnection')
const  cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

connectDB();
const app=express();
const port= process.env.PORT||5021;

app.use(express.json());
app.use(cors());
const userRoutes = require('./controllers/routes/User');
const accountRoutes = require('./controllers/routes/account')
const loginRoute = require('./controllers/routes/Login')

app.use('/api/users',userRoutes);
app.use('/api/account',accountRoutes)
app.use('/api/login',loginRoute)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    // console.log(`Server running on port http://localhost:${port}`);
});
