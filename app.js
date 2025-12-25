const express = require('express');
const path = require('path');
const webRoutes = require('./routes/webRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', webRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Página no encontrada', page: '404' });
});

app.listen(PORT, () => {
    console.log(`Servidor V2 corriendo en http://localhost:${PORT}`);
});
