import React, { useState } from "react"
import { AddCategory } from '../components/AddCategory'
import { GifGrid } from '../components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <ol>
        {
          categories.map( (category, idx) =>
            <GifGrid
              key={`category-${idx}`}
              category= { category }
            />
          )
        }
      </ol>
    </div>
  )
}
