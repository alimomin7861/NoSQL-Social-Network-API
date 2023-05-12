const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userController = {
  // Get all users at GET http://localhost:3001/api/Users
  getAllUsers(req, res) {
   User.find({})
   .populate({
    path: "thoughts", //User also populates Thoughts
    select: "-__v", // The minus sign - in front of the field indicates that we don't want it to be returned.
  })
  .select("-__v") //this put the sort in DESC order by the _id value
  .sort({ _id: -1 }) 
  .then((dbUserData) => res.json(dbUserData))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
  },
  // Get a single user by ID at GET http://localhost:3001/api/Users/<User-ID-here>
  getUserByID({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts", //User also populates Thoughts
        select: "-__v", // The minus sign - in front of the field indicates that we don't want it to be returned.
      })
      .select("-__v") //  //this put the sort in DESC order by the _id value
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Create a new User POST http://localhost:3001/api/users
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  // Update User by id  PUT http://localhost:3001/api/users/<User-id-here>
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a User at DELETE http://localhost:3001/api/Users/<User-ID-here>
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "User and associated thoughts deleted!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Add a friend to a User at POST http://localhost:3001/api/Users/<User-ID-here>/Friends/<Friend-ID-here>
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: {friends: params.friendsId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },
  
  // Delete a friend from a User at DELETE http://localhost:3001/api/Users/<User-ID-here>/Friends/<Friend-ID-here>
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: {friends: params.friendsId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }

};

module.exports = userController;