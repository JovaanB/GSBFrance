import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import FormMedicaments from '../forms/FormMedicaments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ModalAdd = () => {
  const [state, setState] = useState({
    depotLegal: '',
    nom: '',
    codeFamille: '',
    familles: [{ FAM_CODE: '', FAM_LIBELLE: '' }],
    composition: '',
    effets: '',
    contreIndications: '',
    prixEchantillons: '',
    success: true,
    errorMessage: '',
  });

  const fetchFamilles = async () => {
    axios({
      method: 'GET',
      url: `http://localhost:4466/familles/`,
    }).then((response) => {
      setState({
        ...state,
        familles: response.data,
        codeFamille: response.data[0].FAM_CODE,
      });
    });
  };

  const toggleModal = () => {
    fetchFamilles();
    $(`#ModalAdd`).modal('toggle');
  };

  const handleUpdate = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const addMedicament = async () => {
    await fetch(`http://localhost:4466/medicaments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        MED_DEPOTLEGAL: state.depotLegal,
        MED_NOMCOMMERCIAL: state.nom,
        FAM_CODE: state.codeFamille,
        MED_COMPOSITION: state.composition,
        MED_EFFETS: state.effets,
        MED_CONTREINDIC: state.contreIndications,
        MED_PRIXECHANTILLON: state.prixEchantillons,
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
              <FormMedicaments state={state} handleUpdate={handleUpdate} />
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
                onClick={addMedicament}
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
