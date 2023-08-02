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

export default function Header() {
  return (
    <div className=''>
      <div className='flex items-center justify-between bg-red-500 h-12 items-center p-4'>
        <p>Quinta-Feira, 27 de Julho de 2023</p>
        <p>09:53:00</p>
        <nav className='flex gap-2'>
          <Youtube />
          <Twitter />
          <Instagram />
          <Facebook />
        </nav>
      </div>
      <div className='flex items-center justify-between h-24 p-4 bg-white'>
        <p>clima</p>
        <Image src={logo} alt={'Logo News'} height={90}/>
        
        <div className='flex h-8'>
          <input className='rounded-l-md' type='text' placeholder=' BUSCAR' />
          <Search className='bg-red-500 rounded-r-md px-1 cursor-pointer' size={32} />
        </div>
      </div>
      <div className='flex items-center justify-between h-14 bg-gray-500 '>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <HomeIcon size={20} />
          <Link href='/'>Home</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <ClipboardEdit size={20} />
          <Folder title='Editoriais'>
            <Link href='/editoriais/saude'>Saúde</Link>
            <Link href='/editoriais/regiao'>Região</Link>
            <Link href='/editoriais/internacional'>Internacional</Link>
            <Link href='/editoriais/geral'>Geral</Link>
            <Link href='/editoriais/futebol'>Futebol</Link>
            <Link href='/editoriais/diversão'>Diversão</Link>
            <Link href='/editoriais/cinema'>Cinema</Link>
            <Link href='/editoriais/automobilismo'>Automobilismo</Link>
          </Folder>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Coffee size={20} />
          <Link href='/entretenimento'>Entretenimento</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Medal size={20} />
          <Link href='/esportes'>Esportes</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <PlaySquare size={20} />
          <Link href='/video'>Vídeo</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Newspaper size={20} />
          <Link href='/edicoes'>Edições Digitais</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Aperture size={20} />
          <Link href='/servicos'>Serviços</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Camera size={20} />
          <Link href='/multmidia'>Multmídia</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <Music3 size={20} />
          <Link href='/midiakit'>Midiakit</Link>
        </div>
        <div className='flex gap-1 hover:bg-red-500 p-4'>
          <PhoneCall size={20} />
          <Link href='/contato'>Contato</Link>
        </div>
      </div>
    </div>
  );
}
