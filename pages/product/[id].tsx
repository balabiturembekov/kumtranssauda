import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { ProductsType } from "../index";

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const { id } = context.query;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: { product: data },
  };
};

type ProductProps = {
  product: ProductsType;
};

const Product: FC<ProductProps> = ({ product }) => {
  const { title, description, price, image } = product;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <img src={image} width="60" height="60" alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <Link href="/">👈 back to home</Link>
    </>
  );
};

export default Product;
