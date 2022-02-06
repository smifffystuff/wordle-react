const Key = ({ letter }) => {
  const onPressed = () => {
    console.log(`Key ${letter} pressed`)
  }

  return (
    <button className='key' onClick={onPressed}>
      {letter}
    </button>
  )
}

export default Key
