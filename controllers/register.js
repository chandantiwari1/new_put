const { NULL } = require('mysql2/lib/constants/types');
const Register = require('../models/register');

exports.getRegister = (req,res,next)=>{
    res.render('register');
}

exports.postRegister = (req,res,next)=>{
    const id =NULL;
    const name = req.body.name;
    const email = req.body.email;
    const section=req.body.section;
    const password = req.body.password;
    const batch = req.body.batch;

    const register = new Register(id,name,email,section,password,batch);
    register.save().then(()=>{
        res.redirect('/');
    }).catch(err =>{
        console.log(err);
    });
};