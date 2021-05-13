import React from 'react';

// import { Container } from './styles';
import './style.css'

function Title({ children, name }) {
  return(
      <div className="title">
          {children}
          <span>{name}</span>
      </div>
  );
}

export default Title;