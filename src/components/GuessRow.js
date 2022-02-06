import GuessCell from './GuessCell'

const GuessRow = ({ rowId }) => {
  return (
    <div className='guess-row'>
      <GuessCell rowId={rowId} cellId={1} />
      <GuessCell rowId={rowId} cellId={2} />
      <GuessCell rowId={rowId} cellId={3} />
      <GuessCell rowId={rowId} cellId={4} />
      <GuessCell rowId={rowId} cellId={5} />
    </div>
  )
}

export default GuessRow
