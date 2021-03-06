import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import FormPraticien from '../forms/FormPraticien';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const ModalEdit = ({ praticien }) => {
  const [state, setState] = useState({
    id: praticien.id,
    nom: praticien.nom,
    prenom: praticien.prenom,
    adresse: praticien.adresse,
    coef_notoriete: praticien.coef_notoriete,
    code_postal: praticien.code_postal,
    id_ville: praticien.id_ville,
    villes: [{ id: praticien.id_ville, nom: praticien.ville }],
    code_type_praticien: praticien.code_type_praticien,
    types_praticien: [
      {
        code: praticien.code_type_praticien,
        libelle: praticien.type_praticien,
      },
    ],
    success: true,
    errorMessage: '',
  });

  const fetchTypes = async () => {
    axios({
      method: 'GET',
      url: `http://localhost:4466/types/`,
    }).then((response) => {
      setState({
        ...state,
        types_praticien: response.data,
      });
    });
  };

  const toggleModal = () => {
    fetchTypes();
    $(`#ModalEdit${praticien.id}`).modal('toggle');
  };

  const handleUpdate = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });

    if (event.target.name === 'code_postal') {
      if (value.length === 5 && isNaN(value) === false) {
        axios({
          method: 'GET',
          url: `http://localhost:4466/villes/${state.code_postal}`,
        }).then((response) => {
          setState({
            ...state,
            villes: response.data,
            id_ville: response.data[0].id,
            code_postal: value,
          });
        });
      }
    }
  };

  const updatePraticien = async () => {
    await fetch(`http://localhost:4466/praticiens/id/${praticien.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: state.id,
        nom: state.nom,
        prenom: state.prenom,
        adresse: state.adresse,
        coef_notoriete: state.coef_notoriete,
        code_type_praticien: state.code_type_praticien,
        id_ville: state.id_ville,
      }),
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
        className="btn btn-primary"
        data-toggle="modal"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faUserEdit} />
      </button>
      <div
        className="modal fade"
        id={`ModalEdit${praticien.id}`}
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
              <FormPraticien
                hasId={true}
                state={state}
                handleUpdate={handleUpdate}
              />
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
                className="btn btn-primary"
                onClick={updatePraticien}
              >
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
