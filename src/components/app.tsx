"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";

// API var
const TINYURL_API = "https://tinyurl.com/api-create.php?url=";

export default function RunTime() {
  // State management
  const [originalLink, setOriginalLink] = useState<string>("");
  const [shortLink, setShortLink] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // submit handler function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShortLink(""); // Reset URL
    setLoading(true); // Start loading

    try {
      const response = await axios.get(
        `${TINYURL_API}${encodeURIComponent(originalLink)}`
      );
      setShortLink(response.data); //returns expected response directly
    } catch (error: unknown) {
      if (axios.isAxiosError(error)){
        
          setError(
            error?.response?.data?.message ||
              "Error shortening link. Please try again."
          );
      } else {
        setError("An unexpected error occurred.!")
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Clipboard copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    alert("URL is copied!");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-black to-fuchsia-950 flex flex-col">
     

      {/* BODY */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 m-auto bg-gradient-to-tr from-fuchsia-800 to-black rounded-xl sm:max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold">LinkZy</h1>
          <h3 className="text-[#c5b9b9] text-lg mt-2">
            Fast, Clean, and Shareable Links — Instantly
          </h3>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="relative w-full space-x-0">
            {/* Input Field */}
            <Input
              type="url"
              placeholder="Your Link here..."
              value={originalLink}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setOriginalLink(e.target.value)}
              required
              aria-label="Enter the URL to shorten"
              className="border border-purple-300 rounded-full  text-white p-3 pl-4 pr-16 w-full placeholder:opacity-25 focus:ring-2 focus:ring-fuchsia-600 focus:transition-all duration-300 py-6"
            />

            {/* Shorten Button */}
            <button
              type="submit"
              aria-label="Submit URL for shortening"
              className="absolute right-0 top-0 bottom-0 rounded-full px-6 py-2 text-md font-semibold bg-gradient-to-l from-fuchsia-800 tracking-wide text-white  transition-transform ease-in-out duration-300 active:opacity-70"
              disabled={loading}
            >
              {loading ? "Shortening..." : "Shorten"}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-[#fff3cd] text-[#856404] border-l-4 border-[#f44336] p-4 rounded-lg text-sm mt-4">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2"/>
              {error}
            </div>
          )}
        </form>

        {/* Output Section */}
        {shortLink && (
          <div className="w-full flex flex-col items-center mt-4 space-y-4">
            <Input
              type="text"
              value={shortLink}
              readOnly
              className="border p-3 py-6 text-center rounded-lg w-full bg-transparent border-dashed text-white pb-10 -mb-8"
            />

            <Button
              onClick={handleCopy}
              className="bg-[#9f4caa] text-white py-3 px-6 rounded-md hover:bg-[#9f4caa] hover:scale-105 w-full sm:w-auto transition-transform ease-in-out duration-200 -mt-10 active:bg-opacity-95"
              aria-label="Copy shortened URL to clipboard"
            >
              <CopyIcon className="mr-2" />
              <span>Copy</span>
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-[#cf7ddd] text-sm">
          &apos; Made by{" "}
            <a href="https://tinyurl.com/26clt3od" className="hover:text-white transition-colors duration-150 ease-in-out">Aqsaa Qaazi</a> . &apos;
          </p>
        </div>
      </div>
    </div>
  );


}
