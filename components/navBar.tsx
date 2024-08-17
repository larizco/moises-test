import Image from 'next/image';
import Wrapper from './wrapper';

interface NavBarProps {
  search?: boolean
};

export default function NavBar({ search }: NavBarProps) {
  return (
    <nav className='bg-dark-gray'>
      <Wrapper>
        <div className='h-20 flex items-center'> 
          <div className='mr-14'>
            <Image src='/assets/muse-ai.svg' alt={''} width={87} height={22}/>
          </div>

          { search && <p> search </p>}
        </div>
      </Wrapper>
    </nav>
  )
};