let data=[];

const getAllUser=(req,res)=>{
    res.status(200).json({
        "success":true,
        "users":data
    })
}

const addUser=(req,res)=>{
    let {id,name,city}=req.body;
    if(!id || !name || !city){
        return res.json({
            success:false,
            message:"Insufficient Data"
        })
    }
    let user={
        "id":id,
        "name":name,
        "city":city
    }
    data.push(user);
    res.json({
        success:true,
        message:"user added successfully",
        users:data
    })
}


const getById=(req,res)=>{
    let id=req.params.id;
    let u=data.find(u=>u.id==id);
    if(u){
        return res.json({
            success:true,
            message:"User found",
            user:u
        })
    }else{
        return res.json({
            success:false,
            message:"User not found"
        })
    }

}

const deleteUser=(req,res)=>{
    let id=req.body.id;
    let u=data.find(u=>u.id==id);
    if(u){
        data=data.filter(u=>u.id!==id);
        return res.json({
            success:true,
            message:"User deleted",
            deletedUser:u
        })
    }else{
        res.status(404).json({
            success:false,
            message:"user not found"
        })
    }
}


const updateUSer=(req,res)=>{
    let id=req.params.id;
    let u=data.find(u=>u.id==id);
    if(u){
        Object.assign(u, req.body);
        return res.json({
            success:true,
            message:"User updated",
        })
    }
}


export {getAllUser,getById,updateUSer,deleteUser,addUser};
