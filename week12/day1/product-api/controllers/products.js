const { getAllProducts, getProduct, insertProduct } = require('../modules/products')

const _getAllProducts = (req, res) => {
    getAllProducts().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(404).json({msg:'not found'})
    })
}

const _getProduct = (req, res) => {
    getProduct().then(data => {
        res.json(req.params.id)
    }).catch(err => {
        res.status(404).json({ msg: "not found" });
    })
}

const _insertProduct = (req, res) => {
    insertProduct(req.body)
      .then((data) => {
        res.json(data);
      })
        .catch((err) => {
          console.log(err);
        res.status(404).json({ msg: "not found" });
      });
}

module.exports = {
  _getAllProducts,
    _getProduct,
  _insertProduct
};