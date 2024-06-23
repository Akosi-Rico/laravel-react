import React from "react";
import PropTypes from "prop-types";
function Student(props) {
    return (
        <>
            <section className="mx-2 p-2">
                <div className="flex w-full pt-28">
                    <div className="border-2 p-4 m-2 border-slate-200 inline-block">
                        <p className="text-sm font-sans text-slate-600">
                            Name: {props.name}
                        </p>
                        <p className="text-sm font-sans text-slate-600">
                            Age:{props.age}
                        </p>
                        <p className="text-sm font-sans text-slate-600">
                            Student: {props.isStudent ? "Yes" : "No"}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student;
