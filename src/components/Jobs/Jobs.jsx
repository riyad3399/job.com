import JobCategory from "../JobCategory/JobCategory";

const Jobs = ({ datas }) => {
  
    const sliceData = datas.slice(0, 4);
    
  return (
    <>
      <div className="grid md:grid-cols-4 gap-10 ml-10">
      {sliceData.map((sData) => (
        <JobCategory sData={sData} key={sData.id} />
      ))}
      </div>
    </>
  );
};

export default Jobs;
