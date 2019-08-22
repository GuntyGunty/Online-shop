import React from 'react';
import './Container.css'

import { buildClassName } from '../../Utils/buildClassName';

const Container = ({
  children,
  variant
}) => {
  const buildedClassName = buildClassName(
    'Container',
    variant,
  );

  return (
    <div className={buildedClassName}>
      {children}
    </div>
  )
}

export default Container;