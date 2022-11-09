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


/**
 * @desc get sigle data
 * @name GET /api/v1/user.:id
 * @access  public  
 */


 const sigleuser = (req, res) => {
 
    // get user data form json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
  

    const sigleuser = users.find( data => data.id == req.params.id)
  
    if(users){
        res.status(200).json(sigleuser)
    }else{
        res.status(404).json({
            message : "User data not found"
        })
    }

}

/**
 * @desc delete user
 * @name delete /api/v1/user/:id
 * @access  public  
 */


 const deleteuser = (req, res) => {
 
    // get user data form json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
  

  if(users.some( data => data.id == req.params.id)){
    const deletedata = users.filter( data => data.id !== req.params.id)
    
    writeFileSync(path.join(__dirname, '../db/users.json') ,JSON.stringify(deletedata));
    res.status(200).json({
        message : "user deleted successful"
    })
  }else{
    res.status(404).json({
        message : "User not found"
    })
}
  }
 


/**
 * @desc update user
 * @name put /api/v1/user/:id
 * @access  public  
 */


 const updateuser = (req, res) => {
 
    // get user data form json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
  

  if(users.some( data => data.id == req.params.id)){
    
    users[users.findIndex(data => data.id == req.params.id)]={
        ...(users[users.findIndex(data => data.id == req.params.id)]),
        ...req.body
    }

    writeFileSync(path.join(__dirname, '../db/users.json') ,JSON.stringify(users));
    res.status(200).json({
        message : "user update successful"
    })

  }else{
    res.status(404).json({
        message : "User not found"
    })
}
  }
 


//exprots

module.exports = {
    getAllUser,
    createUser,
    sigleuser,
    deleteuser,
    updateuser
}