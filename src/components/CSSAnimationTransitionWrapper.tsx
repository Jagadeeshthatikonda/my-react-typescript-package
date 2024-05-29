import React, { useState, useEffect } from 'react'
import './styles.css'

interface CSSAnimationTransitionWrapperProps {
  timeout: number
  show: boolean
  customClassName: string
  unmountOnExit: boolean
  children: React.ReactElement
}

const CSSAnimationTransitionWrapper = (props: CSSAnimationTransitionWrapperProps): React.ReactElement | null => {
  const { timeout, customClassName, show, unmountOnExit } = props

  const [showComponent, setShowComponent] = useState<boolean>(show)

  useEffect(() => {
    if (show) {
      setShowComponent(true)
      return
    }

    if (!unmountOnExit) {
      return
    }

    const timeoutId = setTimeout(() => {
      setShowComponent(false)
    }, timeout)

    return () => {
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line
  }, [show])

  return showComponent ? <div className={`css-animation-transition ${customClassName}`}>{props.children}</div> : null
}

export default CSSAnimationTransitionWrapper
