import React, { useRef } from "react";

const Product = ({ product }) => {
  const discountPrice = (price, discount) => {
    return price - price * parseFloat(discount);
  };

  return (
    <div key={product.id} className="product">
      <div className="image">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className="info">
        <h3>{product.name}</h3>
        <span>{product.brand}</span>
        <span>{product.category}</span>
        <div className="price">
          {product.discount > 0 ? (
            <>
              <span className="price-before-discount">{product.price}</span>
              <span>
                {discountPrice(product.price, product.discount).toFixed(2)}
              </span>
              <span className="discount">
                {`-${(parseFloat(product.discount) * 100).toFixed(0)}%`}
              </span>
            </>
          ) : (
            <span>{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = ({ products }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="featured-products-container">
      <h2>Featured Products</h2>
      <div className="featured-products">
        <div className="scroll-container" ref={scrollRef}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button className="scroll-button" onClick={scrollLeft}>
        &lt; {/* Left arrow symbol */}
      </button>
      <button className="scroll-button" onClick={scrollRight}>
        &gt; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default FeaturedProducts;
