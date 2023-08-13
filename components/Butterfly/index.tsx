"use client"

import { useEffect } from "react"
import Init from "./init"

const ThreeModel = () => {
  useEffect(() => {
    Init()
  }, [])

  return (
    <div className="w-[33rem] h-[24rem]">
      <canvas id="canvas-butterfly" className="overflow-hidden mx-auto" />
    </div>
  )
}

export default ThreeModel
