'use client'
import { Player } from '@lottiefiles/react-lottie-player';

const PlayerAnimation = ({link}) => {
  return (
        <Player
           autoplay
           controls
           loop
           mode="normal"
           src={link}>
           </Player>
  )
}

export default PlayerAnimation
