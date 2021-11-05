import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Container } from 'react-bootstrap';

const Annonce = () => {
  const [annonceList, setannonceList] = useState([]);

  const loadAnnonces = async () => {
    const result = await axios.get("http://localhost:3000/UserDB/annonces/Read");
    setannonceList(result.data.reverse());
  };
  useEffect(
    () => {
      loadAnnonces();
    },
    [],
    [annonceList]
  );

  return (
    <Container>
      {annonceList.map((annonce, id) => (
        <tr key={id}>
          {/* <td>
                  <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox3" name="options[]" value="1">
                      <label for="checkbox3"></label></span>
                        </td> */}
          <h1 >{annonce.titre}</h1>
          <p>{annonce.description}</p>
        
          <p>
            {" "}
            {
              (annonce.dateDemarrage = moment(annonce?.dateDemarrage).format(
                "YYYY / MM / DD"
              ))
            }
          </p>
        </tr>
      ))}
    </Container>
  );
};
export default Annonce;
