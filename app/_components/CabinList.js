import CabinCard from "@/app/_components/CabinCard";
import { getAllProducts } from "../_lib/data-service";

const CabinList = async ({ filter }) => {
  const cabins = await getAllProducts();

  if (!cabins.length) return null;

  let displayedCabins = cabins;

  if (filter !== "all") {
    displayedCabins = cabins.filter((cabin) => cabin.category === filter);
  }
  
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
