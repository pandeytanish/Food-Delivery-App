import React from 'react'
import Hotellist from './HotelList'
function Hotel() {
  return (
    <div>
    <h2>Hotel List </h2>
<ul>
{Hotellist.map(Hotels => (
    <li key={Hotels.id}>{Hotels.name}</li>
))}
</ul>
</div>
  )
}

export default Hotel