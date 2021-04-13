require('./db-cnx');
const express = require('express');
const port = process.env.PORT || 3000;
constcomic_router = require('./routers/comics')

const app = express();
app.use(express.json());
app.use('/api/comics',comics_router);

app.listen(port,()=> console.log(`Server on ${port}`));