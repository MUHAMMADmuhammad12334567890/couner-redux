import React from 'react';
import { useSelector } from 'react-redux';

const Counts = () => {
    const count = useSelector((state) => state.count )
    console.log(count)
    return (
        <div className='counter'>
            {count}
        </div>
    );
};

export default Counts;