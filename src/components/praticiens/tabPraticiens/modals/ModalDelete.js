import React, { useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ModalDelete = ({ praticien }) => {
  const [state] = useState({
    id: praticien.id,
    nom: praticien.nom,
    prenom: praticien.prenom,
  });

  const toggleModal = () => {
    $(`#ModalDelete${praticien.id}`).modal('toggle');
  };

  const deletePraticien = async () => {
    await fetch(`http://localhost:4466/praticiens/id/${state.id}`, {
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
        id={`ModalDelete${praticien.id}`}
        role="dialog"
        aria-labelledby={`ModalDelete${praticien.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id={`ModalDelete${praticien.id}`}>
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
              Etes vous sûr de vouloir supprimer{' '}
              <b>
                {state.nom} {state.prenom} ?
              </b>
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
                onClick={deletePraticien}
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
