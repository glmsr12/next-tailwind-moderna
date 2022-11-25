import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { useContext, useEffect } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

export default function shippingScreen() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleSubmit, register, setValue } = useForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state, dispatch } = useContext(Store);

  const { cart } = state;
  const { shippingAddress } = cart;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, country, postalCode }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, country, postalCode },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
          location,
        },
      })
    );

    Router.push('/payment');
  };
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className='"mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name',
            })}
          />
          {appendErrors.fullName && (
            <div className="text-red-500">{appendErrors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register('address', {
              required: 'Please enter Address',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {appendErrors.address && (
            <div className="text-red-500">{appendErrors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register('city', {
              required: 'Please enter city',
            })}
          />
          {appendErrors.city && (
            <div className="text-red-500">{appendErrors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            {...register('country', {
              required: 'Please enter country',
            })}
          />
          {appendErrors.country && (
            <div className="text-red-500">{appendErrors.country.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter Postal Code',
            })}
          />
          {appendErrors.postalCode && (
            <div className="text-red-500">
              {appendErrors.postalCode.message}
            </div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

shippingScreen.auth = true;
