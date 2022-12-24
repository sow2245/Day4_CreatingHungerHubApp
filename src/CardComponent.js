const CardComponent=(props)=>{
    return (
        <div id="card" className="cardClass">
            <img src={props.restraunt.img}/>
            <h2>{props.restraunt.name}</h2>
            <h3>{props.restraunt.cusine}</h3>
            <h4>{props.restraunt.stars} stars</h4>
        </div>
    )
};

//Different types of Wrtitting
//Type 1
// const CardComponent=(props)=>{
//     const restraunt=props.restraunt;
//     return (
//         <div id="card" className="cardClass">
//             <img src={restraunt.img}/>
//             <h2>{restraunt.name}</h2>
//             <h3>{restraunt.cusine}</h3>
//             <h4>{restraunt.stars} stars</h4>
//         </div>
//     )
// };

// //Type 2
// const CardComponent=(props)=>{
//     const {img,name,cusine,stars}=props.restraunt;
//     return (
//         <div id="card" className="cardClass">
//             <img src={img}/>
//             <h2>{name}</h2>
//             <h3>{cusine}</h3>
//             <h4>{stars} stars</h4>
//         </div>
//     )
// };

// //Type 3
// const CardComponent=({restraunt})=>{
//     return (
//         <div id="card" className="cardClass">
//             <img src={restraunt.img}/>
//             <h2>{restraunt.name}</h2>
//             <h3>{restraunt.cusine}</h3>
//             <h4>{restraunt.stars} stars</h4>
//         </div>
//     )
// };

// //Type 4
// const CardComponent=({img,name,cusine,stars})=>{
//     return (
//         <div id="card" className="cardClass">
//             <img src={img}/>
//             <h2>{name}</h2>
//             <h3>{cusine}</h3>
//             <h4>{stars} stars</h4>
//         </div>
//     )
// };

export default CardComponent;