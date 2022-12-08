import React, { forwardRef } from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/display-name
const DropdownLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default DropdownLink;
