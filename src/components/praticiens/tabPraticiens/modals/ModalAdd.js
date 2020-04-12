import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import FormPraticien from '../forms/FormPraticien';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ModalAdd = () => {
  const [state, setState] = useState({
    id: '',
    nom: '',
    prenom: '',
    adresse: '',
    coef_notoriete: '',
    code_postal: '',
    id_ville: '',
    villes: [{ id: '', nom: '' }],
    code_type_praticien: '',
    types_praticien: [
      {
        code: '',
        libelle: '',
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
        code_type_praticien: response.data[0].code,
      });
    });
  };

  const toggleModal = () => {
    fetchTypes();
    $(`#ModalAdd`).modal('toggle');
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

  const addPraticien = async () => {
    await fetch(`http://localhost:4466/praticiens`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
        className="btn btn-outline-success my-2 add-new"
        data-toggle="modal"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div
        className="modal fade"
        id={`ModalAdd`}
        role="dialog"
        aria-labelledby={`ModalAdd`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id={`ModalAdd`}>
                Ajouter
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
                className="btn btn-success"
                onClick={addPraticien}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
