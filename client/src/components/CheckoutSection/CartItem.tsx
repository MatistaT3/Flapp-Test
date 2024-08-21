import Image from 'next/image';

export const CartItem: React.FC<any> = ({ item }) => {
  return (
    <div key={item.id} className='flex items-center gap-4'>
      <Image
        src={item.thumbnail}
        alt={item.title}
        className='w-20 h-20 object-cover rounded-md'
        width={80}
        height={80}
      />
      <div className='flex-1'>
        <h3 className='font-medium'>{item.title}</h3>
        <p className='text-sm text-muted-foreground'>
          {item.quantity === 1
            ? `${item.quantity} Unidad`
            : `${item.quantity} Unidades`}
        </p>
      </div>
      <p className='font-medium'>${item.discountedTotal.toFixed(0)}</p>
    </div>
  );
};
