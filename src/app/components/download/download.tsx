"use client"
import React from 'react';

export default function Download() {
    return (
        <div className="flex flex-col items-center space-y-4 bg-gray-100 p-8">
            {/* Google Play Button */}
            <button
                onClick={() => window.location.href = 'https://play.google.com/store'}
                className="flex items-center justify-center w-56 h-12 bg-white text-black rounded-lg"
                aria-label="Get it on Google Play"
            >
                <img src="/path-to-google-play-icon.png" alt="Google Play" className="w-5 h-5 mr-2" />
                GET IT ON GOOGLE PLAY
            </button>

            {/* App Store Button */}
            <button
                onClick={() => window.location.href = 'https://www.apple.com/ios/app-store/'}
                className="flex items-center justify-center w-56 h-12 bg-white text-black rounded-lg"
                aria-label="Download on the App Store"
            >
                <img src="/path-to-app-store-icon.png" alt="App Store" className="w-5 h-5 mr-2" />
                DOWNLOAD ON THE APP STORE
            </button>
        </div>
    )

}