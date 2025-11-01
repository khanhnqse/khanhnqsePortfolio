import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          'w-full bg-gray py-20 md:py-24 lg:py-28 2xl:py-32',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:gap-14 md:px-10 lg:px-12">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
