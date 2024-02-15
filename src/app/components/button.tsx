'use client'

import { FunctionComponent } from 'react';
import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
position: relative;
background-color: #333A56; 
height: 150px;
width: 150px;
color: white;
border-radius: 20px;
border: 1px solid rgba(26, 33, 106, 1);
font-size: 18px; 
font-weight: bold; 
transition: background-color 0.2s ease, transform 0.2s ease-in-out;
box-shadow: 0 5px 10px rgba(51, 17, 255, 0.22), 0 1px 3px rgba(26, 33, 106, 0.8), 0 1px 0px rgba(28, 33, 102, 1);
overflow: hidden;
text-shadow: 0 1px 0px rgba(0, 0, 0, 0.4);

::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  // box-shadow: inset 0 -1px 0px rgb(0, 0, 0, 0.3);
  border-radius: 17px;
  pointer-events: none; 
  background: linear-gradient(to bottom, transparent, transparent, rgba(255, 255, 255, 0)); 
}

::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0; 
  right: 0; 
  bottom: 20px; 
  border-radius: 20px; 
  scale: 103%;
  background: rgba(255, 255, 255, 0.08);
  z-index: 0;
}

:hover::before {
  bottom: 22px;
  border-radius: 10px; 
  transition: all 0.2s ease, transform 0.2s ease-in-out;

}

:active {
  transform: scale(0.99);
  box-shadow: 0 5px 10px rgba(51, 17, 255, 0.22), 0 1px 3px rgba(26, 33, 106, 0.8), 0 0 0 rgba(28, 33, 102, 1);

}

:hover {
  background-color: #4A53B8; 
}
  }
`
interface ButtonProps {
  className?: string
  children: React.ReactNode
}

const ButtonSkeu: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...props

}) => {
  return (
    
    <>
      <div className="">
        <StyledButton
          className={`${className} flex justify-center text-center items-center`}
          {...props}
         >
          <p className="">{children}</p>
        </StyledButton>
      </div>
    </>
  );
};

export default ButtonSkeu;
