// types/types.ts
export interface Product {
  direction: string;
  code: string;
  full_name: string;
  display_name: string;
  description: string;
  is_variable: boolean;
  is_green: boolean;
  is_tracker: boolean;
  is_prepay: boolean;
  is_business: boolean;
  is_restricted: boolean;
  term: number;
  available_from: string;
  available_to: string | null;
  brand: string;
  links: Array<{ href: string; method: string; rel: string }>;
  single_register_electricity_tariffs?: {
    _A?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
    _B?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
  };
  dual_register_electricity_tariffs?: {
    _A?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
    _B?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
  };
  single_register_gas_tariffs?: {
    _A?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
    _B?: {
      direct_debit_monthly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
      direct_debit_quarterly?: {
        code: string;
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: Array<{ href: string; method: string; rel: string }>;
      };
    };
  };
  sample_quotes?: {
    _A?: {
      direct_debit_monthly?: {
        electricity_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        electricity_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
      };
      direct_debit_quarterly?: {
        electricity_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        electricity_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
      };
    };
    _B?: {
      direct_debit_monthly?: {
        electricity_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        electricity_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
      };
      direct_debit_quarterly?: {
        electricity_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        electricity_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_single_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
        dual_fuel_dual_rate?: {
          annual_cost_inc_vat: number;
          annual_cost_exc_vat: number;
        };
      };
    };
  };
  sample_consumption?: {
    electricity_single_rate?: {
      electricity_standard: number;
    };
    electricity_dual_rate?: {
      electricity_day: number;
      electricity_night: number;
    };
    dual_fuel_single_rate?: {
      electricity_standard: number;
      gas_standard: number;
    };
    dual_fuel_dual_rate?: {
      electricity_day: number;
      electricity_night: number;
      gas_standard: number;
    };
  };
}

export interface ElectricityTariff {
  unit_rate: number;
  standing_charge: number;
  valid_from: string;
  valid_to: string;
  description: string;
}

export interface GasTariff {
  unit_rate: number;
  standing_charge: number;
  valid_from: string;
  valid_to: string;
  description: string;
}

export interface Offer {
  product: Product;
  tariffs: (ElectricityTariff | GasTariff)[];
}

export interface Tariff {
  value_exc_vat: number;
  value_inc_vat: number;
  valid_from: string;
  valid_to: string | null;
  payment_method: string;
}

export interface StandardUnitRate {
  value_exc_vat: number;
  value_inc_vat: number;
  valid_from: string;
  valid_to: string;
  payment_method: string | null;
}