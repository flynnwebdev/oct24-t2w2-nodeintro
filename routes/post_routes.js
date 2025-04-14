import express from 'express'

// Default visibility of all module contents is private
const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: false
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: true
    }
]

// Flask: Blueprint
const router = express.Router()

// Get all posts
router.get('/posts', (req, res) => {
    res.send(posts)
})
// Get one post
// 1. Declare the route
// Python: @router.route('/posts/<int:id>')
router.get('/posts/:id', (req, res) => {
    // 2. Get the ID of the post
    const post_id = req.params.id  // All params values are strings
    // 3. Get the post with the given ID
    const post = posts.find(p => p.id == post_id) // Using == means type coercion will happen
    // 4. Send the post back to the client
    if (post) {
        res.send(post)
    } else {
        // Flask: return {}, 404
        res.status(404).send({error: `Post with id ${post_id} not found`})
    }
})


// Create a new post
// Update a post
// Delete a post

// One default export allowed per module
// Default export is anonymous
export default router
