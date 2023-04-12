import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fackDB';
import AppliedJobShow from './AppliedJobShow/AppliedJobShow';

const AppliedJob = () => {
    const allDatas = useLoaderData();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const savedJob = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedJobs = allDatas.find(dt => dt.id === id)
            if (addedJobs) {
                const quantity = storedCart[id]
                addedJobs.quantity = quantity;
                savedJob.push(addedJobs)
            }
        }
        setJobs(savedJob)
   }, [allDatas])
  

    
    return (
        <div className='grid md:grid-cols-1 my-32 gap-10'>
            {
                jobs.map(job => <AppliedJobShow job={ job} key={job.id} />)
           }
        </div>
    );
};

export default AppliedJob;