import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useEffect } from "react"
import React from "react"
import {useState} from "react"
const  InfoCard = ({mainImage,direction,number,title,subtitle,confirmedsign,minister}) =>
{
    const [rowStyle,setRowStyle]=useState({})
    useEffect(()=>{
        console.log(mainImage);
        if (direction === 'left')
            setRowStyle({flexDirection:'row-reverse'})
    },[])



    return (
        <div style={{marginTop:50}}>
        <Row style={{flexDirection:direction=='right'?'row-reverse':'row',marginRight:direction=='right'?-80:50}}>

            <Col style={{marginRight:direction=='right'?150:1,float:direction}} >
            <img src={mainImage} />
            </Col>
            <Col style={{marginLeft:direction=='left'?1:70,marginTop:20}}>
            <Row style={rowStyle}>
               <div className="text-type-2">{number}</div>
            </Row>
            <Row style={rowStyle}>
            <div className="text-type-3">{title}</div>
            </Row>
            <Row style={rowStyle}>
            <div className="text-type-4">{subtitle}</div>
            <Row><div className="text-type-4"><img src={confirmedsign} style={{width:200,marginLeft:50}}></img>
            <img src={minister} style={{width:150}}></img></div>
            </Row>
            </Row>
            </Col>
        </Row>
        </div>
    )
}
export default InfoCard;