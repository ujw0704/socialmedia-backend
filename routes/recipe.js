import express from "express"



const recipe = express.Router()


recipe.post("/recipe",(req,res)=>{
     console.log("hello")

console.log (req.body)

})


export default recipe