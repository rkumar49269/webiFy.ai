

export const getCurrentUser = async (req, res) =>{
    try {
        if(!req.user){
            return res.josn({user:null})
        }
        return res.json(req.ruser)
    } catch (error) {
        return res.status(500).json({message:`get current user error ${error}`})
    }
}