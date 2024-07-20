'use client';
//
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Searchbar: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const router = useRouter();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/Pflanzen?search='+inputValue);
    };

    return (
      <form onSubmit={handleSubmit} className="flex items-center bg-white p-3 h-10 rounded">
      <input
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
        className="w-full md:w-24 p-1 outline-none border-none"
      />
      <button type="submit">
        <img
            src="/search-svgrepo-com.svg"
            className="w-4 h-4 ml-2"
            alt="Search"
        />
      </button>
    </form>
    );
  };
  
export default Searchbar;
