﻿import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});
