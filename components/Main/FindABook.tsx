"use client"

import { toast } from "react-hot-toast"

export default function FindABook() {
  return (
    <strong
      onClick={() =>
        toast.error("We're working hard to bring this functionality soon!")
      }
    >
      find a book
    </strong>
  )
}
