import React from 'react';
import { useRouter } from 'next/router';

//client side params
const params = () => {
    const route = useRouter();
    console.log(route.query);

    return (
        <div>
            Params
        </div>
    );
};

export default params;