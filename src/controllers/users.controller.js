const bcrypt = require('bcryptjs');

const User = require('../models/users.model');
const { createToken } = require('../utils/helpers');

const register = async (req, res, next) => {
    try {
        // Encriptamos la password
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Insertamos el documento
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res) => {
    // body: email, password
    const { username, password } = req.body;

    // ¿Existe el email en la BD?
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Error en email y/o contraseña' });
    }

    // ¿Coinciden las password?
    const same = await bcrypt.compare(password, user.password);
    if (!same) {
        return res.status(401).json({ message: 'Error en email y/o contraseña' });
    }

    res.json({
        message: 'Login correcto',
        token: createToken(user)
    });
}

const getProfile = async (req, res, next) => {
    res.json(req.user);
};

module.exports = {
    register, login, getProfile
}