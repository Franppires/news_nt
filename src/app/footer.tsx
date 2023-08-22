import { Facebook, Instagram, MailCheck, Smartphone, Twitter, Youtube } from "lucide-react";

export default async function Footer() {
  

  return (
    <div className=''>
      <div className='flex items-center justify-between bg-red-800 h-12 items-center p-4 '>
        <div className="flex gap-2">
          <Smartphone />
          <p>Whats(11) - 9999-9999</p>
        </div>
        <div className="flex gap-2">
          <MailCheck  />
          <p>contatoechonews@gmail.com</p>
        </div>
        <nav className='flex gap-2'>
          <Youtube />
          <Twitter />
          <Instagram />
          <Facebook />
        </nav>
      </div>
    </div>


       
    
  );
}
