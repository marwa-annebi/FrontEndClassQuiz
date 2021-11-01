import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useEffect } from "react"
import React from "react"
const  ImageHolder = ({images,mainImage,direction}) =>
{
    useEffect(()=>{
        console.log(mainImage);
    },[])


    const GenerateImages = ({from,to,index}) => {
        let currentX= 0;
        let currentY= 0;
        let pos = [];
        console.log(images)
        for( let i=from;i<to;i++)
        {
            let x = Math.round(Math.random(30)*75)+30 * index;
            let y = Math.round(35 + Math.random(15)*50);
            currentX=x;
            currentY+=y;
            pos.push({x:currentX,y:currentY,img:images[i]})
        }
        console.log(pos)
       return  pos.map((v,k)=>{
            let style = {
                position:'absolute',
                left:v.x,
                top:v.y,
                height:'35px',
                width:'35px'
            }
            return (     
                 <img key={k} src={v.img} style={style}></img>
            )
        })

    }
    return (
        <div style={{width:'50%',float:direction}}>
        <Row>
            <Col style={{position:'relative'}}>
            <GenerateImages from={0} to={images.length/2} index ={1}/>
            </Col>
            <Col>
            <img src={mainImage} style={{ height:375,width:300,float:'right'}}></img>
            </Col>
            <Col style={{position:'relative'}}>
            <GenerateImages from={images.length/2 +1} to={images.length} index={-1}/>

            </Col>
        </Row>
        </div>
    )
}
export default ImageHolder;