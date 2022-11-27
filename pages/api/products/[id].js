import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect(); // connect to the database
  const product = await Product.findById(req.query.id); // find the product by id from the url/api
  await db.disconnect(); // disconnect
  res.send(product); // return the product to the front-end
};

export default handler;
