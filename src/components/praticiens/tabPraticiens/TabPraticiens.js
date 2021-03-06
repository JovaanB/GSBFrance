import React from 'react';
import ModalEdit from './modals/ModalEdit';
import ModalAdd from './modals/ModalAdd';
import ModalDelete from './modals/ModalDelete';
import Loader from '../../layouts/Loader';

const TabPraticiens = ({ praticiens, loading }) => {
  return (
    <>
      <div
        className="mt-2"
        style={{
          height: '65vh',
          overflow: 'auto',
          // width: '85vw',
          margin: '0 auto',
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Liste des <b>Praticiens</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <ModalAdd />
                </div>
              </div>
            </div>
            <table id="myTable" className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Coef notoriété</th>
                  <th scope="col">Ville</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {praticiens.map((praticien) => (
                  <tr key={praticien.id}>
                    <td>{praticien.id}</td>
                    <td>{praticien.nom}</td>
                    <td>{praticien.prenom}</td>
                    <td>{praticien.adresse}</td>
                    <td>{praticien.coef_notoriete}</td>
                    <td>{praticien.ville}</td>
                    <td>{praticien.type_praticien}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="actions buttons"
                      >
                        <ModalEdit praticien={praticien} />
                        <ModalDelete praticien={praticien} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TabPraticiens;
