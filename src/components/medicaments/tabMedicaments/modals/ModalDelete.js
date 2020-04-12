import React, { useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ModalDelete = ({ medicament }) => {
  const [state] = useState({
    depotLegal: medicament.depotLegal,
    nom: medicament.nom,
  });

  const toggleModal = () => {
    $(`#ModalDelete${medicament.depotLegal}`).modal('toggle');
  };

  const deleteMedicament = async () => {
    await fetch(`http://localhost:4466/medicaments/id/${state.depotLegal}`, {
      method: 'DELETE',
    })
      .then((res) => {
        toggleModal();
      })
      .catch((err) => {
        console.log('FETCH ERROR: ', err);
      });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <div
        className="modal fade"
        id={`ModalDelete${medicament.depotLegal}`}
        role="dialog"
        aria-labelledby={`ModalDelete${medicament.depotLegal}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5
                className="modal-title"
                id={`ModalDelete${medicament.depotLegal}`}
              >
                Supprimer
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
              Etes vous sûr de vouloir supprimer <b>{state.nom} ?</b>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteMedicament}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
