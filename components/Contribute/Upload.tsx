"use client"

import { Database } from "@/types/supabase"
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs"
import React, { useState } from "react"
import toast from "react-hot-toast"
import Spinner, { Size } from "../Common/Spinner"

interface Props {
  user: User | null
}

export default function Upload({ user }: Props) {
  if (!user) return null

  const supabase = createClientComponentClient<Database>()

  const [uploading, setUploading] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFile(files[0])
    }
  }

  const onUpload = async () => {
    if (!file) return toast.error("please select a file to upload")

    try {
      setUploading(true)
      let filePath = `${user.id}/${file.name}`
      let { error }: { error: Error | null } = await supabase.storage
        .from("epubs")
        .upload(filePath, file)

      if (error) throw error
      toast.success(
        "file uploaded. analysis will begin shortly. please view your contributions to see the status of your upload. thank you for your contribution."
      )
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setFile(null)
      setUploading(false)
    }
  }

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center w-80">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            {file ? (
              <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 w-3/5 truncate">
                  File: <strong>{file.name}</strong> (
                  {Math.floor(file.size / 1000)} KB)
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  upload below or click to change
                </p>
              </>
            ) : (
              <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  .ePub files only
                </p>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept=".epub"
            onChange={onFileChange}
            disabled={uploading}
          />
        </label>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <button
          onClick={onUpload}
          disabled={uploading}
          className="flex items-center mx-auto bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background"
        >
          {uploading && (
            <span className="mr-4 ">
              <Spinner size={Size.small} />{" "}
            </span>
          )}
          <strong>upload & analyze</strong>
        </button>
      </div>
    </div>
  )
}
