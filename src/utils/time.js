export const getTimestamp = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  return new Date().getTime().toString() + randomNumber
}
