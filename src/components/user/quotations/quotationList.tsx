import Button from '@/components/ui/button';
import { fakeList, Item } from '@/utils/fakeList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuotationList: React.FC = () => {
  const [quotations, setQuotations] = useState<Item[]>([]);

  useEffect(() => {
    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    const data = await fakeList();
    setQuotations(data);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">List of Quotations</h2>
      <div className="space-y-2">
        {quotations.map((quotation) => (
          <div key={quotation.id} className="flex items-center justify-between p-2 border rounded-md shadow-sm bg-white">
            <div>{quotation.name}</div>
          </div>
        ))}
      </div>
      <Link to="register" className="mt-4">
        <Button variant="primary" className="w-full">
          Register Quotation
        </Button>
      </Link>
    </div>
  );
};

export default QuotationList;
