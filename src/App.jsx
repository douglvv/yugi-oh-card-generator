import { useState } from 'react'
import Card from './components/Card/Card'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import defaultImg from '../src/assets/cardBack.jpg'
import axios from 'axios'

function App() {
  const [imageUrl, setImageUrl] = useState(defaultImg)
  const [cardName, setCardName] = useState("")

  async function fetchCard() {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
      const data = await response.data
      console.log(data)
      const url = data.card_images[0].image_url
      console.log(url)
      const name = data.name

      setImageUrl(url)
      setCardName(name)
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <>
      <Title />
      <Card imageUrl={imageUrl} cardName={cardName}/>
      <Button title="Generate a Card" onClick={fetchCard} />
    </>
  )
}

export default App
