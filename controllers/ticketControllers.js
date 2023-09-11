const { default: mongoose } = require("mongoose");
const Ticket = require("../Models/ticketModels")

const controllers = {

    async getTicket(req, res) {
        try {
            const tickets = await Ticket.find();
            res.status(200).json(tickets);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'An error occurred' });
        }
    },

    async riseTicket (req, res) {
        try {
            const { issue } = req.body;
            const newTicket = await Ticket.create({ issue, status: 'Open' });
            res.status(201).json(newTicket);
        } catch (error) {
            res.status(500).json({ message: 'An error occurred' });
            console.log(error.message);
        }
    },

    
    
    async getCombinedData(req, res) {
        const Contact = mongoose.model("Contact");
        const Ticket = mongoose.model("Ticket");
        
        try {
          const result = await Contact.aggregate([
            {
              $lookup: {
                from: 'tickets', // Corrected collection name to 'tickets'
                localField: 'email',
                foreignField: 'contactEmail',
                as: 'tickets'
              }
            },
            {
              $project: {
                _id: 1,
                username: 1,
                email: 1,
                phone: 1,
                tickets: 1
              }
            }
          ]);
      
          console.log("dataa", result);
          res.status(200).json({CombinedData: result}); // Removed unnecessary quotes around the response data
        } catch (error) {
          res.status(500).json({ message: 'An error occurred' });
          console.log(error.message);
        }
      }
      





}

module.exports = controllers;