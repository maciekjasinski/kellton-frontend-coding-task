import { LayoutProps } from './Layout.interface';
import QuestionMarkIcon from '@assets/icons/questionMark.svg?react';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative overflow-hidden">
      {children}
      <QuestionMarkIcon className="absolute -left-12 top-4 -z-10 size-64 -rotate-45 overflow-hidden opacity-15 lg:left-32 lg:top-32" />
      <QuestionMarkIcon className="absolute -bottom-24 -right-24 -z-10 size-96 rotate-45 overflow-hidden opacity-15 lg:-right-24 lg:bottom-0" />
    </div>
  );
};
