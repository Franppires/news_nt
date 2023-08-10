import React from 'react';
import { Article, Root } from '@/interface/interfaceNews';

export default async function Entertainment() {
  const apiKey = process.env.REACT_APP_NEWS; //chave no arquivo env
  const responseNews = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${apiKey}`,
    { next: { revalidate: 3600 } }
  );
  const dataNews: Root = await responseNews.json(); //analisa a resposta como tipo Root

  console.log(dataNews);

  return (
    <>
      <div className='flex items-center justify-center bg-red-800 h-12 p-8'>
        <h1 className="text-2xl font-bold uppercase">Entretenimento</h1>
      </div>
      <div className="bg-black-800">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataNews.articles.map((article: Article, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex">
                <img className="w-32 h-auto mr-4" src='https://picsum.photos/200/300?random=1' alt={article.title} />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600">{article.description}</p>
                  <p className=''>{article.author}</p>
                  <a href={article.url} target='_blank' className="hover:text-blue-500">Saber mais</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}