const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
const Car=require('./models/carDetailModel');
const User=require('./models/loginModel');
const nodemailer = require("nodemailer");
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

mongoose.connect("mongodb+srv://Nainarns:Nainarns876@crudapp.gwh6wn4.mongodb.net/TodoList?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},err=>{
    if(err)console.log(err);
    console.log("db connected successfully")
})
// app.get('/',(req,res)=>{
//     res.send("hiii there")
// })
//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      user: "nainarmy412@gmail.com",
                      pass: "mmhbdztapuvnupgl",
                    },
                  });
                  const mailOptions = {
                    from:"nainarmy412@gmail.com",
                    to:`${user.email}`,
                    subject: `Mail from ${user.email}`,
                    html: `
                   <h1>Congratualation Your Login is Successfully</h1>
                    <table style="width:100%; border:1px solid black;">
                  <tr style="border:1px solid black;">
                  <td style="border:1px solid black; font-weight: bold;">Email:</td>
                  <td style="border:1px solid black;">${user.email}</td>
                  </tr>
                
                </table>
                    `,
                  };
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log(`Email sent: ${info.response} `);
                    }
                  });
                  transporter.close();
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) ;

// app.get('/nainar',(req,res)=>{
//     const car=new Car({
//         name:"Maruti Suzuki",
//         images:"https://imgd-ct.aeplcdn.com/664x415/n/39auusa_1483111.jpg?q=75",
//         state:'Andhra Pradesh',
//         district:'Visakhapatnam',
//         model:"Swift Dzire",
//         Km:'17599',
//         price:'8,20,000'
//     });

//     car.save((err,data) => {
//         if(err) {
//             res.send(err)
//         } else {
//             res.json(data)
//         }
//     })
// })



app.get('/find' , (req,res) => {
    Car.find((err,docs) => {
        if(err) console.log(err)
        res.json(docs)
    })
});


// app.get('/api/user/:_id', async(req,res)=>{

//     console.log(req.params._id);
//     const user = await Car.findById(req.params._id);
  
//     if(!user) {
//         res.status(500).json({message: 'The user with the given ID was not found.'})
//     } 
//     res.status(200).send(user);
//   })


app.get('/api/user/:id', async (req, res) => {
    const { _id } = req.params;
    const user = await Car.findOne(_id);
  
    res.json({
      success: true,
      data:user,
    });
    console.log(user)
  });





app.listen(9002,() => {
    console.log("BE started at port 9002")
})