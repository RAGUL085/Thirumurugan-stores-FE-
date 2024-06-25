import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AllProduct from '../component/AllProduct';
import { addCartItem } from '../redux/productSlice';

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector(state => state.product.productList);
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtered products based on search query
  const filteredProducts = productData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productDisplay = filterby ? productData.find(el => el._id === filterby) : null;

  const handleAddCart = (product) =>{
    dispatch(addCartItem(product))
  };

  const handleBuyNow = (product) =>{
    dispatch(addCartItem(product));
    navigate("/cart");
  };

  return (
    <div className='p-2 md:p-4'>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Product display */}
      {productDisplay && (
        <div className='w-full max-w-4xl bg-white m-auto md:flex'>
          <div className='w-60 min-h-[200px] max-w-sm overflow-hidden p-5'>  
            <img src={productDisplay.image} alt={productDisplay.name} className='hover:scale-105 transition-all h-full w-full' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='font-semibold text-slate-600 text-left capitalize text-2xl md:text-4xl'>{productDisplay.name}</h3>
            <p className='text-left text-slate-500 font-medium text-2xl'>{productDisplay.category}</p>
            <p className='font-bold md:text-2xl'><span className='text-red-400'>₹</span>{productDisplay.price}</p>
            <div className='flex gap-3'>
              <button className='bg-yellow-500 py-1 my-3 rounded hover:bg-yellow-600 min-w-[100px]' onClick={() => handleBuyNow(productDisplay)}>Buy Now</button>
              <button className='bg-yellow-500 py-1 my-3 rounded hover:bg-yellow-600 min-w-[100px]' onClick={() => handleAddCart(productDisplay)}>Add Cart</button>
            </div>
            <div>
              <p className='text-slate-500 font-medium'>Description : </p>
              <p>{productDisplay.description}</p>
            </div>          
          </div>
        </div>
      )}

      {/* Show filtered products if searchQuery is not empty */}
      {searchQuery && filteredProducts.map(product => (
        <div key={product._id} className='w-full max-w-4xl bg-white m-auto md:flex'>
          <div className='w-60 min-h-[200px] max-w-sm overflow-hidden p-5'>  
            <img src={product.image} alt={product.name} className='hover:scale-105 transition-all h-full w-full' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='font-semibold text-slate-600 text-left capitalize text-2xl md:text-4xl'>{product.name}</h3>
            <p className='text-left text-slate-500 font-medium text-2xl'>{product.category}</p>
            <p className='font-bold md:text-2xl'><span className='text-red-400'>₹</span>{product.price}</p>
            <div className='flex gap-3'>
              <button className='bg-yellow-500 py-1 my-3 rounded hover:bg-yellow-600 min-w-[100px]' onClick={() => handleBuyNow(product)}>Buy Now</button>
              <button className='bg-yellow-500 py-1 my-3 rounded hover:bg-yellow-600 min-w-[100px]' onClick={() => handleAddCart(product)}>Add Cart</button>
            </div>
            <div>
              <p className='text-slate-500 font-medium'>Description : </p>
              <p>{product.description}</p>
            </div>          
          </div>
        </div>
      ))}

      <AllProduct heading={"Related Product"}/>
    </div>
  );
};

export default Menu;
