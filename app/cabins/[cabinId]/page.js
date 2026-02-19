import TextExpander from "../../_components/TextExpander";
import { getAllProducts, getProductById } from "../../_lib/data-service";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  return { title: `Cabin ${cabinId}` };
}

export async function generateStaticParams() {
  const cabins = await getAllProducts();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

const page = async ({ params }) => {
  const { cabinId } = await params;
  const cabin = await getProductById(cabinId);

  const { title, stock, discount = 30, price, description, category } = cabin;

  return (
    <div>
      <h1>
        Cabin details:
        <TextExpander>{description}</TextExpander>
      </h1>
      <h1>Title: {title}</h1>
      <h1>Stock: {stock}</h1>
      <h1>discount: {discount}</h1>
      <h1>price: {price}</h1>
      <h1>category: {category}</h1>
      <h1>image: </h1>
    </div>
  );
};

export default page;
