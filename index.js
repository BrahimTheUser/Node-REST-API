const express = require('express');
const helmet = require('helmet'); // middleware that helps secure Express apps by setting various HTTP headers
const cors = require('cors'); // middleware that enables cross-origin resource sharing (CORS)
const cookieParser = require('cookie-parser'); // middleware that parses the cookie header and populate req.cookies with an object keyed by the cookie names.
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Database connected');
	})
	.catch((err) => {
		console.log(err);
	});

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server' });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running...');
});
