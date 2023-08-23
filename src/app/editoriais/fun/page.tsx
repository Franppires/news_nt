'use client'
import NewsApi from "@/api/news";
import { Result } from "@/interface/interfaceNews";

export default function Diversao() {
  const dataNews = NewsApi();

  if (!dataNews) {
    return <p>Carregando...</p>;
  }

  const otherArticles = dataNews.results;

  return (
    <div className="bg-gray-100">
      <div className='flex items-center justify-center bg-red-800 h-12 p-8'>
        <h1 className="text-2xl font-bold uppercase">Região</h1>
      </div>
      <div className="p-4 bg-white">
        <div className="w-full pl-3">
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
                    <p className="text-black mb-4">{article.abstract}</p>   
                    <p className="text-black mb-4">{article.geo_facet}</p>      
                    <p className="text-black mb-4">{article.section}</p>
                    <p className="text-black mb-4">{article.type}</p>
                    <p className="text-black mb-4">{article.updated}</p> 
                    <p><a href={article.url} target='_blank' className=" bg-gray-200 p-2 rounded text-blue-500 hover:underline">Saber mais</a></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}