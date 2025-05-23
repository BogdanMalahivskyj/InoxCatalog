export function Button({ children, className }: any) {
  return <button className={`bg-black text-white py-2 px-4 rounded ${className}`}>{children}</button>;
}