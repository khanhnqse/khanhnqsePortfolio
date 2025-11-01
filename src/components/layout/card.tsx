import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={mergeClasses(
        'rounded-xl bg-gray shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-100 dark:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
