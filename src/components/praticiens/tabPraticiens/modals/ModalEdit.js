import React, { useState } from 'react';
import $ from 'jquery';

const ModalEdit = ({ praticien }) => {
  const [state, setState] = useState({
    id: praticien.id,
    nom: praticien.nom,
    prenom: praticien.prenom,
    adresse: praticien.adresse,
    coef_notoriete: praticien.coef_notoriete,
    success: true,
    errorMessage: '',
  });

  const toggleModal = () => {
    $(`#Modal${praticien.id}`).modal('toggle');
  };

  const handleUpdate = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        onClick={toggleModal}
      >
        Éditer
      </button>
      <div
        className="modal fade"
        id={`Modal${praticien.id}`}
        role="dialog"
        aria-labelledby={`Modal${praticien.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id={`Modal${praticien.id}`}>
                Éditer
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    id="id"
                    readOnly
                    value={state.id}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={state.nom}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    name="prenom"
                    value={state.prenom}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adresse">Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adresse"
                    name="adresse"
                    value={state.adresse}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Coef notoriété</label>
                  <input
                    type="text"
                    className="form-control"
                    id="coef_notoriete"
                    name="coef_notoriete"
                    value={state.coef_notoriete}
                    onChange={handleUpdate}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
              <button type="button" className="btn btn-primary">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
