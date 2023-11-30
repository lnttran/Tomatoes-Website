"use client"
import React from 'react';
import Image from 'next/image'
import appleIcon from 'public/images/apple-logo.png'
import googleIcon from 'public/images/google.png'

export default function Download() {
    return (
        <div className="flex flex-row items-center gap-8">
            {/* Google Play Button */}
            <button
                onClick={() => window.location.href = 'https://play.google.com/store'}
                className="flex items-center justify-center w-56 h-30 bg-white text-black rounded-lg"
                aria-label="Get it on Google Play"
            >
                <Image src={googleIcon} alt="Google Play" className="mr-2" width={50} height={50} />
                GET IT ON GOOGLE PLAY
            </button>

            {/* App Store Button */}
            <button
                onClick={() => window.location.href = 'https://www.apple.com/ios/app-store/'}
                className="flex items-center justify-center w-56 h-30 bg-white text-black rounded-lg"
                aria-label="Download on the App Store"
            >
                <Image src={appleIcon} alt="App Store" className="mr-2" width={50} height={50} />
                DOWNLOAD ON THE APP STORE
            </button>
        </div>
    )

}