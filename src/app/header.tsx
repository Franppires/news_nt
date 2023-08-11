import Folder from '@/explore/folder';
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Search,
  HomeIcon,
  ClipboardEdit,
  Coffee,
  Medal,
  PlaySquare,
  Newspaper,
  Camera,
  Aperture,
  Music3,
  PhoneCall,
} from 'lucide-react';
import Link from 'next/link';
import logo from './../../public/logo.svg'
import Image from 'next/image';
import dateFormatter from '@/data/date';
import hourFormatter from '@/data/hour';


export default async function Header() {
  const date = new Date() //dados da data e horario
 
  // const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY //chave no arquivo env

  // const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?lat=-22,3145&lon=-49,0587&lang=pt_br&appid=${apiKey}&units=metric`)  //chamada para api 
  // const data = await response.json() //resposta da chamada armazenada em data 



  return (
    <div className=''>
      <div className='flex items-center justify-between bg-red-800 h-12 items-center p-4'>
        <p className='capitalize'>{dateFormatter(date)}</p>
        <p>{hourFormatter(date)}</p>
        <nav className='flex gap-2'>
          <Youtube />
          <Twitter />
          <Instagram />
          <Facebook />
        </nav>
      </div>
      <div className='flex items-center justify-between h-26 p-4 bg-gray-600 '>


        {/* <p>{JSON.stringify(data.main.temp)}ºC</p> */}
        <Image src={logo} alt={'Logo News'} height={90}/>
        
        <div className='flex h-8'>
          <input className='rounded-l-md' type='text' placeholder=' BUSCAR' />
          <Search className='bg-red-800 rounded-r-md px-1 cursor-pointer' size={32} />
        </div>
      </div>
      <div className='flex items-center justify-between h-14 bg-gray-800 border-t-2 '>
        <div className='flex gap-1 hover:bg-red-800 p-4 '>
          <HomeIcon size={20} />
          <Link className='hover:underline' href='/'>Home</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <ClipboardEdit size={20} />
          <Folder title='Editoriais' >
            <Link className='hover:underline' href='/editoriais/saude'>Saúde</Link>
            <Link className='hover:underline' href='/editoriais/regiao'>Região</Link>
            <Link className='hover:underline' href='/editoriais/internacional'>Internacional</Link>
            <Link className='hover:underline' href='/editoriais/geral'>Geral</Link>
            <Link className='hover:underline' href='/editoriais/futebol'>Futebol</Link>
            <Link className='hover:underline' href='/editoriais/diversão'>Diversão</Link>
            <Link className='hover:underline' href='/editoriais/cinema'>Cinema</Link>
            <Link className='hover:underline' href='/editoriais/automobilismo'>Automobilismo</Link>
          </Folder>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Coffee size={20} />
          <Link className='hover:underline' href='/entretenimento'>Entretenimento</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Medal size={20} />
          <Link className='hover:underline' href='/esportes'>Esportes</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <PlaySquare size={20} />
          <Link className='hover:underline' href='/video'>Vídeo</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Newspaper size={20} />
          <Link className='hover:underline' href='/edicoes'>Edições Digitais</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Aperture size={20} />
          <Link className='hover:underline' href='/servicos'>Serviços</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Camera size={20} />
          <Link className='hover:underline' href='/multmidia'>Multmídia</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <Music3 size={20} />
          <Link className='hover:underline' href='/midiakit'>Midiakit</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4'>
          <PhoneCall size={20} />
          <Link className='hover:underline' href='/contato'>Contato</Link>
        </div>
      </div>
    </div>
    
  );
}
