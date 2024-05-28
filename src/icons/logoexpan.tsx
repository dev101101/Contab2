import { IconsProps } from '../types/types'

const ExpanIcon: React.FC<IconsProps> = (props) => {
  return (
    <svg {...props} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5' />
    </svg>

  )
}

export default ExpanIcon
