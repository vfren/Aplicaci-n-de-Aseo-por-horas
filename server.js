const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 27017;

app.use(express.json());

/* // Conectar a MongoDB
//mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,//

}). */

mongoose.connect('mongodb://localhost:27017/Database');


then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Rutas
app.use('/api', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
