const express=require("express");
const passport = require('passport'); 
const User = require("../model/user");
const router=express.Router();

router.get('/register',(req,res)=>{
    res.render('auth/signup.ejs');
});

router.post('/register',async(req,res)=>{
    const {email,password,username}=req.body;
    const user=new User({email,username});
    const newuser=await User.register(user,password);
    res.redirect('/login');
});
router.get('/login',(req,res)=>{
    res.render('auth/login.ejs');
});

router.post('/login',
passport.authenticate('local', { failureRedirect: '/login' })
,(req,res)=>{
     console.log(req.user);
    res.redirect('/products');
});

router.get('/logout',(req,res)=>{
   ()=>{
    req.logout(); 
  }
   res.redirect('/login');
});
module.exports=router;