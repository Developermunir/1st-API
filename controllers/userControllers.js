const { json } = require('express');
const {readFileSync, writeFileSync} = require ('fs');
const path = require ('path');



/**
 * @desc get all users data
 * @name GET /api/v1/user
 * @access  public  
 */


const getAllUser = (req, res) => {
 
    // get user data form json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
  
    // send data
    res.status(200).json (users) 
    

}
/**
 * @desc create a new user
 * @name GET /api/v1/user
 * @access  public
 */


const createUser = (req, res) => {

    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

 // get body data
 const {name , skill} = req.body
 // validation
 if(!name || !skill){
    res.status(400).json({
        message : "Name & skill required"
    });
    els
 }else{
    users.push({
        id: Math.floor(Math.random()*1000000000),
        name: name,
        skill : skill
    })




    writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));

    res.status(201).json({
        message : "User created successful"
    })
 }

}


//exprots

module.exports = {
    getAllUser,
    createUser
}