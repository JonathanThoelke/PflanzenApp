'use client';

const AddToCart = () => {
  return (
    <button 
      onClick={() => console.log('Zum Warenkorb hinzugefügt')} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Zum Warenkorb hinzufügen
    </button>  
  )
}

export default AddToCart;
