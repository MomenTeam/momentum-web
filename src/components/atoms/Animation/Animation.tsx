import { Lottie } from '@crello/react-lottie'
import React, { PropsWithChildren } from 'react'

export interface IAnimation {
  animationData: any
  loop: boolean
  autoplay: boolean
  width: string
  height: string
}

function Animation(props: PropsWithChildren<IAnimation>) {
  return (
    <Lottie
      width={props.width}
      height={props.height}
      config={{
        animationData: props.animationData,
        loop: props.loop,
        autoplay: props.autoplay,
      }}
    />
  )
}

export default Animation
