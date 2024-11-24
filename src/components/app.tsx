"use client"; 
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 
import { CopyIcon } from "lucide-react"; 
import axios from "axios"; 


// api
const BITLY_API_URL = "https://api-ssl.bitly.com/v4/shorten";
const BITLY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_BITLY_ACCESS_TOKEN;

export default function RunTime(){

    

    // states
        const [originalLink, setOriginalLink] = useState<string>("");
        const [shortLink, setShortLink] = useState<string>("");
        const [error, setError] = useState<string | null>(null);

        // form submission handler
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setError(""); //resets error state, 
            setShortLink(""); //resets url state
            try {
                const response = await axios.post(
                    BITLY_API_URL,
                    {
                        long_url: originalLink,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                setShortLink(response.data.link);
            } catch (error) {
            setError("Error shortening link. Please try again."); //err if fails
        }
    };
        const handleCopy = () => {
            navigator.clipboard.writeText(shortLink);
            alert("URL is copied.!");
          };
   
          // -------------------------------------------------------------------------------
return (
    <div>
        <div>
            <div>
                <h1>.LinkZy</h1>
                <p>Fast, Clean, and Shareable Links — Instantly</p>
            </div>


            {/* ---------------------------------- */}
            <form onSubmit={handleSubmit}>
                <div>
                    <Input
                    type="url"
                    placeholder="Enter URL"
                    value={originalLink}
                    onChange={(e) => setOriginalLink(e.target.value)}
                    required
                    />

                    <button
                    type="submit">
                        SHorten
                    </button>
                    
                </div>

                {/* ----------------------------------ERROR MSG */}
                {error && <div>{error}</div>}

                {/* ----------------------------------SHORTENED LINK */}
                {shortLink && (
                    <div>
                        <Input
                        type="text"
                        value={shortLink}
                        readOnly
                        
                        />

                        <Button
                        onClick={handleCopy}
                        size="icon"
                        >
                            <CopyIcon />
                            <span>Copy</span>
                        </Button>
                    </div>
                )}
            </form>
        </div>
    </div>
)
   
        };


