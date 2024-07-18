import React from "react";

export default function PageSection() {



    const handlePanel = () => {
        let content = document.getElementById('collapse-content');
        let icon = document.querySelector('svg');

        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            icon.classList.remove('rotate-120');
          } else {
            content.classList.add('expanded');
            icon.classList.add('rotate-120');
          }
    }

    return (<>
        <section  className="h-svh py-32 m-0">
            <div className="flex justify-start">
                <div className="flex flex-row justify-start items-start h-svh collapse-content border border-solid border-slate-800" id="collapse-content">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"  name="menu" onClick={() => handlePanel()} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <div className="flex flex-row">
                       <div>a</div>
                       <div>a</div>
                    </div>
                </div>
               <div className="flex justify-start items-start">
                 b
               </div>
            </div>
        </section>
    </>);
}