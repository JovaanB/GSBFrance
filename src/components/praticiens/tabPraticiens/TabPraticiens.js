import React from 'react';
import ModalEdit from './modals/ModalEdit';

const Praticiens = ({ praticiens, loading }) => {
  if (loading) {
    return <h2>Chargement...</h2>;
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="text-primary mb-3">Praticiens</h1>
        <span className="btn btn-rounded btn-outline-success mr-3 m-3">
          Ajouter
        </span>
      </div>
      <div
        className="text-center"
        style={{
          height: '75vh',
          overflow: 'auto',
          width: '95vw',
          margin: '0 auto',
        }}
      >
        <table id="myTable" className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Adresse</th>
              <th scope="col">Coef notoriété</th>
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
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="actions buttons"
                  >
                    <ModalEdit praticien={praticien} />
                    <span className="btn btn-rounded btn-outline-danger">
                      Supprimer
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Praticiens;
