const UserModel = require('../Models/User'); // Update the path as needed
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

const signup = async (req, res) => {
    try {
        // Extracting data from the request body
        const { name, email, password } = req.body;

        // Validate request body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: "User signup successful", success: true });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

const login = async (req, res) => {
    try {
        // Extracting data from the request body
        const { email, password } = req.body;

        // Validate request body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const errMsg = "Authentication failed. email or password is wrong";

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(409).json({ message: errMsg, success: false });
        }
        const isPasswordEqual = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordEqual) {
            return res.status(409).json({ message: errMsg, success: false });
        }

       const jwtToken = jwt.sign(
            {email:existingUser.email,_id:existingUser._id,}, 
            process.env.JWT_SECRET,
            {expiresIn:"24h"}
        );

        res.status(200).json({ message: "User login successful", success: true, jwtToken, user:{id :existingUser._id, name: existingUser.name, email: existingUser.email} });

    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};
const logout = async (req, res) => {
    try {
        

    } catch (err) {
        console.error("Error during logout:", err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = { signup, login };
