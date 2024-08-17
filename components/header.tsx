import Icon from "./icon";
import { Wrapper } from "./wrapper";

interface HeaderProps {
  songsNumber: number
};

export default function Header({ songsNumber }: HeaderProps) {
  return (
    <div className='my-12'>
      <Wrapper>
        <div className='flex justify-between items-center'>
          <div>
            <div className='flex'>
              <h1 className='text-white text-3xl font-semibold'>
                Your Library
              </h1>

              <button className='ml-4 bg-transparent-white text-white px-6 rounded-full text-sm flex'>
                <Icon name='heart' size='small'/>
                <p className='ml-1'> Favorites </p>
              </button>
            </div>
            
            <p className='mt-3 opacity-50'> You have {songsNumber} songs in your library</p>
          </div>

          <div>
            Sorft from A-Z - search component
          </div>
        </div>
      </Wrapper>
    </div>
  );
};