'use client';

import { useCartStore } from '@/app/(apps)/style-strider/store/cartStore';
import { Button } from '@/components/ui/button';

export function Cart() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className='flex justify-between items-center mb-2'
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <Button
                  size='sm'
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className='mt-4 flex justify-between items-center'>
            <span className='font-semibold'>
              Total: ${totalPrice.toFixed(2)}
            </span>
            <Button onClick={clearCart}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
}
