import React from 'react';
import { Collapse } from 'antd';
import { ElectricityTariff, GasTariff, Product } from '@/types/types';
import OfferDetail from './OfferDetails';

const { Panel } = Collapse;

interface OffersListProps {
  offers: { product: Product; tariffsByZone: { [key: string]: ElectricityTariff | GasTariff }, tariffs_active_at: string }[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <Collapse accordion>
      {offers.map((offer, index) => (
        <Panel header={offer.product.full_name} key={index}>
          <OfferDetail offer={offer} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default OffersList;
