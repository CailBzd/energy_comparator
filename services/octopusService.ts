import axios from 'axios';
import { ElectricityTariff, GasTariff, Product, StandardUnitRate } from '@/types/types';

const API_BASE_URL = 'https://api.octopus.energy/v1';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data.results; // Assurez-vous que la réponse contient bien les produits
};

export const getProductDetails = async (productCode: string): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/products/${productCode}/`);
  return response.data;
};

export const getLatestTariff = (tariffs: ElectricityTariff[] | GasTariff[]): ElectricityTariff | GasTariff | null => {
  if (tariffs.length === 0) return null;
  return tariffs.reduce((latest, tariff) => (new Date(tariff.valid_from) > new Date(latest.valid_from) ? tariff : latest));
};

export const extractTariffsByZone = (productDetails: any, simType: 'electricity' | 'gas'): { [key: string]: ElectricityTariff | GasTariff } => {
  const tariffsByZone: { [key: string]: ElectricityTariff | GasTariff } = {};
  const tariffs = simType === 'electricity' ? productDetails.single_register_electricity_tariffs : productDetails.single_register_gas_tariffs;

  for (const zone in tariffs) {
    if (tariffs[zone].direct_debit_monthly) {
      tariffsByZone[zone] = tariffs[zone].direct_debit_monthly;
    }
  }

  return tariffsByZone;
};

export const filterProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.direction === 'IMPORT' && !product.is_business);
};

export const getStandardUnitRates = async (productCode: string, tariffCode: string): Promise<StandardUnitRate[]> => {
  const response = await axios.get(`${API_BASE_URL}/products/${productCode}/electricity-tariffs/${tariffCode}/standard-unit-rates/`);
  return response.data.results;
};
