import React from 'react'
import FoodList from './FoodList'

function Food() {
  return (
    <div>
    <h2>Food Category</h2>
    <ul>
      {FoodList.map(foodType => (
        <li key={foodType.id}>
          <div>
            <img src={foodType.img} alt={foodType.name} />
            <p>{foodType.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Food