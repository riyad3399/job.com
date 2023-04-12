import React, { useEffect, useState } from "react";
import FeaturedShow from "../FeaturedShow/FeaturedShow";
import { data } from "autoprefixer";

const FeaturedLoader = ({ datas }) => {
  const allJobs = datas;
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (allJobs.length > 5) {
      const newDatas = allJobs.slice(0, 4);
      setItems(newDatas);
    }
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5  my-6">
        {items.map((data) => (
          <FeaturedShow data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mb-5">
       <p className={items.length ===4 ? 'text-center' : 'hidden'}> <button className="bg-cyan-400 px-6 py-3 rounded-md font-semibold duration-1000 hover:bg-cyan-500" onClick={() => setItems(allJobs)}>
          Show All Jobs
        </button></p>
      </div>
    </>
  );
};

export default FeaturedLoader;
