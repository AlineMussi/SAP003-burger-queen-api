import express from 'express'
import bodyParser from 'body-parser'
//import {DatabaseError} from 'sequelize/types';
import router from './routes/productRoutes';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000

app.use('/api/products', router);

// app.get('*', (req, res) => res.status(200).send({
//    message: 'Esta é a API do Burger Queen.'
// }))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app