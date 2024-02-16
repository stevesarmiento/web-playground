'use client'

import { FunctionComponent, useState } from 'react';
import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
position: relative;
background: linear-gradient(to bottom, #21273F, #333A56);
height: 150px;
width: 150px;
color: white;
border-radius: 20px;
transition: background-color 0.2s ease, transform 0.2s ease-in-out;
box-shadow: 0 20px 10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.8), 0 1px 0px rgba(0, 0, 0, 1);
overflow: hidden;

::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 0px solid rgba(19, 21, 36, 1);
  box-shadow: inset 0 1px 1px rgb(255, 255, 255, 0.1), inset 0 -5px 0px rgb(0, 0, 0, 0.5);
  border-radius: 20px;
  pointer-events: none; 
}

::before {
  content: '';
  position: absolute;
  height: 1px;
  width: 100px;
  top: 0;
  left: 20%; 
  right: 0; 
  bottom: 0px; 
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%); // little notch highlight at top
  z-index: 0;
}

:active::before {
  background: radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
  transition: all 0.2s ease, transform 0.2s ease-in-out;
}

:active {
  background: linear-gradient(to bottom, #21273F, #333A56);
  transform: scale(0.99);
  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.777), inset 0 1px 1px rgb(0, 0, 0, 1) ;
}

:hover {
  //background: linear-gradient(to bottom, #21273F, #333A56);
}

svg {
  width: 4em;
  height: 4em; 
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
      <div className="border-[10px] border-black/60 rounded-[39px]">
        <div className="bg-black/80 border-[8px] rounded-[28px] border-black/40 ring-[8px] ring-[#191e2c] focus:ring-[#FF9900]">
          <StyledButton
            className={`${className} flex justify-center text-center items-center`}
            {...props}
          >
            {children}
          </StyledButton>
        </div>
      </div>
    </>
  );
};

export default ButtonSkeu;
