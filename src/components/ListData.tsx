import React from 'react';
import { Link } from 'react-router-dom';
import { DataListCategory } from '../services/categories';
import Header from './Header';

interface ListDataProps {
  data: DataListCategory[];
}

const ListData: React.FC<ListDataProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-1/2 justify-center items-center h-screen">
      <div className='flex my-4 gap-2'>
        <h1 className="text-2xl font-bold text-white">Lista de Dados</h1>
        <button className='bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-400 cursor-pointer'>
          <Link to="/create">
            <span> + Adicionar</span>
          </Link>
        </button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Header header="Dados" />
        <table className="w-full my-2 rounded">
          <thead className='bg-gray-500 rounded'>
            <tr className="border-b">
              <th className="text-left">Nome</th>
              <th className="text-left">Quantidade de Doces</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b-2">
                <td>{item.name}</td>
                <td className='text-center'>{item.doce_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListData;
