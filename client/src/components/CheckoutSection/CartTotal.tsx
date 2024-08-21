interface CartTotalProps {
  total: number;
}

export function CartTotal({ total }: CartTotalProps) {
  return (
    <div className='flex justify-between items-center font-bold'>
      <span>Total</span>
      <span>${total.toFixed(0)}</span>
    </div>
  );
}
