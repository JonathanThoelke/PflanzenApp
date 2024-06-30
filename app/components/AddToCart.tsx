'use client';

const AddToCart = () => {
  return (
    <button 
      onClick={() => console.log('Zum Warenkorb hinzugefügt')} 
      className="bg-customGreen hover:bg-customGreen-hover text-white font-bold py-2 px-4 rounded">
      kaufen
    </button>  
  )
}

export default AddToCart;
