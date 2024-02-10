'use client'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'
import { useAtom } from 'jotai'
import { productAtom, quantityAtom } from '../atom'
import productImage from '@/assets/images/image-product-1.jpg'

export default function RightMainDiv() {
  const [quantity, setQuantity] = useAtom(quantityAtom)
  const [product, setProduct] = useAtom(productAtom)

  function addQuantity() {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  function minusQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function addToCart() {
    setProduct({
      image: productImage,
      name: 'Autumn Limited Edition...',
      quantity: quantity,
      price: 125,
    })
  }

  return (
    <section className="flex flex-col gap-4 py-10">
      <p className="text-orange-400 text-sm font-bold">SNEAKER COMPANY</p>
      <h2 className="text-4xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="text-base text-gray-400 font-medium">
        These low-profile sneakers are you perfect casual wear companion.
        Featuring a durable runner outer solo, they will withstand everything
        the wheater can offer.
      </p>
      <section className="flex flex-col">
        <div className="flex items-center gap-6">
          <p className="text-3xl font-bold">$125.00</p>
          <span className="text-orange-400 font-bold bg-orange-100 py-1 px-2 rounded-lg">
            50% Off
          </span>
        </div>
        <p className="text-gray-400 font-medium line-through">$250.00</p>
      </section>
      <div className="flex gap-4">
        <div className="bg-gray-100 py-2 px-4 flex gap-4 rounded-lg items-center w-32 justify-between">
          <FaMinus
            onClick={minusQuantity}
            className={`cursor-pointer text-base ${
              quantity === 0 ? 'text-gray-600' : 'text-orange-400'
            }`}
          />
          <p className="font-bold text-base">{quantity}</p>
          <FaPlus
            className={`cursor-pointer text-base ${
              quantity >= 10 ? 'text-gray-600' : 'text-orange-400'
            }`}
            onClick={addQuantity}
          />
        </div>
        <button
          onClick={addToCart}
          type="button"
          className="bg-orange-400 text-white font-bold flex gap-4 justify-center items-center px-8 py-3 rounded-lg hover:bg-orange-500"
        >
          <MdAddShoppingCart className="text-2xl" />
          <span>Add to the cart</span>
        </button>
      </div>
    </section>
  )
}
