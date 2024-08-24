import roomModel from './../model/roomModel.js'

const getAllRooms= async(req,res)=>{
    try{
       let room = await roomModel.find();
       res.status(200).send({
        message:'Room fetch succesfully',
        data:room
       })

    }catch(error){
        res.status(500).send({
           message:error.message || 'External Server Error',
           error
        })
    }
}

const createRoom = async(req,res)=>{
    try{
            await roomModel.create(req.body);
            res.status(201).send({
                message: "Room created successfully",
                data:req.body
                })
    }catch(error){
        res.status(500).send({
            message:error.message || 'External Server Error',
            error
         })
    }
}

const editRoomById = async (req,res)=>{
    try{
        let {roomId} = req.params
        let room = await roomModel.findById(roomId)
        if(room){
            room.name = req.body.name
            room.capacity = req.body.capacity
            room.amenities = req.body.amenities
            room.images = req.body.images
            await room.save()
            res.status(200).send({
                message: "Room updated successfully",
                data:room
                })
           }
    }catch(error){
        res.status(500).send({
            message:error.message || 'External Server Error',
            error
    })
}
}
export default {
    getAllRooms,
    createRoom,
    editRoomById
}