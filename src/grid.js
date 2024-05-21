import React, { useEffect, useState } from 'react';
import Card from './card';

const Grid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Define fetchProducts outside any function or hook
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          input: { page: currentPage, pageSize: 10, filters: [], id: "#HomeHunts", entity: "vibe" }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.data && data.data.getListingProducts && data.data.getListingProducts.products) {
        setProducts(prevProducts => [...prevProducts, ...data.data.getListingProducts.products]);
        setHasMore(data.data.getListingProducts.products.length === 10); // Check if there are more pages
        setCurrentPage(currentPage + 1); // Update current page
      } else {
        throw new Error('Data format error');
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching the products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Initial fetch
  }, []); // Empty dependency array

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight - 100 && hasMore) {
      fetchProducts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div className='mt-8 p-2 bg-white w-full absolute top-80 bottom-0 z-0'>
      <div className="text-gray-500 italic mb-1 mx-1 text-sm">300 Products</div>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="grid grid-cols-2 gap-2 relative z-10">
          {products.map(product => (
            <Card key={product.id} product={product} /> // Use product.id as key
          ))}
          {hasMore && <div className="loading">Loading...</div>}
        </div>
      )}
    </div>
  );
}

export default Grid;
