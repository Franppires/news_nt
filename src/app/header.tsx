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
      <div className='flex items-center justify-between bg-red-800 h-12 items-center p-4 '>
        <p className='capitalize'>{dateFormatter(date)}</p>
        <p>{hourFormatter(date)}</p>
        <nav className='flex gap-2'>
          <Youtube />
          <Twitter />
          <Instagram />
          <Facebook />
        </nav>
      </div>
      <div className='flex items-center justify-between h-26 p-4 bg-white '>


        {/* <p>{JSON.stringify(data.main.temp)}ºC</p> */}
        <Image src={logo} alt={'Logo News'} height={90}/>
        
        <div className='flex h-8'>
          <input className='rounded-l-md bg-gray-100' type='text' placeholder=' SEARCH' />
          <Search className='bg-red-800 rounded-r-md px-1 cursor-pointer' size={32} />
        </div>
      </div>
      <div className='flex items-center justify-between h-14 bg-white border-t-2 text-black '>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <HomeIcon size={20} />
          <Link className='hover:underline' href='/'>Home</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <ClipboardEdit size={20} />
          <Folder title='Editoriais' >
            <Link className='hover:underline hover:text-white' href='/editoriais/health'>Health</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/region'>Region</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/international'>International</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/general'>General</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/soccer'>Soccer</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/fun'>Fun</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/movie'>Movie theater</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/brazil'>Brazil</Link>
            <Link className='hover:underline hover:text-white' href='/editoriais/motor'>motor racing</Link>
          </Folder>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Coffee size={20} />
          <Link className='hover:underline' href='/entertainment'>Entertainment</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Medal size={20} />
          <Link className='hover:underline' href='/sports'>Sports</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Newspaper size={20} />
          <Link className='hover:underline' href='/digital'>Digital Editions</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Aperture size={20} />
          <Link className='hover:underline' href='/services'>Services</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Camera size={20} />
          <Link className='hover:underline' href='/multimedia'>Multimedia</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <Music3 size={20} />
          <Link className='hover:underline' href='/midiakit'>Midiakit</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-800 p-4 hover:text-white'>
          <PhoneCall size={20} />
          <Link className='hover:underline' href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
    
  );
}
