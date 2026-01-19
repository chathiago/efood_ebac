type GridRestaurantProps = {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

export function GridRestaurant({ children, columns = 3, gap = '16px' }: GridRestaurantProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${gap}px` }}>{children}</div>
  )
}
