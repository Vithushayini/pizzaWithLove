const Admin = require('../models/adminModel');

// Function to create a new admin
async function createAdmin(username, password) {
    // Save the admin with the hashed password
    const newAdmin = new Admin({username, password});
    await newAdmin.save();
    console.log('Admin created successfully!');
}

module.exports=createAdmin;
