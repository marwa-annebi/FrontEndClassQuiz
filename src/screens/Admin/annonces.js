import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
import moment from "moment";
import { Link } from "react-router-dom";
const Annonces = () => {
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

  const deleteAnnonce = async (id) => {
    await axios.delete(`http://localhost:3000/UserDB/annonces/delete/${id}`);
    loadAnnonces();
  };

  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-5">
                  <h2>
                    Crud <b>Annonces</b>
                  </h2>
                </div>
                <div class="col-sm-7">
                  <a href="/CrudAnnonce/AddAnnonce" class="btn btn-secondary">
                    {" "}
                    <i class="material-icons">&#xE147;</i>{" "}
                    <span>Add New Annonce</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th> Titre</th>
                  <th> Description</th>
                  <th>Date</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {annonceList.map((annonce, id) => (
                  <tr key={id}>
                    {/* <td>
                    <span class="custom-checkbox">
                        <input type="checkbox" id="checkbox3" name="options[]" value="1">
                        <label for="checkbox3"></label></span>
                          </td> */}
                    <td>{id}</td>
                    <td>{annonce.titre}</td>
                    <td>{annonce.description}</td>
                    <td>
                      {
                        (annonce.Date = moment(annonce?.Date).format(
                          "YYYY / MM / DD"
                        ))
                      }
                    </td>
                    <td>
                      <Link
                        class="edit"
                        data-toggle="modal"
                        to={`/CrudAnnonce/edit/${annonce._id}`}
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </Link>
                      <Link
                  
                        onClick={() => deleteAnnonce(annonce._id)}
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Annonces;
