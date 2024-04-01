import { FC, ReactNode } from 'react'

type TButton = {
    children: ReactNode
}

export const Button: FC<TButton> = ({ children }) => {
  return (
    <button>{ children }</button>
  )
}
