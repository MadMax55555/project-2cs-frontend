import React from 'react';

const SchoolCreation = () => {
  return (

    <div className="py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-[80%] lg:w-8/12">
        <h1 className="text-center text-main-blue font-bold text-5xl mb-8">School Creation</h1>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-main-blue text-7xl font-bold">1969</h2>
            <p className="text-main-black text-lg font-semibold">
              Création de l’école sous le nom de Centre d’Etudes et de Recherche en Informatique (CERI)
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-main-black text-lg font-semibold">
              Rattachée au ministère de l’Enseignement Supérieur sous le nom de l’Institut National de Formation en Informatique (INI)
            </p>
            <h2 className="text-main-blue text-7xl font-bold text-end">1983</h2>
          </div>
          <div className="flex items-center space-x-4">
            <h2 className="text-main-blue text-7xl font-bold">2008</h2>
            <p className="text-main-black text-lg font-semibold">
              Transformée en école nationale supérieure par le décret exécutif n° 08-220 du 14 juillet 2008, sous le nom ESI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCreation;
