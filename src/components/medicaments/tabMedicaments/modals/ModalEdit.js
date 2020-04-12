import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import FormMedicament from '../forms/FormMedicaments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const ModalEdit = ({ medicament }) => {
  const [state, setState] = useState({
    depotLegal: medicament.depotLegal,
    nom: medicament.nom,
    codeFamille: medicament.codeFamille,
    familles: [
      { FAM_CODE: medicament.codeFamille, FAM_LIBELLE: medicament.famille },
    ],
    composition: medicament.composition,
    effets: medicament.effets,
    contreIndications: medicament.contreIndications,
    prixEchantillons: medicament.prixEchantillons,
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
    $(`#ModalEdit${medicament.depotLegal}`).modal('toggle');
  };

  const handleUpdate = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const updateMedicament = async () => {
    await fetch(
      `http://localhost:4466/medicaments/id/${medicament.depotLegal}`,
      {
        method: 'PUT',
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
      }
    )
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
        id={`ModalEdit${medicament.depotLegal}`}
        role="dialog"
        aria-labelledby={`Modal${medicament.depotLegal}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id={`Modal${medicament.depotLegal}`}>
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
              <FormMedicament state={state} handleUpdate={handleUpdate} />
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
                onClick={updateMedicament}
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
