'use client' 
import { useEffect, useState } from 'react';
import { Root } from '@/interface/interfaceNews'; // Certifique-se de que o caminho para a interface está correto

export default function NewsApi() {
  const [dataNews, setDataNews] = useState<Root | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseNews = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=z6tT5R3Gxh9qMq0D9pWE7k6oGEVip92P`
        );

        
        console.log('1',responseNews)
        if (!responseNews.ok) {
          throw new Error('Erro ao buscar notícias');
        }

        console.log('2',responseNews)

        const data: Root = await responseNews.json();
        console.log('2',responseNews)
        setDataNews(data);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        setDataNews(null);
      }
    }
    fetchData();
  }, []);

  return dataNews;
}
