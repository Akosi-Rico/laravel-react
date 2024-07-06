import React from "react";
import PropTypes from "prop-types";

function List(props) {
    const category = props.category;
    const itemList = props.items;


    const project = {
         name: "rico",
         age: 1,
         specs: {
            ram: 12,
            size: "1234",
            os: "linux",
         }
    }

    type spec = typeof project["specs"];

    const ListItem = itemList.map((item) => (
        <li
            key={item.id}
            className="text-sm font-sans text-center text-slate-500 font-medium hover:text-slate-700">
            {item.name} &nbsp; <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <section className="mx-2 p-2">
                <div className="flex w-full pt-28">
                    <div className="bg-slate-400 border-2 shadow-sm rounded-sm w-full">
                        <h1 className="text-sm text-slate-200 text-center">
                            {category}
                        </h1>
                        <ul>{ListItem}</ul>
                    </div>
                </div>
            </section>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, category: PropTypes.number })
    ),
};

List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;
