import React from 'react';


const ReviewItem = ({reviewDetail})=>{
    const {img,name,description}=reviewDetail
    console.log("reviewDetail"+reviewDetail)
    return(
<div className="item" >
<div className="shadow-effect">
<div className="img-center"style={{display:'flex',justifyContent:'space-around'}}>
    <img src={img} className="card-container-image" style={{  margin:'0 auto',borderRadius:100}}/>
 </div>
            <div className="card-container" style={{width:800}}>
                
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