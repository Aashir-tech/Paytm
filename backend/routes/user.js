const express = require("express")

const router = express.Router();
const zod = require('zod')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require("../config");
const {authMiddleware} = require("../middleware")
const { Account , User} = require("../db")



const signupSchema = zod.object({
    username : zod.string().email(),
    password: zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})



router.post('/signup' , async (req,res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    // const user = await User.findOne({
    //     username: body.username
    // })

    // if(user._id) {
    //     return res.status(411).json({
    //         message: "Email already taken / Incorrect inputs"
    //     })
    // }

    const dbUser = await User.create(body);

    const userId = dbUser._id
    // console.log(userId)
    // console.log(dbUser._id)

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        // userId: dbUser._id
        userId
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signInSchema = zod.object({
    username : zod.string(),
    password: zod.string()
})

router.post('/signin' , async (req,res) => {
    const body = req.body;
    // console.log(body)
    const {success} = signInSchema.safeParse(body)

    if(!success) {
        return res.status(411).json({
            message: "Error while loggin in"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password : body.password
    })
    // console.log(user)
    // console.log(user._id)
    
    // console.log(user[username])

    if (user) {
        const userId = user._id
        // console.log(userId)
        const token = jwt.sign({
            userId
        }, JWT_SECRET)

        console.log(token)

        res.json({
            token : token
        })
        return
    }

    res.status(411).json({
        message: "Error while loggin in"
    })
    
})


const updateBody = zod.object({
    username: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName : zod.string().optional()
})

router.put("/" , authMiddleware, async (req,res) => {
    const {success} = updateBody.safeParse(req.body)
    if(!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req , res) => {
    const filter = req.query.filter || '';

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex" : filter
            }
        }, {
            lastName: {
                "$regex" : filter
            }
        }] 
    })

    res.json({
        user : users.map(user => ({
            username: user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id: user._id
        }))
    })

})


module.exports = router;