"use client"

import { toast } from "react-hot-toast"

export default function Docs() {
  return (
    <strong
      onClick={() =>
        toast.error("We're working hard to bring this functionality soon!")
      }
    >
      Docs
    </strong>
  )
}
