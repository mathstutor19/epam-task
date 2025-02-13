import { FC } from 'react';
import './HeadingTwo.css'
import { HeadingTwoProps } from './HeadingTwo.type';


const HeadingTwo: FC<HeadingTwoProps> = ({ title }) => {
  return (
    <h2 className='heading__two'>{title}</h2>
  );
}

export default HeadingTwo;