
export const validateYear =(req,res,next)=>{

    const year = req.params.year

    //Check the param year contains only numbers 

    if(!(/^\d+$/.test(year))){
        return res.status(400).json({message: "Year must be a number"})
    }

    const currentYear = new Date().getFullYear()

    const yearNumber = parseInt(year)

    if(yearNumber < 2000 || yearNumber>currentYear){
       return  res.status(400).json({message: "Year must be between 2000 and current year"})
    }

    next()
}