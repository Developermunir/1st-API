const express = require ('express');
const { getAllUser,createUser ,sigleuser,deleteuser,updateuser} = require('../controllers/userControllers');





//create a router

const router = express.Router();




// users routes

router.route('/').get(getAllUser).post(createUser)
router.route('/:id').get(sigleuser).delete(deleteuser).put(updateuser).patch(updateuser)


// export

module.exports = router;