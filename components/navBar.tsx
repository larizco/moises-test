import Image from 'next/image';
import { useRouter } from 'next/router';

import Wrapper from './wrapper';
import Search from './search';

interface NavBarProps {
  search?: boolean
};

export default function NavBar({ search }: NavBarProps) {
  const router = useRouter();
  
  return (
    <nav className='bg-gray-dark'>
      <Wrapper>
        <div className='h-20 flex items-center'> 
          <div className='mr-14 cursor-pointer' onClick={() => router.push('/')}>
            <Image src='/assets/muse-ai.svg' alt={''} width={87} height={22}/>
          </div>

          { search && <div className='w-[359px]'><Search /></div>}
        </div>
      </Wrapper>
    </nav>
  )
};