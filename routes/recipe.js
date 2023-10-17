import express from "express"
import  multer from "multer"



const recipe = express.Router()

/****************************sending files through multer****************************************/ 
const storage = multer.diskStorage({
     destination: "uploads",
     filename(req, file, cb){
          const ext =path.extname(file.originalname)
          cb(null, this.filename)
     }
})
const upload = multer({storage:storage})



recipe.post("/add", upload.single("image"),(req,res)=>{
     // const { name, price, category, company } = req.body;
     console.log("Form data:", req.body)
     try{
          const image = req.file;
          
          if(!req.file){
               
               console.log("Form data:", req.files)
               console.log("  no File received:");
               return res.status(400).send("No file uploaded.");
          }
           console.log("File recived :req.files")
               res.send('uploaded')
          
     }
     catch (error){
          
          console.error("Error:", error);
         
          
               
     }
     })
     /************************************sending data in node********************************************************/ 

recipe.post("/recipe",(req,res)=>{
     console.log("hello")

console.log (req.body)

})



export default recipe