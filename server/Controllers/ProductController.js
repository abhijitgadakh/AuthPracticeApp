const UserModel = require('../Models/User');
const jwt = require ('jsonwebtoken');

const getProducts = async (req, res) => {
    try {
        console.log("details of user");
        console.log(req.user);
        console.log(req.name);

        const products = [
            {
                name: "Mobile",
                price:10000
            },
            {
                name: "watch",
                price:1500
            },
            {
                name: "camera",
                price:25000
            }
        ];

        res.status(200).json(products);
        
    } catch (err) {
        console.error("Error during fetching products:", err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = { getProducts };
