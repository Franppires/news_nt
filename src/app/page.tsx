import { Article, Root } from '@/interface/interfaceNews';
import React from 'react';

export default async function Home() {
  const apiKey = process.env.REACT_APP_NEWS; //chave no arquivo env
  const responseNews = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${apiKey}`,
    { next: { revalidate: 3600 } }
  );
  const dataNews: Root = await responseNews.json(); //analisa a resposta como tipo Root

  const mainArticle = dataNews.articles[0];
  const otherArticles = dataNews.articles.slice(1);

  console.log(dataNews);

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center bg-red-800 h-20">
        <h1 className="text-2xl font-bold uppercase text-white">Notícias do Dia</h1>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 relative ">
            <h3 className="text-4xl font-semibold mb-2">Principal </h3>
            <img src="https://picsum.photos/900?grayscale" alt="Imagem da Notícia" className="w-full h-auto" />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center p-6 text-white">
              <h2 className="text-5xl font-bold mb-2">{mainArticle.title}</h2>
              <p>{mainArticle.description}</p>
              <a href={mainArticle.url} className="hover:text-blue-500 text-3xl">Saber mais</a>
            </div>
          </div>
            <div className="w-full md:w-1/3 pl-3">
              <h3 className="text-4xl font-semibold mb-2">Outras </h3>
              <ul className="space-y-2">
                {otherArticles.map((article: Article, index: number) => (
                  <li key={index} className="bg-gray-200 hover:bg-red-800 rounded flex flex-col p-2">
                    <a href="#" >{article.title}</a>
                    <a href={article.url} className="hover:text-blue-500">Saber mais</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
