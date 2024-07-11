const express = require ('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//USUARIO
const User = {
    email: String,
    password: String
};

//CREAR USUARIO
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User ({ email, password: hashedPassword });
    await user.save();
    res.send('User created succesfully!');
});

//LOGIN USUARIO
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user){
        return res.status(401).send('Invalid email or password');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid){
        return res.status(401).send('Invalid email or password');
    }
    const token = jwt.sign({ userId: user.id}, 'ecretkey', { expiresIn: '1h'});
    res.send({ token });   
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})