import React from 'react';


const ReviewItem = ({reviewDetail})=>{
    const {img,name,description}=reviewDetail
    console.log("reviewDetail"+reviewDetail)
    return(
<div className="item"  >
<div className="shadow-effect">

            <div className="card-container" >
            <div className="card-container-image" >
    <img src={img} style={{   height: "inherit",width: "inherit",display: "block"}} />
 </div>
                <div className="card-container-name text-type-7">
                    {name}
                </div>
                <div className="card-container-description text-type-7">
                    {description}
                </div>
                <div className="" style={{display:'flex',justifyContent:'space-around'}}>
                <img src="rating.svg"  style={{  margin:'0 auto',width:'50%',marginTop:"30px",textAlign:"center"}}/>

                </div>
            </div>


</div>
</div>
    );
}
export default ReviewItem;