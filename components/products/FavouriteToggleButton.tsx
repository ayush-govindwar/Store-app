import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Button } from '../ui/button'
function FavouriteToggleButton({productId}:{productId:String}) {
  return (
    <Button size='icon' variant='ghost' className='p-2 cursor'>
        <FaHeart/>
    </Button>
    
    
  )
}

export default FavouriteToggleButton