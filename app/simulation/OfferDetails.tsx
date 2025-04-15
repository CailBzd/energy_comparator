import React from 'react';
import { ElectricityTariff, GasTariff, Product } from '@/types/types';

interface OfferDetailProps {
  offer: { product: Product; tariffsByZone: { [key: string]: ElectricityTariff | GasTariff }, tariffs_active_at: string, is_variable: boolean, is_green: boolean };
}

const OfferDetail: React.FC<OfferDetailProps> = ({ offer }) => {
  const { product, tariffsByZone, tariffs_active_at, is_variable, is_green } = offer;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{product.full_name}</h2>
      <p>Code: {product.code}</p>
      <p>Tarifs actifs depuis: {new Date(tariffs_active_at).toLocaleString()}</p>
      <p>Variable: {is_variable ? 'Oui' : 'Non'}</p>
      <p>Vert: {is_green ? 'Oui' : 'Non'}</p>
      <h3 className="text-lg font-semibold mt-4">Tarifs par zone:</h3>
      <ul>
        {Object.entries(tariffsByZone).map(([zone, tariff]) => (
          <li key={zone} className="mt-2">
            <strong>Zone {zone}:</strong>
            <p>Code: {tariff.code}</p>
            <p>Tarif HT: {tariff.standard_unit_rate_exc_vat} €/kWh</p>
            <p>Tarif TTC: {tariff.standard_unit_rate_inc_vat} €/kWh</p>
            <p>Abonnement HT: {tariff.standing_charge_exc_vat} €</p>
            <p>Abonnement TTC: {tariff.standing_charge_inc_vat} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferDetail;
