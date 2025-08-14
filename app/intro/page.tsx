'use client'

import React from 'react'
import { AppleHelloVietnameseEffect, GitcuberEffect } from '@/components/apple-hello-effect'
import { useState } from 'react'
function Intro() {
  const [showName, setShowName] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <GitcuberEffect
        className="h-36"
        speed={1}
        onAnimationComplete={() => setShowName(true)}
      />
    </div>
  )
}

export default Intro