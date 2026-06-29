
 import express,{ Application , Request,Response } from "express";
 import dotenv from "dotenv";
dotenv.config();
 const app: Application = express();

 app.get("/" ,(req:Request,res:Response) => {
    res.status(200).json({
        success: true,
        message: "Job Application Tracker API is Running",
    });
 });


 const PORT = process.env.PORT || 5500;

 app.listen(PORT, ()=>{
    console.log(`server is running at the port ${PORT}`);
 });