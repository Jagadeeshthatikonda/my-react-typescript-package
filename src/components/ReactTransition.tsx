import React, { useState } from 'react'
import CSSAnimationTransitionWrapper from './CSSAnimationTransitionWrapper'
import './styles.css'
import useSwitchTransition from './useSwitchTransition'

interface ComponentProps {
  navigateToPreviousComponent: (id: string) => void
  navigateToNextComponent: (id: string) => void
}

const Component1: React.FC<ComponentProps> = ({ navigateToNextComponent }) => (
  <div className={`component`}>
    <h2>Where Are You Going?</h2>
    <button className='nav-btn' onClick={() => navigateToNextComponent('C2')}>
      Next
    </button>
  </div>
)

const Component2: React.FC<ComponentProps> = ({ navigateToPreviousComponent, navigateToNextComponent }) => (
  <div className={`component`}>
    <h2>Check-in & Check-out</h2>
    <div className='date-picker'>
      <input type='date' className='date-input' />
      <input type='date' className='date-input' />
    </div>
    <div>
      <button className='nav-btn' onClick={() => navigateToPreviousComponent('C1')}>
        Prev
      </button>
      <button className='nav-btn' onClick={() => navigateToNextComponent('C3')}>
        Next
      </button>
    </div>
  </div>
)

const Component3: React.FC<ComponentProps> = ({ navigateToPreviousComponent }) => (
  <div className={`component`}>
    <h2>Number of People</h2>
    <div className='people-select'>
      <select className='select-input'>
        <option>1 Adult</option>
        <option>2 Adults</option>
        <option>1 Adult, 1 Child</option>
        <option>2 Adults, 1 Child</option>
      </select>
      <select className='select-input'>
        <option>1 Room</option>
        <option>2 Rooms</option>
        <option>3 Rooms</option>
      </select>
    </div>
    <button className='nav-btn' onClick={() => navigateToPreviousComponent('C2')}>
      Prev
    </button>
  </div>
)

const ReactTransition: React.FC = () => {
  const [activeComponentId, setActiveComponentId] = useState<string>('C1')

  const { enterAnimation, existAnimation, goToPreviousComponent, goToNextComponent } = useSwitchTransition()

  const prevComponent = (activeComponentId: string): void => {
    goToPreviousComponent()
    setActiveComponentId(activeComponentId)
  }

  const nextComponent = (activeComponentId: string): void => {
    goToNextComponent()
    setActiveComponentId(activeComponentId)
  }

  const renderComponent = (Component: React.FC<ComponentProps>, existingComponentId: string): React.ReactElement => (
    <CSSAnimationTransitionWrapper
      key={existingComponentId}
      show={activeComponentId === existingComponentId}
      customClassName={activeComponentId === existingComponentId ? enterAnimation : existAnimation}
      timeout={500}
      unmountOnExit={true}
    >
      <Component navigateToPreviousComponent={prevComponent} navigateToNextComponent={nextComponent} />
    </CSSAnimationTransitionWrapper>
  )

  return (
    <div className='transition-container'>
      {renderComponent(Component1, 'C1')}
      {renderComponent(Component2, 'C2')}
      {renderComponent(Component3, 'C3')}
    </div>
  )
}

export default ReactTransition
