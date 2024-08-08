import React, { ReactNode } from 'react';
import palette from '@/utils/palette.utils';
import { cardHoverScale } from './sections/Competences.section';

type ButtonProps = {
  text: string;
  callback: () => void;
  borderWidth?: number;
  rightIcon?: ReactNode;
};

export function PrimaryButton({text, callback, borderWidth = 0, rightIcon = undefined}: ButtonProps) {
  return (
    <button onClick={callback} className={`${cardHoverScale} text-white hover:bg-red gap-x-2 grow font-semibold bg-light-red flex justify-center items-center text-sm md:text-base py-2 px-4 rounded-xl`}>
      <p className='ml-4 md:ml-2'>{text}</p>
      <p>{rightIcon}</p>
    </button>
  );
};

export function SecondaryButton({text, callback, borderWidth = 0, rightIcon = undefined}: ButtonProps) {
  return (
    <button onClick={callback} className={`${cardHoverScale} hover:bg-gray-200 grow gap-x-2 font-semibold text-black transparent flex justify-center items-center text-sm md:text-base py-3 md:py-5 px-4 text-center bg-white rounded-xl`} style={{borderColor: palette.light_red}}>
      <p className='ml-4 md:ml-2'>{text}</p>
      <p>{rightIcon}</p>
    </button>
  );
};

export function TertiaryButton({text, callback, borderWidth = 0, rightIcon = undefined}: ButtonProps) {
  return (
    <div onClick={callback} className='text-xxs text-black rounded-xl cursor-pointer'>
      <p>{text}</p>
    </div>
  );
};

export function UnderLineButton({text, callback, borderWidth = 0, rightIcon = undefined}: ButtonProps) {
  return (
    <div onClick={callback} className='text-white text-center rounded-xl p-2 bg-transparent cursor-pointer'>
      <p className="underline">{text}</p>
    </div>
  );
};