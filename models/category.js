import { model } from 'mongoose'

// Flask: ORM (Object-Relational Mapper - SQLAlchemy) - defined models
// Express: ODM (Object-Document Mapper - Mongoose)
const Category = model('Category', {
    name: { type: String, required: true },
    description: { type: String } // optional
})

export default Category
