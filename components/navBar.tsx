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
    <nav className='bg-gray-dark relative z-10'>
      <Wrapper>
        <div className='flex flex-col items-start py-4 sm:py-0 sm:items-center sm:flex-row sm:h-20'> 
          <div className='mr-14 cursor-pointer' onClick={() => router.push('/')}>
            <Image src='/assets/muse-ai.svg' alt={''} width={87} height={22}/>
          </div>

          { search && <div className='w-full mt-4 sm:mt-0 md:w-[359px]'><Search /></div>}
        </div>
      </Wrapper>
    </nav>
  )
};