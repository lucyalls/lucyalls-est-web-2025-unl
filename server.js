const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/themify-icons', express.static(path.join(__dirname, 'node_modules/themify-icons/css')));
app.use('/aos', express.static(path.join(__dirname, 'node_modules/aos/dist')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});