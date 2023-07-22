import Link from "next/link";

const Product = () => {
  return (
    <div>
      <Link href="/">
        <div className="product-card">
          {/* <img 
        src={urlFor(image && image[0])}
        width={250}
        height={250}
        className="product-image"
      /> */}
          <p className="product-name">name</p>
          <p className="product-price">$20</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
