import './alert.css'

export const Alert = ({message}) => {
  return (
    <div className='alert-auth'>
        <span>{message}</span>
    </div>
  )
}

