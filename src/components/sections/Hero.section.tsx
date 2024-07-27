import palette from '@/utils/palette.utils';
import React from 'react';
import Image from 'next/image';
import hat from '../../../public/hat.png';

export default function Hero() {
  return (
    <div className='pt-6 flex h-screen justify-center w-full' style={{backgroundColor: palette.blue}}>
      <div className='flex flex-col md:flex-row justify-center gap-y-5'>
        <div className='flex w-full md:w-1/2 justify-center'>
          <Image className='rounded-full justify-self-center self-center w-60 md:w-72' src={hat} alt='pp' />
        </div>
        <div className='flex w-full md:w-1/2 flex-col justify-center text-center md:text-start gap-y-2'>
          <p className="text-4xl font-bold">
            Hi! I&apos;m Lenny 👋
          </p>
          <p className="text-2xl md:text-3xl">
            A passionate software engineer
          </p>
        </div>
      </div>
    </div>
  );
};