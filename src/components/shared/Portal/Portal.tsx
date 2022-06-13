import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { IProviderProps } from '@/types';

export const Portal: React.FC<IProviderProps> = ({ children }) => {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    setPortal(div);

    return () => {
      document.body.removeChild(div);
    };
  }, []);

  return portal && ReactDOM.createPortal(children, portal);
};
