
const {getCharacterFunc}=require("../service/getCharacterData");


const getCharDetails=(req,res)=>{
      const {username}=req.body
      const charArr=getCharacterFunc();
      
      const charDetails=charArr.items.find((eachCharData)=>{
          if (eachCharData.name===username){
              return eachCharData
          }
      })
      
      if (charDetails){
        res.status(200).json({
              code:"1111",
              message:"Character fetched successfully",
              character:charDetails
        })
      }
      else{
          res.status(401).json({
              code:"0000",
              message:"Character not found"
          })
      }
}

module.exports={
      getCharDetails
}

