// pages/Checkout.js
import BillingShipping from './BillingShipping';
import PaymentMethods from './PaymentMethod';

export default function Checkout() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Warenkorb</h1>
      <BillingShipping />
      <PaymentMethods />
      <div className="flex justify-between items-center mt-4">
        <button className="bg-black text-white p-2">nächster Schritt</button>
      </div>
    </div>
  );
}
