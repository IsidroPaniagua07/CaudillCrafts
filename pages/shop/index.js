import Product from "../../components/Card/Card";
import data from "../../data";
import { server } from "../../config";
import Link from "next/link";
import Card from "../../components/Card/Card";
import { connectToDatabase } from "../../utils/mongodb";

const index = ({ categories, list }) => {
  console.log(list)
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-fit h-1/5 flex items-center justify-center font-RobotoMono font-bold text-7xl">
        <div className="flex h-fit w-fit bg-gray-100 rounded-2xl shadow justify-center items-center">
          Shop
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full font-Roboto text-xl">
        <div className="flex flex-row h-fit w-3/4 text-left justify-center items-center gap-2">
          {/* {categories.map((category) => (
            <div key={category.name}>
              <Card
                name={category.name}
                url={`/shop/${category.name.toLowerCase()}`}
              />
            </div>

          ))} */}
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("Products")
    .find({})
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}


// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/categories`);
//   const categories = await res.json();

//   return {
//     props: {
//       categories,
//     },
//   };
// };

export default index;
