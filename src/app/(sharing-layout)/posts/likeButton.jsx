'use client';

import { useState } from 'react';

export const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <button
      className={`${
        like ? 'bg-red-500 scale-105' : 'bg-gray-400/90'
      } transition w-10 rounded bg-clip-text text-transparent`}
      onClick={() => setLike(!like)}
    >
      {like ? '❤️' : '🤍'}
    </button>
  );
};
