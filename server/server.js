const express = require('express');
const cors = require('cors');
const db = require('./db/db-connection.js')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1012;

