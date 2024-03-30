import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListData from '../components/ListData';
import { DataListCategory, fetchCategories } from '../services/categories';

const DataDisplayScreen: React.FC = () => {
  const [data, setData] = useState<DataListCategory[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categories = await fetchCategories();
        setData(categories);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <ListData data={data} />
      </div>
      <div className='bg-purple-500 rounded-full absolute bottom-10 sm:right-52'>
        <button className="h-12 w-28 font-bold">
          <Link to="/">Go to Login</Link>
        </button>
      </div>
    </>
  );
};

export default DataDisplayScreen;
