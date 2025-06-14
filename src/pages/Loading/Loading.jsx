import React from 'react';

const Loading = () => {
    return (
        <div className='text-center my-5'>
           <span className="loading loading-ring loading-xl"></span>
           <span className="loading loading-ring loading-xl"></span>
           <span className="loading loading-ring loading-xl"></span>
           <span className="loading loading-ring loading-xl"></span> 
        </div>
    );
};

export default Loading;