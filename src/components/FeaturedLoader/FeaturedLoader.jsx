import React from 'react';
import FeaturedShow from '../FeaturedShow/FeaturedShow';

const FeaturedLoader = ({datas}) => {
    return (
        <div className='grid md:grid-cols-2 gap-5 items-center justify-center'>
            {
                datas.map(data => <FeaturedShow data={ data} key={data.id} />)
            }
        </div>
    );
};

export default FeaturedLoader;