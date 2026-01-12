import { LucideProps } from "lucide-react";

const ToothIcon = ({ size = 24, className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C9.5 2 7 3 6 5c-1.5 3 0 6 0 9 0 2 0 4 1 6 .5 1 1.5 2 2.5 2s1.5-1 2-2c.5 1 1 2 2 2s2-1 2.5-2c1-2 1-4 1-6 0-3 1.5-6 0-9-1-2-3.5-3-6-3z" />
  </svg>
);

export default ToothIcon;