import { ButtonProps } from "@/interfaces/ButtonProps"

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md',
  className = ''
}) => {
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6'
  }

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  }

  return (
    <button 
      className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white ${className}`}
    >
      {title}
    </button>
  )
}

export default Button