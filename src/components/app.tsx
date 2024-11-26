"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import axios from "axios";

// API constants
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
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          "Error shortening link. Please try again."
      );
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
    <div className="flex flex-col items-center space-y-6 p-6 bg-[#F7FAFC] rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[#333333] text-3xl font-semibold">LinkZy</h1>
        <p className="text-[#333333] text-lg mt-2">
          Fast, Clean, and Shareable Links — Instantly
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col space-y-2">
          <Input
            type="url"
            placeholder="Enter URL"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
            required
            aria-label="Enter the URL to shorten"
            className="border p-2 rounded-lg w-full"
          />

          <button
            type="submit"
            aria-label="Submit URL for shortening"
            className="bg-[#4caf50] text-white py-2 px-4 rounded-md hover:bg-green-600 w-full tracking-wide font-semibold text-lg"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </div>

        {/* Error Message */}
        {error && <div className="text-[#FF6347] text-sm mt-2">{error}</div>}
      </form>

      {/* Shortened URL Section */}
      {shortLink && (
        <div className="w-full max-w-md flex flex-col items-center mt-4 space-y-4">
          <Input
            type="text"
            value={shortLink}
            readOnly
            className="border p-2 rounded-lg w-full"
          />

          <Button
            onClick={handleCopy}
            className="bg-[#007BFF] text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            aria-label="Copy shortened URL to clipboard"
          >
            <CopyIcon />
            <span>Copy</span>
          </Button>
        </div>
      )}
    </div>
  );
}
