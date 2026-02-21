// server.js — Production-ready backend for Railway
const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));