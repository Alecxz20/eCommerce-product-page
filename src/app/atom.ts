import { atom } from 'jotai'
import { StaticImageData } from 'next/image'

export const quantityAtom = atom(0)

type productAtomType = {
  image: string | StaticImageData
  name: string
  price: number
  quantity: number
}

export const productAtom = atom<productAtomType | null>(null)

