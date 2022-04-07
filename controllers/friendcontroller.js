const mongoose = require('mongoose');
const Friend = mongoose.model('friend');

exports.getall = async (req,res) => {
    try {
        const friends = await Friend.find({});
        return res.status(200).json(friends);
    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.create = async (req,res) => {
    try {
        
        const {name, optional} = req.body;
        
        const nameExist = await Friend.findOne({name});
        if(nameExist){
            return res.status(400).json({message: 'Name already Exist'});
        }

        const newFriend = new Friend({name, optional});
        const createdFriend = await newFriend.save();
        
        return res.status(200).json(createdFriend);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.update = async (req,res) => {
    try {
        
        const {_id, name, optional} = req.body;

        const filter = {_id};
        const update = {name, optional};
        const updatedFriend = await Friend.findByIdAndUpdate(filter, update, {
            new : true
        });

        return res.status(200).json(updatedFriend);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.delete = async (req,res) => {
    try {
        
        const friendId = req.params.Id;
        await Friend.deleteOne({_id: friendId});

        return res.status(200).json(friendId);

    } catch (error) {
        return res.status(400).json(error);
    }
}