const Contact = require("../Models/contactModels")

// const getContact = async (req,res) => {
//     const contact = await Contact.find();
//     res.status(200).json({response: contact, message:"Get All Contact"});
// }

// const createContact = async (req,res) => {
//     console.log("Created Contact Details:- ",req.body);
//     const {username, email, phone} = req.body;
//     if(!username){
//         res.status(404);
//         throw new Error("Username is required");
//     }else if (!email){
//         res.status(404);
//         throw new Error("Email is required");
//     }else if (!phone){
//         res.status(404);
//         throw new Error("Phone is required");
//     }
//     const contact = await Contact.create({
//         username,
//         email,
//         phone
//     });
//     res.status(200).json({contact, message:`New Contact Created :- ${email} `});
// }

// const updateContact = async (req,res) => {
//     res.status(200).json({message:`Update contact ${req.params.id}`})
// }

// const deleteContact = async (req,res) => {

//     const delUser = await Contact.deleteOne({_id:req.params.id});
//     // res.send(delUser)
//     res.status(200).json({response:delUser.email, message:`Deleted Successfully ${req.params.id}`})

// }
// module.exports = {getContact,createContact,updateContact,deleteContact};


const controllers = {
  async getAllContact(req, res) {
    try {
      const contact = await Contact.find({});
      res.status(200).json({"All Contact:- ": contact});
    } catch (err) {
      console.log(err.message);
    }
  },

  async createContact(req, res) {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (err) {
      console.log(err.message);
    }
  },
  async updataContact(req, res) {
    try {
    } catch (err) {
      console.log(err.message);
    }
  },
  async deleteContact(req, res) {
    try {
    } catch (err) {
      console.log(err.message);
    }
  },
};
module.exports = controllers;