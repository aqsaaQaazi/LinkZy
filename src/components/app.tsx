"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import axios from "axios";
import Head from "next/head";

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

    < >
    <div className=" h-[500px] w-full bg-gradient-to-r from-fuchsia-950 to-purple-500 flex flex-col">
    {/* // ---------------SEO Head Component-------------- */}

    <Head>
      <title>LinkZy - Free and Fast URL Shortener</title>
      <meta name="description" content="LinkZy lets you instantly shorten links with a hassle-free, fast, and shareable interface. No sign-up required, Simplify Link Management today.!" />
      <meta name="keywords" content="best free URL shortener for marketers ,URL shortener, link shortener, free short links, link trimmer, new link generator, new url generator tool, linkzy" />
    </Head>

    {/* // --------------BODY-------------------- */}
    <div className="flex flex-col items-center space-y-10 p-10 m-auto  bg-gradient-to-tr from-fuchsia-800 to-indigo-500  rounded-xl shadow-[10px_13px_73px_29px_rgba(236,_72,_153,_0.5)] sm:max-w-md">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[#ece7f0] text-3xl font-semibold">LinkZy</h1>
        <h3 className="text-[#c5b9b9] text-lg mt-2">
          Fast, Clean, and Shareable Links — Instantly
        </h3>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col space-y-2 text-white">
          <Input
            type="url"
            placeholder ="Your Link here..."
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
            required
            aria-label="Enter the URL to shorten"
            className="border border-fuchsia-400 rounded-full p-2 w-full placeholder:opacity-25"
          />

          <button
            type="submit"
            aria-label="Submit URL for shortening"
            className="border rounded-full px-2 py-2 opacity-100 shadow text-md normal-case font-light bg-purple-600 text-white shadow-blue-500/50 bg-transparent border-current"
            disabled={loading} 
          >
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </div>

        {/* Error */}
        {error && <div className="text-[#d6d8d8] text-sm mt-2">{error}</div>}
      </form>

      {/* output */}
      {shortLink && (
        <div className="w-full flex flex-col items-center mt-4 space-y-4">
          <Input
            type="text"
            value={shortLink}
            readOnly
            className="border p-2 rounded-lg w-full"
          />

          <Button
            onClick={handleCopy}
            className="bg-[#9f4caa] text-white py-2 px-4 rounded-md hover:bg-purple-600 w-full sm:w-auto"
            aria-label="Copy shortened URL to clipboard"
          >
            <CopyIcon />
            <span>Copy</span>
          </Button>
        </div>
      )}
<div>
  <p className="text-[#cf7ddd] text-sm mt-4">
          " Made by{" "}
          <a 
          href="https://tinyurl.com/26clt3od">Aqsaa Qaazi</a>
          . "</p>
</div>
    </div>
    </div>
    </>
  );
}

  
