import React from "react";

interface Props {
    items: {
        id: [];
        label: string[];
    }
}

function App({ items }) {
    return (
        <>
            <h1>{ items.status }</h1>
        </>
    );
}

// const App = (props: Props) => {
//     return (
//         <>
//             <h1 className="text-3xl font-bold underline text-red-600">
//                 Hello world!
//             </h1>
//         </>
//     );
// };

export default App;
