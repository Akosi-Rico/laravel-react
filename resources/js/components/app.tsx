import React from "react";
import ListGroup from "./ListGroup";
import CreationForm from "./form";
import Header from "./header";
import Student from "./study-props";
import List from "./list";
import Counter from "./counter";
import Element from "./element";
import ColorPicker from "./ColorPicker";
import CounterUpdate from './counter-update';
import DreamCar from "./Updater";
import UpdateArrayList from "./UpdateArray";
import DreamCarArrayInObject from "./UpdateArrayInObject";
//  <ListGroup data={data} />
function App({ data }) {

    const fruits = [
        {
            id: 1,
            name: "Appe",
            calories: 10,
        },
        {
            id: 2,
            name: "Banna",
            calories: 20,
        },
        {
            id: 3,
            name: "PineApple",
            calories: 30,
        }
    ];

    const language = [
        {
            id: 1,
            name: "PHP",
            calories: 10,
        },
        {
            id: 2,
            name: "React",
            calories: 20,
        },
        {
            id: 3,
            name: "Vue",
            calories: 30,
        }
    ];

    return (
        <>
           <Header/>
           <DreamCarArrayInObject/>
           {/* <ColorPicker/> */}
           {/* <CounterUpdate/> */}
           {/* <DreamCar/> */}
           {/* <UpdateArrayList/> */}
           {/* <Element/> */}
           {/* <Counter/> */}
           {/* <List items={fruits} category="Fruits"/>
           <List items={language} category="Programming"/> */}
            {/* <CreationForm id={1} label="rico" age={29} data={appData}/> */}
            {/* <Student name="Rico" age={29} isStudent={true}/>
            <Student name="Danna" age={29} isStudent={false}/>
            <Student /> */}
        </>
    );
}

export default App;
