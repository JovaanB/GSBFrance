import React from 'react';
import FullPageLayout from '../components/layouts/FullPageLayout';

const Home = () => {
  return (
    <FullPageLayout>
      <header class="bg-primary py-5 mb-5">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <h1 class="display-4 text-white mt-5 mb-2">GSB FRANCE</h1>
              <p class="lead mb-5 text-white-50">
                Application de gestion des praticiens et médicaments - pour
                pouvez en ajouter, modifier et supprimer - possibilité également
                de filtrer les résultats
              </p>
            </div>
          </div>
        </div>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>Qui sommes nous ?</h2>
            <hr />
            <p>
              Le laboratoire Galaxy Swiss Bourdin (GSB) est issu de la fusion
              entre le géant américain Galaxy (spécialisé dans le secteur des
              maladies virales dont le SIDA et les hépatites) et le conglomérat
              européen Swiss Bourdin (travaillant sur des médicaments plus
              conventionnels), lui même déjà union de trois petits laboratoires.
              En 2009, les deux géants pharmaceutiques ont uni leurs forces pour
              créer un leader de ce secteur industriel. L’entité Galaxy Swiss
              Bourdin Europe a établi son siège administratif dans la banlieue
              parisienne .
            </p>
            <p>
              Le siège social de la multinationale est situé à Bagneux,
              Hauts-de-seine, en France
            </p>
          </div>
          <div class="col-md-4 mb-5">
            <h2>Nous contacter</h2>
            <hr />
            <address>
              <strong>Service clientèle</strong>
              <br />
              Disponible par téléphone de 8h à 21h30
              <br />
              - du lundi au vendredi
              <br />
            </address>
            <address>
              <abbr title="Phone">Téléphone</abbr> : 01.46.32.89.54
              <br />
              <abbr title="Email">Email</abbr> :
              <a href="mailto:#"> contact@gsb.com</a>
            </address>
          </div>
        </div>
      </div>
    </FullPageLayout>
  );
};

export default Home;
