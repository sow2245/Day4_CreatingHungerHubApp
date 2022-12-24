import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
import CardComponent from "./CardComponent.js";

const title = "Hunger Hub";

const data=[
    {
        id:"Hung1",
        img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wya5kg7wxvbh5opfpo1m",
        namer :"Namaste",
        cusine:"South Indian, Thalis, Snacks, Biryani, Indian, Chinese, Desserts, Beverages",
        stars:4.0
    },
    {
        id:"Hung2",
        img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/udezyaggnsuz2rjx6mce",
        name:"Hotel Empire",
        cusine:"North Indian, Kebabs, Biryani",
        stars:4.1
    },
    {
        id:"Hung3",
        img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2c882d39ca1bbee94303787977a4dc09",
        name:"Truffles",
        cusine:"American, Continental, Desserts, Italian, Beverages",
        stars:4.3
    },
    {
        id:"Hung4",
        img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xujivfkukshvsbg80qt6",
        name:"McDonald's",
        cusine:"Burgers, Beverages, Cafe, Desserts",
        stars:4.3
    }
];

const HeadingComponent=()=>(
<div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
</div>
);


const CardContainer=()=>
{
    //Using JSX
    // let cardJSX=[];
    // for(let i=0; i<data.length; i++) {
    //     cardJSX.push(<CardComponent restraunt={data[i]}/>);
    // }
    // return cardJSX;

    //Using Map Type 1
    const card=data.map((resturant)=>{
        return <CardComponent restraunt={resturant} key={resturant.id}/>
    })
    return card;

    //Using Map Type 2 and also other way of writing key
    // const card=data.map((resturant,i)=>{
    //     return <CardComponent restraunt={data[i]} key={i}/>
    // })
    //return card; 
    
    //Using Map Type 3
    // const card=data.map((resturant)=> <CardComponent restraunt={resturant} key={resturant.id}/>);
    // return card;

    //Using Map Type 4
    //return data.map((resturant)=> <CardComponent restraunt={resturant} key={resturant.id}/>);
};

 //Using Map Type 5
 //const CardContainer=()=>data.map((resturant)=> <CardComponent restraunt={resturant} key={resturant.id}/>);

const BodyComponent=()=>(
    <div className="card-container">
        <CardContainer></CardContainer>
    </div>
);

//Before Card Container
// const BodyComponent=()=>(
//     <div className="card-container">
//         {/*Type 1 2 3*/}
//         <CardComponent restraunt={data[0]}/>
//         <CardComponent restraunt={data[1]}/>
//         <CardComponent restraunt={data[2]}/>
//         <CardComponent restraunt={data[3]}/> 
//         {/* //Type 4 from CardComponent 
//         <CardComponent {...data[0]}/>
//         <CardComponent {...data[1]}/>
//         <CardComponent {...data[2]}/>
//         <CardComponent {...data[3]}/> */}
//     </div>
// );



const AppLayout =()=>(
    <>
    <HeadingComponent/>
    <BodyComponent/>
    </>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);