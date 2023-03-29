const express = require('express');
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.set('port', process.env.PORT || 3000);
const scholarships = require('./data/scholarship');
const user = require('./data/users');
const favorites = require('./data/favorites');

app.locals = {
    title: 'scholarships Api',
    scholarships: scholarships,
    user: user,
    favorites: favorites
}
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/scholarships', (request, response) => {
    response.status(200).json(app.locals.scholarships);
});

app.get('/user', (request, response) => {
    response.status(200).json(app.locals.user);
});

app.get('/favorites', (request, response) => {
    response.status(200).json(app.locals.favorites);
});