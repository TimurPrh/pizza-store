const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const db = require('../services/db')
// const {User} = require('../models/models')

const generateJwt = (id, login) => {
    return jwt.sign(
        {id, login},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async login(req, res, next) {
        const {login, password} = req.body
        const reply = await db.query(
          `SELECT * FROM users WHERE login="${login}"`
        )
        const user = reply[0]
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login)
        return res.json({token})
    }
}

module.exports = new UserController()