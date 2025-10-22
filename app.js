import express from 'express';
import api from './routes/api.js';
const app = express();

app.use(express.json());

app.use('/api', api);

app.listen(3000, () => {
    console.log('Aplikasi berjalan di http://localhost:3000');
})