"use client"; // Ensures this is a client component

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react"; // Assuming you're using Lucide icons
import { useForm, Controller } from "react-hook-form";

export default function InputFile() {
  const { control } = useForm(); // Using react-hook-form for form management
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (selectedFiles: FileList) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prevFiles) => [...prevFiles, ...fileArray]);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // Reset the input value to allow re-selection of the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Attach Files</Label>

      <Controller
        name="pictures"
        control={control}
        render={({ field }) => (
          <>
            <Input
              id="picture"
              type="file"
              multiple
              ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files) {
                  handleFilesChange(e.target.files);
                  field.onChange([...files, ...Array.from(e.target.files)]);
                }
              }}
            />

            {/* Display chosen file count */}
            <div className="mt-2">
              {files.length > 0 ? (
                <p>
                  {files.length} {files.length > 1 ? "files" : "file"} chosen
                </p>
              ) : (
                <p>No files chosenssss</p>
              )}
            </div>

            {/* Display selected files */}
            {files.length > 0 && (
              <div className="mt-2">
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-2 border rounded-lg"
                    >
                      <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap text-sm w-3/4">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveFile(index);
                          field.onChange(files.filter((_, i) => i !== index));
                        }}
                        className="text-red-500"
                      >
                        <X size={20} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
}
