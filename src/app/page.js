

import HomeInfo from '@/components/HomeInfo/HomeInfo'
import fondo from '../assets/fondo.jpg'
import Image from 'next/image'




export default function Home() {
  return (
    <div >
      
      <Image className='fondo' src={fondo} alt='bg'></Image>
        <HomeInfo/>
  

    </div>

  )
}