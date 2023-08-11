'use client'
import React from 'react';
import { Article } from '@/interface/interfaceNews';
import NewsApi from '@/api/news';


export default function Entertainment() {
  const dataNews = NewsApi();

  return (
    <>
      <div className='flex items-center justify-center bg-red-800 h-12 p-8'>
        <h1 className="text-2xl font-bold uppercase">Entretenimento</h1>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataNews?.articles.map((article: Article, index: number) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md flex">
                <img className="w-32 h-auto mr-4" src='' alt={article.author} />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600">{article.description}</p>
                  <p className=''>{article.author}</p>
                  <a href={article.url} target='_blank' className="hover:text-blue-500">Saber mais</a>
                </div>
              </div>
              )
            )}
          </div>
        </div>
      </div>
    </>

  );
}