/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import db from '../utils/db';
import Product from '../models/Product';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link';
import { Grid } from '@mui/material';

export default function Home(props) {
  const { state, dispatch } = useContext(Store);
  const { products } = props;
  const { cart } = state;

  SwiperCore.use([Autoplay]);

  //add to cart function from the main page
  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <Swiper slideperview={1} autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <Link href="/product/modern-livingroom-set">
            <img src="/images/banner.jpg" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product/modern-livingroom2-set">
            <img src="/images/banner2.jpg" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product/gray-sofa-set">
            <img src="/images/banner3.jpg" alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
      &nbsp;
      <h2>Popular Products</h2>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
