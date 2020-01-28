import models from '../server/src/models/index'; 

const getAll = async (req, res) => {
    const products = await models.Products.findAll({raw: true});
    res.send(products)
};

export default {
    getAll
}