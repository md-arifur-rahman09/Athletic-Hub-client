import React, { useEffect } from 'react';

const UseTitle = (pageName) => {
    useEffect(() => {
        document.title = `Athletic Hub || ${pageName}`
    }, [pageName])
};

export default UseTitle;