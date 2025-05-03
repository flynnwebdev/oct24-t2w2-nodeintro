// import express from 'express' // Import the default export
import { Router } from 'express' // Destructures Router from within the default export
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const secret = process.env.JWT_SECRET

const router = Router()

// Register a new user
// Possibly protect route so only admin can do it
router.post('/register', async (req, res) => {
    try {
        // Create and save new User instance
        const user = await User.create({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        })
        // Send user to the client with 201 status
        // TODO: Create a JWT so the user is automatically logged in
        res.status(201).send({ email: user.email })
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        // Find the user with the provided email
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            // Validate the password
            const match = await bcrypt.compare(req.body.password || '', user.password)
            if (match) {
                // Generate a JWT and send it to the client
                const token = jwt.sign({
                    email: user.email,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
                }, secret)
                res.send({ token, email: user.email })
            } else {
                res.status(404).send({ error: 'Email or password incorrect' })
            }
        } else {
            res.status(404).send({ error: 'Email or password incorrect' })
        }
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

export default router
