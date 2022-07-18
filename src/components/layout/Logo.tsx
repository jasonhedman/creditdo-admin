import { FC } from 'react';

import Image from 'next/image';

interface Props {
  size?: number;
}

const Logo : FC<Props> = ({ size }) => (
  <Image
    src="/logo.png"
    alt="Credit Do"
    width={size || 100}
    height={size || 100}
  />
)

export default Logo