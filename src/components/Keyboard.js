import Key from './Key'

const Keyboard = () => {
  return (
    <>
      <div className='keyboard'>
        <Key letter='A' />
        <Key letter='B' />
        <Key letter='C' />
        <Key letter='D' />
        <Key letter='E' />
        <Key letter='F' />
        <Key letter='G' />
        <Key letter='H' />
        <Key letter='I' />
        <Key letter='J' />
        <Key letter='K' />
        <Key letter='L' />
        <Key letter='M' />
        <Key letter='N' />
        <Key letter='O' />
        <Key letter='P' />
        <Key letter='Q' />
        <Key letter='R' />
        <Key letter='S' />
        <Key letter='T' />
        <Key letter='U' />
        <Key letter='V' />
        <Key letter='W' />
        <Key letter='X' />
        <Key letter='Y' />
        <Key letter='Z' />
      </div>
      <div className='special-keys'>
        <Key letter='DELETE' />
        <Key letter='SUBMIT' />
      </div>
    </>
  )
}

export default Keyboard
