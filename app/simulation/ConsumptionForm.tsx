import React, { useState } from 'react';

interface ConsumptionFormProps {
  onSubmit: (simType: 'electricity' | 'gas', consumption: number) => void;
  simulationType: 'electricity' | 'gas';
}

const ConsumptionForm: React.FC<ConsumptionFormProps> = ({ onSubmit, simulationType }) => {
  const [consumption, setConsumption] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(simulationType, consumption);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Consommation annuelle (kWh):</label>
        <input
          type="number"
          value={consumption}
          onChange={(e) => setConsumption(Number(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 w-full text-gray-800"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Soumettre
      </button>
    </form>
  );
};

export default ConsumptionForm;
