import React from 'react';

const FormMedicament = ({ state, handleUpdate }) => {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="id">Dépôt légal</label>
            <input
              type="text"
              className="form-control"
              name="depotLegal"
              value={state.depotLegal}
              onChange={handleUpdate}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="prenom">Prix échantillons</label>
            <input
              type="text"
              className="form-control"
              name="prixEchantillons"
              value={state.prixEchantillons}
              onChange={handleUpdate}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              value={state.nom}
              onChange={handleUpdate}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="prenom">Famille</label>
            <select
              className="form-control"
              name="codeFamille"
              value={state.codeFamille}
              onChange={handleUpdate}
            >
              {state.familles.map((famille, idx) => (
                <option key={famille.FAM_CODE} value={famille.FAM_CODE}>
                  {famille.FAM_LIBELLE}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="adresse">Composition</label>
          <input
            type="text"
            className="form-control"
            name="composition"
            value={state.composition}
            onChange={handleUpdate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code_postal">Effets</label>
          <textarea
            type="text"
            className="form-control"
            name="effets"
            rows="3"
            value={state.effets}
            onChange={handleUpdate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ville">Contre indications</label>
          <textarea
            type="text"
            className="form-control"
            name="contreIndications"
            rows="3"
            value={state.contreIndications}
            onChange={handleUpdate}
          />
        </div>
      </form>
    </div>
  );
};

export default FormMedicament;
