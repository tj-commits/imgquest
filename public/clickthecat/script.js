const petImageThatIsCorrect = document.getElementById('tobeclickedon')
const allPetImages = [...document.getElementsByClassName('petimage')]
const roundCounter = document.getElementById('round')
const round = parseInt(roundCounter.textContent)
const roundPlusOne = round + 1
petImageThatIsCorrect.addEventListener('click', () => {
  alert('Correct!')
  location.replace(`/clickthecat/round${roundPlusOne.toString()}/`)
})

allPetImages.forEach(petimage => {
  if (petimage.id === 'tobeclickedon') {
    console.log('dub')
    return
  }
  petimage.addEventListener('click', () => {
    location.replace('/clickthecat/wrong.html')
  })
})