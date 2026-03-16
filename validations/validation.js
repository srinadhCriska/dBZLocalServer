

// Validating username and password

const validateUsername=(req,res,next)=>{
     const {username,password}=req.body

     if (!username || !password){
        res.status(401).json({
              code:"0000",
              errorMessage:"Provide valid user credentials"
        })
     }

     next()
}


//Valdating new character details

const validateNewChar = (req, res, next) => {
  const {
    id,
    name,
    ki,
    maxKi,
    race,
    gender,
    description,
    image,
    affiliation,
    deletedAt,
  } = req.body;

  if (
    !id ||
    !name ||
    !ki ||
    !maxKi ||
    !race ||
    !gender ||
    !description ||
    !image ||
    !affiliation||
    !deletedAt
  ) {
    res.status(400).json({
      id: "000",
      description: "Please provide valid details",
    });
    return;
  }
  next()
};

// Validating provided user name

const validateProvidedChar=(req,res,next)=>{
    const {userName}=req.body;
    
    if(!userName){
         res.status(401).json({
              code:"0000",
              errorMessage:"Provide valid username"
         })
    }
    next()
    
}

module.exports={
    validateUsername,
    validateNewChar,
    validateProvidedChar
}