const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const thoughtController = {
    // Get all thoughts at GET http://localhost:3001/api/thoughts
    getAllThoughts(req, res) {
        Thought.find({})
          .populate({
            path: "reactions", //Thought also populates Thoughts
            select: "-__v", // The minus sign - in front of the field indicates that we don't want it to be returned.
          })
          .select("-__v") //this put the sort in DESC order by the _id value
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      // Get one Thought by ID  GET http://localhost:3001/api/Thoughts/<Thought-id-here>
      getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.id })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      // createThought POST http://localhost:3001/api/Thoughts
      createThought({ body }, res) {
        Thought.create(body)
          .then((_id) => {  // it associates which id we are creating
            return User.findOneAndUpdate(
              { _id: body.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then((dbUserData) => {
            if (!daUserData) {
              res.status(404).json({ message: "No User found with this id!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      },
    
      // update Thought by id  PUT http://localhost:3001/api/Thoughts/<Thought-id-here>
      updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {
          new: true,
        })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.status(400).json(err));
      },
    
      // delete Thought DELETE localhost:3001/api/Thoughts/<Thought-id-here>
      deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.status(400).json(err));
      },
      
      // Add Reaction to a Thought
      createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $addToSet: { reactions: body } },
          { new: true }
        )
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.json(err));
      },
          
      // Delete Reaction from a Thought
      deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then((dbThoughtData) => {
            res.json(dbThoughtData);
          })
          .catch((err) => res.json(err));
      },
};

module.exports = thoughtController;