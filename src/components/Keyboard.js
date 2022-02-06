import Key from './Key'

const Keyboard = () => {
  return (
    <>
      <div className='keyboard'>
        <Key letter='Q' />
        <Key letter='W' />
        <Key letter='E' />
        <Key letter='R' />
        <Key letter='T' />
        <Key letter='Y' />
        <Key letter='U' />
        <Key letter='I' />
        <Key letter='O' />
        <Key letter='P' />
        <div className='space'></div>
        <Key letter='A' />
        <Key letter='S' />
        <Key letter='D' />
        <Key letter='F' />
        <Key letter='G' />
        <Key letter='H' />
        <Key letter='J' />
        <Key letter='K' />
        <Key letter='L' />
        <div className='space'></div>
        <Key letter='Z' />
        <Key letter='X' />
        <Key letter='C' />
        <Key letter='V' />
        <Key letter='B' />
        <Key letter='N' />
        <Key letter='M' />
        <Key letter='DELETE' size='large' />
        <Key letter='SUBMIT' size='large' />
      </div>
    </>
  )
}

export default Keyboard
