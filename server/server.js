const express =require('express');
const app = express();
const fs = require('fs');
const bodyParser =require('body-parser');
const cookieParser =require('cookies-parser');
const cors = require('cors');
const session = require('express-session');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser())
