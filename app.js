// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const loginRouter = require('./routers/loginRouter');
const usersRouter = require('./routers/usersRouter');
const inboxRouter = require('./routers/inboxRouter');
const {
    notFoundHandler,
    errorHandler,
} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

// db connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('db connection successful!'))
    .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handling
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
});
