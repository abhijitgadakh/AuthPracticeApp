const jwt = require ('jsonwebtoken');

const ensureAunthenticated = (req, res, next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403).json({ message: "1Unauthorized, JWT is required", success: false });
    }

    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err){
        return res.status(403).json({ message: "2Unauthorized, JWT is wrong or expired", success: false });
    }
}

module.exports = ensureAunthenticated;