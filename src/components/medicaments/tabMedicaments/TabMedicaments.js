import React from 'react';
import ModalEdit from './modals/ModalEdit';
import ModalAdd from './modals/ModalAdd';
import ModalDelete from './modals/ModalDelete';
import Loader from '../../layouts/Loader';

const TabMedicaments = ({ medicaments, loading }) => {
  return (
    <>
      <div
        className="mt-2"
        style={{
          height: '65vh',
          overflow: 'auto',
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
                    Liste des <b>Médicaments</b>
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
                  <th scope="col">Famille</th>
                  <th scope="col">Composition</th>
                  <th scope="col">Effets</th>
                  <th scope="col">Contre indication</th>
                  <th scope="col">Prix échantillon</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicaments.map((medicament) => (
                  <tr key={medicament.depotLegal}>
                    <td>{medicament.depotLegal}</td>
                    <td>{medicament.nom}</td>
                    <td>{medicament.famille}</td>
                    <td>{medicament.composition}</td>
                    <td>{medicament.effets}</td>
                    <td>{medicament.contreIndications}</td>
                    <td>
                      {medicament.prixEchantillons !== null
                        ? medicament.prixEchantillons
                        : 'Non renseigné'}
                    </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="actions buttons"
                      >
                        <ModalEdit medicament={medicament} />
                        <ModalDelete medicament={medicament} />
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

export default TabMedicaments;
