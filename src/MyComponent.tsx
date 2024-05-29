import React from 'react'
import ReactTransition from './components/ReactTransition'
import './styles.css'
interface MyComponentProps {
  message: string
}

const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <div className='App'>
      <ReactTransition />
    </div>
  )
}

export default MyComponent
