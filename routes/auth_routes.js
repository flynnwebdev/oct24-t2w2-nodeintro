// import express from 'express' // Import the default export
import { Router } from 'express' // Destructures Router from within the default export
import bcrypt from 'bcrypt'
import User from '../models/user.js'

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
        // TODO: Filter out the password
        res.status(201).send({ email: user.email })
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

// TODO: Login
router.post('/login', (req, res) => {
    res.send({ route: 'POST /login' })
})

export default router
