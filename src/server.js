const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Woooooorld');
});

app.use('/users', require('./src/routes/userRoutes'));

app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta: ${PORT}`);
});
