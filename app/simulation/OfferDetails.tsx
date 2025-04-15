import React from 'react';
import { Collapse } from 'antd';
import { ElectricityTariff, GasTariff, Product, StandardUnitRate } from '@/types/types';

const { Panel } = Collapse;

interface OfferDetailProps {
  offer: {
    product: Product;
    tariffsByZone: { [key: string]: ElectricityTariff | GasTariff };
    tariffs_active_at: string;
    available_to: string;
    is_variable: boolean;
    is_green: boolean;
    is_prepay: boolean;
    standardUnitRates: { [key: string]: StandardUnitRate[] };
  };
}

const OfferDetail: React.FC<OfferDetailProps> = ({ offer }) => {
  const { product, tariffsByZone, tariffs_active_at, available_to, is_variable, is_green, is_prepay, standardUnitRates } = offer;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{product.full_name}</h2>
      <p>Code: {product.code}</p>
      <p>Tarifs actifs depuis: {new Date(tariffs_active_at).toLocaleString()}</p>
      <p>Tarifs actifs jusqu'au: {new Date(available_to).toLocaleString()}</p>
      <p>Variable: {is_variable ? 'Oui' : 'Non'}</p>
      <p>Vert: {is_green ? 'Oui' : 'Non'}</p>
      <p>Prépayé: {is_prepay ? 'Oui' : 'Non'}</p>
      <h3 className="text-lg font-semibold mt-4">Tarifs par zone:</h3>
      <Collapse accordion>
        {Object.entries(tariffsByZone).map(([zone, tariff]) => (
          <Panel header={`Zone ${zone}`} key={zone}>
            <p>Code: {tariff.code}</p>
            <p>Tarif HT: {tariff.standard_unit_rate_exc_vat} €/kWh</p>
            <p>Tarif TTC: {tariff.standard_unit_rate_inc_vat} €/kWh</p>
            <p>Abonnement HT: {tariff.standing_charge_exc_vat} €</p>
            <p>Abonnement TTC: {tariff.standing_charge_inc_vat} €</p>
            <h4 className="text-md font-semibold mt-4">Tarifs par heure:</h4>
            <Collapse accordion>
              {standardUnitRates[zone].map((rate, index) => (
                <Panel header={`Tarif ${index + 1}`} key={index}>
                  <p>Valeur HT: {rate.value_exc_vat} €/kWh</p>
                  <p>Valeur TTC: {rate.value_inc_vat} €/kWh</p>
                  <p>Valide du: {new Date(rate.valid_from).toLocaleString()}</p>
                  <p>Valide jusqu'au: {new Date(rate.valid_to).toLocaleString()}</p>
                </Panel>
              ))}
            </Collapse>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default OfferDetail;
