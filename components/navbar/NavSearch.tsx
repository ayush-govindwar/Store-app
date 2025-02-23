import React from 'react'
import { Input } from '../ui/input'

function Navsearch() {
  return (
    <Input 
    type='search' 
    placeholder='search product...' 
    className='max-w-xs dark:bg-muted'
    /> //apply style only in dark mode
    
)
}

export default Navsearch