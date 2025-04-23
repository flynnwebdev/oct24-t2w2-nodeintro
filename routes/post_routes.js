// import express from 'express' // Import the default export
import { Router } from 'express' // Destructures Router from within the default export
import Post from '../models/post.js'

// Default visibility of all module contents is private

// Flask: Blueprint
const router = Router()

// Get all posts
router.get('/posts', async (req, res) => {
    // res.send(posts)
    res.send(await Post.find())
})

// router.get('/posts/search', (req, res) => {})

// Get one post
// 1. Declare the route
// Python: @router.route('/posts/<int:id>')
router.get('/posts/:id', async (req, res) => {
    // 2. Get the ID of the post
    const post_id = req.params.id  // All params values are strings
    // 3. Get the post with the given ID
    const post = await Post.find({_id: post_id}) //posts.find(p => p.id == post_id) // Using == means type coercion will happen
    // 4. Send the post back to the client
    if (post) {
        res.send(post)
    } else {
        // Flask: return {}, 404
        res.status(404).send({error: `Post with id ${post_id} not found`})
    }
})

// Create a new post
// POST /posts
router.post('/posts', (req, res) => {
    // Get post data from the request body
    const bodyData = req.body
    console.log(bodyData)
    // Create new Post instance
    // Commit new Post instance to DB
    // Send _ to the client
    res.send('POST /posts')
})

// Update a post
// Delete a post

// One default export allowed per module
// Default export is anonymous
export default router
