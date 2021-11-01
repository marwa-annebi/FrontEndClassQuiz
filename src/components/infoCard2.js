import Card from 'react-bootstrap/Card'
import '../style/content.css'
const InfoCard2 =  ({image,text}) => {
    return (
        <div>
<Card style={{ width: '13rem'/* ,height:'16rem' */}} className="card-bg">
  <Card.Img variant="top" src={image} style={{padding:35}} />
  <Card.Body>
    <Card.Title className="text-type-6">{text}</Card.Title>
   
  </Card.Body>

</Card>
        </div>
    )
}
export default InfoCard2;