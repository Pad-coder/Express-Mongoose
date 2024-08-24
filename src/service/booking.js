const getAllBooking= async(req,res)=>{
    try{

    }catch(error){
        res.status(500).send({
            message:error.message || 'External Server Error',
            error
         })
    }
}

const createBooking=async (req,res)=>{
    try{

    }catch(error){
        res.status(500).send({
            message:error.message || 'External Server Error',
            error
         })
    }
}


export default{
    getAllBooking,
    createBooking
}