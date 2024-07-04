import React from "react";

export default function PageSection() {



    const handlePanel = () => {
        let content = document.getElementById('collapse-content');

        if (content.classList.contains('w-1/4')) {
            content.classList.remove('w-1/4');
         //   icon.classList.remove('rotate-180');
          } else {
            content.classList.add('w-1/4');
            //icon.classList.add('rotate-180');
          }
    }

    return (<>
        <section className="w-auto border border-solid border-slate-800">
            <div className="p-32 w-1/4 max-h-0 overflow-hidden transition duration-75 ease-in-out m-2 bg-red-200" id="collapse-content">
                <button type="button" className="bg-blue-700 font-semibold font-sans text-center border-none w-28 text-white py-2 px-4 mx-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800  focus:ring-opacity-50" onClick={() => handlePanel()} >START</button>
            </div>
        </section>
    </>);
}