import React from 'react'
import Canvas from './components/canvas/Canvas'
import Image from 'next/image'
const page = () => {
  return (
    <>
      {/* <Image
        src="/newImages/frame_0001.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
      <Canvas />
    </>
  );
}

export default page