'use client'
import NewsApi from '@/api/news';
import { Result } from '@/interface/interfaceNews';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const dataNews = NewsApi();

  if (!dataNews) {
    return <p>Carregando...</p>;
  }
  
  const mainArticle = dataNews.results;
  // const otherArticles = dataNews.results.slice(1);

  return (
    <div className="bg-gray-100">
      <div className='flex items-center justify-center bg-red-800 h-12 p-8'>
        <h1 className="text-2xl font-bold uppercase">Notícias do Dia</h1>
      </div>
      <div className="p-4 bg-gray-800">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 relative">
            <h3 className="text-4xl font-semibold mb-2">Principal </h3>
            <Image src="" alt="Imagem da Notícia" className="w-full h-auto" />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center p-6 text-white">
              {/* <h2 className="text-5xl font-bold mb-2">{mainArticle.title}</h2> */}
              {/* <p>{mainArticle.description}</p> */}
              {/* <a href={mainArticle.url}  target='_blank' className="hover:text-blue-500 text-3xl">Saber mais</a> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 pl-3">
            <h3 className="text-4xl font-semibold mb-2">Outras </h3>
            <ul className="space-y-2">
              {dataNews.results.map((article: Result, index: number) => (
                <li key={index} className="bg-gray-700 hover:bg-red-800 rounded flex flex-col p-2 ">
                  <a href="#" >{article.title}</a>
                  <a href={article.url} target='_blank' className="hover:text-blue-500">Saber mais</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
