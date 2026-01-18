type GridProps = {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

export function GridHighlight({ children, columns = 3, gap = '16px' }: GridProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${gap}px` }}>{children}</div>
  )
}
