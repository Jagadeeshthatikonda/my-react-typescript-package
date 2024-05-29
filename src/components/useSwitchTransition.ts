import { useState } from 'react'

const useSwitchTransition = (): {
  goToPreviousComponent: () => void
  goToNextComponent: () => void
  enterAnimation: string
  existAnimation: string
} => {
  const [enterAnimation, setEnterAnimation] = useState<string>('default')
  const [existAnimation, setExistAnimation] = useState<string>('')

  const goToPreviousComponent = (): void => {
    setEnterAnimation('fromLeftToCenter')
    setExistAnimation('fromCenterToRight')
  }

  const goToNextComponent = (): void => {
    setEnterAnimation('fromRightToCenter')
    setExistAnimation('fromCenterToLeft')
  }

  return {
    goToPreviousComponent,
    goToNextComponent,
    enterAnimation,
    existAnimation,
  }
}
export default useSwitchTransition
