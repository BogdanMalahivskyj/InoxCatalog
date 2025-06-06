export function Card({ children, className }: any) {
  return <div className={`bg-white p-4 rounded-xl ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}