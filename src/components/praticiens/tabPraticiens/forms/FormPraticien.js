import React from 'react';

const FormPraticien = ({ state, handleUpdate }) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            readOnly
            value={state.id}
            onChange={handleUpdate}
          />
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
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              className="form-control"
              name="prenom"
              value={state.prenom}
              onChange={handleUpdate}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="adresse">Adresse</label>
          <input
            type="text"
            className="form-control"
            name="adresse"
            value={state.adresse}
            onChange={handleUpdate}
          />
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="code_postal">Code postal</label>
            <input
              type="text"
              className="form-control"
              name="code_postal"
              value={state.code_postal}
              onChange={handleUpdate}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="ville">Ville</label>
            <select
              className="form-control"
              name="id_ville"
              value={state.id_ville}
              onChange={handleUpdate}
            >
              {state.villes.map((ville, idx) => (
                <option key={ville.id} value={ville.id}>
                  {ville.nom}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Coef notoriété</label>
          <input
            type="text"
            className="form-control"
            name="coef_notoriete"
            value={state.coef_notoriete}
            onChange={handleUpdate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code_type_praticien">Type</label>
          <select
            className="form-control"
            name="code_type_praticien"
            defaultValue={state.code_type_praticien}
            onChange={handleUpdate}
          >
            {state.types_praticien.map((type) => (
              <option key={type.libelle} value={type.code}>
                {type.libelle}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormPraticien;
