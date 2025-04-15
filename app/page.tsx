'use client';

import { useState } from 'react';
import { getProducts, getProductDetails, extractTariffsByZone, filterProducts } from '../services/octopusService';
import { ElectricityTariff, GasTariff, Product } from '@/types/types';
import 'antd/dist/reset.css'; // Importez les styles d'Ant Design
import ConsumptionForm from './simulation/ConsumptionForm';
import OffersList from './simulation/OffersList';

const Home: React.FC = () => {
  const [simulationType, setSimulationType] = useState<'electricity' | 'gas' | null>(null);
  const [consumption, setConsumption] = useState<number | null>(null);
  const [offers, setOffers] = useState<{ product: Product; tariffsByZone: { [key: string]: ElectricityTariff | GasTariff }, tariffs_active_at: string, is_variable: boolean, is_green: boolean }[]>([]);

  const handleSimulationTypeSelect = (type: 'electricity' | 'gas') => {
    setSimulationType(type);
    setConsumption(null);
    setOffers([]);
  };

  const handleConsumptionSubmit = async (simType: 'electricity' | 'gas', consumption: number) => {
    setConsumption(consumption);
    let products = await getProducts();
    products = filterProducts(products);

    const offersPromises = products.map(async (product) => {
      const productDetails = await getProductDetails(product.code);
      const tariffsByZone = extractTariffsByZone(productDetails, simType);
      return {
        product,
        tariffsByZone,
        tariffs_active_at: productDetails.tariffs_active_at,
        is_variable: productDetails.is_variable,
        is_green: productDetails.is_green
      };
    });
    let offers = await Promise.all(offersPromises);

    // Trier les offres par tariffs_active_at décroissant
    offers.sort((a, b) => new Date(b.tariffs_active_at).getTime() - new Date(a.tariffs_active_at).getTime());

    setOffers(offers);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-700">Comparateur d'offres d'énergie</h1>
      {simulationType === null ? (
        <div>
          <button
            onClick={() => handleSimulationTypeSelect('electricity')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Simulation Électricité
          </button>
          <button
            onClick={() => handleSimulationTypeSelect('gas')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simulation Gaz
          </button>
        </div>
      ) : consumption === null ? (
        <ConsumptionForm onSubmit={handleConsumptionSubmit} simulationType={simulationType} />
      ) : (
        <OffersList offers={offers} />
      )}
      <img src="/images/octopus.jpg" alt="Octopus Logo" className="mt-8" />
    </div>
  );
};

export default Home;
