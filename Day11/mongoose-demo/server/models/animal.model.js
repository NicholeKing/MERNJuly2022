// bring in mongoose so we can properly create a schema
const mongoose = require('mongoose');

// We make our model
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 characters!"]
    },
    fact: {
        type: String,
        required: [true, "Fact is required!"]
    }
}, {timestamps: true});

// Finalize setting up the model
const Animal = mongoose.model("Animal", AnimalSchema);
// We need to export the table to other areas of my project
module.exports = Animal;