import { productData } from "../../../data";
import Card from "../../../components/Card/Card"
import ProductPage from "../../../components/ProductPage/ProductPage";

const Shirt = ({ shirt }) => {
  console.log(shirt);
  return (
    <ProductPage name={shirt.name} image={null}/>

  )
};

export const getStaticPaths = async () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const shirts = productData.shirts;
    const paths = shirts.map((shirt) => {
      return {
        params: { id: shirt._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } else {
    const res = await fetch(`caudills-crafts.vercel.app/api/shirts`);
    const shirts = await res.json();

    const paths = shirts.map((shirt) => {
      return {
        params: { id: shirt._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  }
};
export const getStaticProps = async (context) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const id = context.params.id;
    const shirts = productData.shirts;
    const data = shirts.find((s) => s._id.toString() === id);

    return {
      props: {
        shirt: data,
      },
    };
  } else {
    const id = context.params.id;
    const res = await fetch(`${server}/api/shirts/${id}`);
    const shirt = await res.json();

    return {
      props: { shirt: shirt },
    };
  }
};
export default Shirt;
