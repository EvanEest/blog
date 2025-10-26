'use client' // 错误组件必须是客户端组件

import React from "react";

async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
        message: 'hello dashboard',
    }
}

const Page =  () => {
    const [error, setError] = React.useState(false);

    const handleGetError = () => {
        setError(true);
    };

    return (
        <div>
            {error ? Error() : <button onClick={handleGetError}>Get Error</button>}
        </div>
    );
};

export default Page;