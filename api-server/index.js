const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


let cart = [];
let users = [
  { id : 1 , name : "zayd ", email : "test@test.com" , password : "1234" },
];

app.post('/api/register' , (req , res) => {
  const  { name , email , password} = req.body;
  if(users.find(u => u.email == email && u.password == password)){
    return res.status(400).json({ message : "user already exist !!"})
  }
  const newUser = { id : users.length + 1 , name , email , password} ;
  users.push(newUser);
  res.status(201).json(newUser);
})
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email == email && u.password == password);
  // fake login (for learning)
  if (user) {
    res.json({id : user.id , name : user.name , email : user.email , password : user.password});
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }

});

app.get("/api/products", (req, res) => {
  let products = [
    {
      productID: "ERMM",
      productTitle: "Iphone 16pro",
      productImage: "iphone16.jpeg",
      category: "phones",
      prouctPrice: "10000 DH",
    },
    {
      productID: "ERRR", 
      productTitle: "Samsung Tv",
      productImage: "Tv.jpeg",
      category: "Tv",
      prouctPrice: "5000 DH",
    },
    {
      productID: "ERMN",
      productTitle: "Hp laptop G400",
      productImage: "laptop.jpg",
      category: "laptop",
      prouctPrice: "10000 DH"
    },
    
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

const port = 3000;

app.listen(port, () => console.log(`API Server listening on port ${port}`));


