import React, { memo } from 'react';
import Image from 'next/image';

import { BubbleDisplayContainer } from './BubbleDisplayStyles';

export type BubbleDisplayProps = {
  imgUr: string;
  title: string;
  description: string;
  url: string;
};

const BubbleDisplay: React.FC<BubbleDisplayProps> = (props) => {
  const { imgUr, title, description, url } = props;

  return (
    <BubbleDisplayContainer>
      <Image src={imgUr} alt={`${title} image`} width={85} height={85} />
      <div className="text-container">
        <a href={url} target="_blank">
          <span className="title">{title}</span>
        </a>
        <span className="description">{description}</span>
      </div>
    </BubbleDisplayContainer>
  );
};

export default memo(BubbleDisplay);
