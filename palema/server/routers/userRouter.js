const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register


router.post("/", async (req, res) => {
    try{
        const { email, password, passwordVerify } = req.body

        //validation

        if (!email || !password || !passwordVerify){
            return res.status(400).json(
                {errorMessage: "Please enter all reuired fields.",
            });  
        }

        if (password.length < 8){
            return res.status(400).json(
                {errorMessage: "Please enter a password of at least 8 characters",
            });
        }
        if (password !== passwordVerify){
            return res.status(400).json(
                {errorMessage: "Please make sure that the passwords match",
            });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json(
                {errorMessage: "Email already exists",
            });
        }

        // Hash passwords

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        // save new user to databse
        
        const newUser = new User({
            email, 
            passwordHash
        });

        const savedUser = await newUser.save();

        //Sign token 

        const token = jwt.sign(
            {
                user: savedUser._id,
            },
            process.env.JWT_SECRET
        );
        
        
        //Send Token in HTTP cookie

        res.cookie("token", token, {
            httpOnly: true,
        })
        .send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

//login

router.post("/login", async (req, res) => {
    try{
        const { email, password} = req.body

        //validation

        if (!email || !password) {
            return res
            .status(400)
            .json(
                {errorMessage: "Please enter all reuired fields.",
            });  
        }

        const exisitingUser = await User.findOne({email});
        if (!exisitingUser){
            return res
            .status(401)
            .json({errorMessage: "Wrong email or password"});
        }
        const passwordCorrect = await bcrypt.compare(
            password, 
            exisitingUser.passwordHash
        );
        if (!passwordCorrect){
            return res
            .status(401)
            .json({errorMessage: "Wrong email or password"});
        }

               //Sign token 

               const token = jwt.sign(
                {
                    user: exisitingUser._id,
                },
                process.env.JWT_SECRET
            );
            
            
            //Send Token in HTTP cookie
    
            res.cookie("token", token, {
                httpOnly: true,
            })
            .send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0) 
    }).send();
});

module.exports = router;