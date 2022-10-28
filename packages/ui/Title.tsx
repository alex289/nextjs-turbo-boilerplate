import type { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
    {children}
  </h1>
);
