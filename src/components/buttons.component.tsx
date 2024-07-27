import React from 'react';
import palette from '@/utils/palette.utils';

type ButtonProps = {
  text: string;
  callback: () => void;
  outline?: number;
};

export function PrimaryButton({text, callback, outline = 1}: ButtonProps) {
  return (
    <div onClick={callback} className='text-black text-center rounded-lg p-2 cursor-pointer' style={{backgroundColor: palette.red}}>
      <p className="text-black">{text}</p>
    </div>
  );
};

export function SecondaryButton({text, callback, outline = 1}: ButtonProps) {
  return (
    <div onClick={callback} className='text-black text-center rounded-lg p-2 bg-transparent cursor-pointer' style={{borderColor: palette.red, borderWidth: outline}}>
      <p style={{color: palette.red}}>{text}</p>
    </div>
  );
};

export function TertiaryButton({text, callback, outline = 1}: ButtonProps) {
  return (
    <div onClick={callback} className='text-black text-center rounded-lg p-2 bg-transparent cursor-pointer' style={{borderColor: palette.blue, borderWidth: outline}}>
      <p style={{color: palette.blue}}>{text}</p>
    </div>
  );
};

export function UnderLineButton({text, callback, outline = 1}: ButtonProps) {
  return (
    <div onClick={callback} className='text-white text-center rounded-lg p-2 bg-transparent cursor-pointer'>
      <p className="underline">{text}</p>
    </div>
  );
};