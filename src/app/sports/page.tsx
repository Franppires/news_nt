'use client'
import NewsApi from "@/api/news";
import React from 'react';
import { Result } from '@/interface/interfaceNews';

export default function Sports() {
  const dataNews = NewsApi();

  if (!dataNews) {
    return <p>Carregando...</p>;
  }
  
  const mainArticles = dataNews.results.slice(0, 7);
  const otherArticles = dataNews.results.slice(7);


  return (
    <div className="bg-gray-100">
      <div className='flex items-center justify-center bg-red-800 h-12 p-8'>
        <h1 className="text-2xl font-bold uppercase">Sports</h1>
      </div>
      <div className="p-4 bg-gray-200">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pr-3">
          <ul className="space-y-4">
            {mainArticles.map((article: Result, index) => (
              <li key={index} className="relative rounded p-4 mb-4 overflow-hidden border-b-2">
                <div className="relative flex flex-col md:flex-row">
                  {article.media && article.media.length > 0 && (
                    <img
                      src={article.media[0]?.['media-metadata'][2]?.url}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover rounded"
                      />
                    )}
                    <div className="relative z-10 md:w-3/4 bg-black bg-opacity-50 p-4 rounded-lg">
                      <a href="#" className="text-white font-bold text-xl mb-2">{article.title}</a>
                      <p className="text-white mb-4">{article.abstract}</p>               
                      <p className="text-white mb-4">{article.type}</p>
                      <p className="text-white mb-4">{article.updated}</p>
                      <a href={article.url} target='_blank' className=" bg-gray-200 p-2 rounded text-blue-500 hover:underline">Saber mais</a>                
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 pl-3">
            <ul className="space-y-4">
              {otherArticles.map((article: Result, index) => (
                <li key={index} className="bg-gray-100 rounded flex p-4 mb-4 ">
                  <div className="flex flex-col md:flex-row">
                    {article.media && article.media.length > 0 && (
                      <img
                        src={article.media[0]?.['media-metadata'][2]?.url}
                        alt=""
                        className="w-2/5 md:w-1/4 rounded-lg md:mr-4"
                      />
                    )}
                    <div className="md:w-3/4">
                      <a href="#" className="text-black font-bold text-xl mb-2 text-black">{article.title}</a>
                      <p><a href={article.url} target='_blank' className=" bg-gray-200 p-2 rounded text-blue-500 hover:underline">Saber mais</a></p>
                      
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
