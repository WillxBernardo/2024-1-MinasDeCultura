import Logobranca from '@/assets/logobranca.png';
import Image from "next/image";
import ImgGit from '@/assets/imggit.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="h-12 bg-primary-red p-40">
      <div>
        <Image className="-mt-20 mr-4"
          src={Logobranca}
          alt='logobranca'
          />
      </div>
        <ul className="flex gap-10 font-sans text-2xl bg-primary-red text-white -mt-6 ml-96">
            <li>
                <Link href="/">
                    <button className="text-lg">HOME</button>
                </Link>
            </li>
            <li>
                <Link href="/Sobre" >
                    <button className="text-lg">SOBRE</button>
                </Link> 
            </li>
            <li>
                <Link href="/Pesquisa" >
                    <button className="text-lg">PESQUISA FILTRADA</button>
                </Link>
            </li>                   
        </ul>
                
                  <a href="https://github.com/unb-mds/2024-1-MinasDeCultura" target="_blank" rel="noopener noreferrer">
                  <Image className="-mt-14"
                  src={ImgGit}
                  alt='imggit'
                  style={{marginLeft:'95%'}}
                  />
                  </a>
                  <div className="w-full h-px bg-white mt-20"></div>
                  <div className="flex justify-end">
                   <p className="text-white mt-10">© 2024. All Rights Reserved.</p>
                  </div>
                
    </footer>
  )
}

export default Footer