'use client'

import { useEffect, useState } from 'react'
import productImg1 from '@/assets/images/image-product-1.jpg'
import productImg2 from '@/assets/images/image-product-2.jpg'
import productImg3 from '@/assets/images/image-product-3.jpg'
import productImg4 from '@/assets/images/image-product-4.jpg'
import Image from 'next/image'
import { MdOutlineClose } from 'react-icons/md'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [productImg1, productImg2, productImg3, productImg4]

export default function LeftMainDiv() {
  const [index, setIndex] = useState(0)
  const [mainImage, setMainImage] = useState(images[index])
  const [isModal, setIsModal] = useState(false)
  const [animationParent] = useAutoAnimate()

  useEffect(() => {
    setMainImage(images[index])
  }, [index])

  function goNext() {
    if (index < images.length - 1) {
      setIndex(index + 1)
    }
  }
  function goBack() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div ref={animationParent} className="flex flex-col gap-4 relative items-center">
      <Image
        className="max-w-[384px]  rounded-3xl cursor-pointer aspect-square"
        alt="product image"
        src={mainImage}
        onClick={() => setIsModal(true)}
      />
      <div className="flex justify-between md:w-[384px]">
        {images.map((image, index) => (
          <Image
            onClick={() => setMainImage(image)}
            className={`rounded-xl cursor-pointer w-[84px] h-[84px] border-2 ${
              mainImage === image
                ? 'border-orange-400 opacity-70'
                : 'border-transparent'
            }`}
            src={image}
            key={index}
            alt={`Thumbnail image ${index}`}
          />
        ))}
      </div>

      {isModal && (
        <div className="h-screen w-full bg-black/60 fixed flex justify-center items-center flex-col gap-4 inset-0 z-40">
          <div className="cursor-pointer w-[384px] flex justify-end pr-4">
            <MdOutlineClose
              className="text-3xl text-white hover:text-orange-400"
              onClick={() => setIsModal(false)}
            />
          </div>
          <div className="relative">
            <div
              onClick={goBack}
              className="absolute left-[-14px] text-2xl p-1 rounded-full bg-white top-[47%] cursor-pointer"
            >
              <FaChevronLeft className="hover:text-orange-400" />
            </div>
            <div
              onClick={goNext}
              className="absolute right-[-14px] text-2xl p-1 rounded-full bg-white top-[47%] cursor-pointer"
            >
              <FaChevronRight className="hover:text-orange-400" />
            </div>

            <Image
              className="w-[384px] h-[384px] rounded-3xl"
              alt="product image"
              src={mainImage}
            />
          </div>

          <div className="flex justify-between w-[384px]">
            {images.map((image, index) => (
              <Image
                onClick={() => {
                  setMainImage(image)
                  setIndex(index)
                }}
                className={`rounded-xl cursor-pointer w-[84px] h-[84px] border-2 ${
                  mainImage === image
                    ? 'border-orange-400 opacity-70'
                    : 'border-transparent'
                }`}
                src={image}
                key={index}
                alt={`Thumbnail image ${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
