import React, { memo, useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });

  return <div></div>;
};

export default memo(Custom404);
