// src/pages/Quotations.tsx
import QuotationList from '@/components/user/quotations/quotationList';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Quotations: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quotations Page</h1>
      <div className="mb-4">
      </div>
      <QuotationList />
      <Outlet />
    </div>
  );
};

export default Quotations;
