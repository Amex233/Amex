const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

// Iniciar la app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/miapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => console.log(err));

// Definir esquema de usuario
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Ruta de registro
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  // Verificar si el usuario ya existe
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear nuevo usuario
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).json({ message: 'Usuario registrado con éxito' });
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor escuchando en puerto 5000');
});
