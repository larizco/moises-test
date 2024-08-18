import React from "react";
import Icon from "./icon";
import Search from "./search";
import Toggle from "./toggle";
import Wrapper from "./wrapper";

interface HeaderProps {
  songsNumber: number
  onViewFavorites: () => void
  onSortSongs: () => void
};

export default function Header({ songsNumber, onViewFavorites, onSortSongs }: HeaderProps) {
  const [buttonActive, setButtonActive] = React.useState(false);

  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
    onViewFavorites();
  };

  const buttonBg = buttonActive ? 'bg-white-transparent-25' : 'bg-white-transparent-15';

  return (
    <div className='my-12'>
      <Wrapper>
        <div className='flex justify-between items-start flex-col lg:flex-row'>
          <div>
            <div className='flex items-center'>
              <h1 className='text-white text-3xl font-semibold'>
                Your Library
              </h1>

              <button 
                className={`ml-4 text-white px-7 rounded-full text-sm flex items-center h-9 ${buttonBg}`}
                onClick={handleButtonClick}
              >
                <Icon name={buttonActive ? 'filled-heart' : 'heart'} size='small'/>
                <p className='ml-1'> Favorites </p>
              </button>
            </div>
            
            <p className='mt-3 opacity-50'> You have {songsNumber} songs in your library</p>
          </div>

          <div className='flex items-center flex-col w-full lg:w-auto lg:flex-row'>
            <div className='flex items-center my-6 w-full lg:w-auto'>
              <p className='mr-2'> Sort from A-Z </p> 
              <Toggle onClick={onSortSongs} />
            </div>
            <div className='w-full lg:w-[254px] lg:ml-3'>
              <Search />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};