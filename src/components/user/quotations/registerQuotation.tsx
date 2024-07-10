import TextField from "@/components/layouts/textField";
import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { fakeCreate } from "@/utils/fakeCreate";
import { useState } from "react";
import { Link } from "react-router-dom";


const RegisterQuotation: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem = await fakeCreate(name);

    if (newItem) {
      alert(`Quotation "${newItem.name}" Registered Successfully`);
      setName('');
    } else {
      alert('Failed to Register Quotation');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Typography variant="h2" className="text-center mb-6">Register Quotation</Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <TextField
              label="Quotation Name"
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Register
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/user/quotations" className="text-indigo-600 hover:text-indigo-800">
            Go to Quotations Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterQuotation;
