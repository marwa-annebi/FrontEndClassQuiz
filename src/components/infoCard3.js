import Card from 'react-bootstrap/Card'
import  Image from "react-bootstrap/Image"
const InfoCard3 = ({image,title,subtitle,}) => {
    return (
        <>
            <div className="card-main" style={{width:'450px',height:'250px'}}>
                <div className="" style={{display:'flex',justifyContent:'space-around'}}>
                <img src={image} className="card-container-image" style={{  margin:'0 auto'}}/>

                </div>
            <div className="card-container">
                <div className="card-container-title text-type-7">
                    {title}
                </div>
                <div className="card-container-subtitle text-type-7">
                    {subtitle}
                </div>
                <div className="" style={{display:'flex',justifyContent:'space-around'}}>
                <img src="rating.svg"  style={{  margin:'0 auto',width:'60%'}}/>

                </div>
            </div>
            </div>

        </>
    )
}
export default InfoCard3;