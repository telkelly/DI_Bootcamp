const express = require("express");

const { products } = require("./config/data");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("runnhhing");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:product_id", (req, res) => {
  const id = req.params.product_id;
  const product = products.find((i) => i.id == id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// search for a product by name
// GET - READ - quary localhost:3001/api/search?name=ip -- query

app.get("/api/search", (req, res) => {
  const product_name = req.query.name;

  const findName = products.filter((i) => {
    return i.name.toLowerCase().includes(product_name.toLowerCase());
  });

  res.json(findName);
});

// POST

app.post("/api/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(products);
  res.send("ok fr post");
});

// DELETE

app.delete("/api/products/:id", (req, res) => {
  console.log("ho");
  const id = req.params.id;
  const deletePr = products.findIndex((i) => i.id == id);
  if (deletePr === -1) {
    return res.status(404).json({ msg: "not found" });
  }

  products.splice(deletePr, 1);
  res.json(products);
});

// PUT

app.put("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((i) => i.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    } 
    products[index] = {
        ...products[index],
        name: req.body.name,
        price: req.body.price
    }
    res.json(products)
});
