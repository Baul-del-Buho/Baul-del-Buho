const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


//Middleware
app.use();
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));