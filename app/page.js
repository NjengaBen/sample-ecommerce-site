// import Image from "next/image";
import {
  Cart,
  Footer,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
  Product,
} from "@/components/index";
import { client } from "@/lib/client";

export default function Home({ products, bannerData }) {
  console.log(bannerData);
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Earphones of many variations</p>
      </div>
      <div className="products-container">
        {/* {products.map((product) => product.name)} */}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const query = '*[_type=="product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type=="banner"]';
    const bannerData = await client.fetch(bannerQuery);

    console.log("Fetched products:", products);
    console.log("Fetched banner data:", bannerData);

    return {
      props: { products, bannerData },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { products: [], bannerData: [] },
    };
  }
};
