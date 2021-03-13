const { Admin } = require("../Database/db.config");

exports.createAdmin = (req,res)=>{
        let admin ={};
     try {
         admin.email = req.body.email;
         admin.password = req.body.password;

         Admin.create(admin,{
             attributes:["id","email","password"]
         }).then(result=>{
             res.status(200).json({
                 result:result,
                 success:true,
                 message:"WelCome boss!!"
             })
         })

     } catch (error) {
         console.log(error)
     }
}