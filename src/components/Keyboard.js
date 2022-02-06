import Key from './Key'

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='key-row-1'>
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
        <Key letter='<<' />
      </div>
      <div className='key-row-2'>
        <Key letter='A' />
        <Key letter='S' />
        <Key letter='D' />
        <Key letter='F' />
        <Key letter='G' />
        <Key letter='H' />
        <Key letter='J' />
        <Key letter='K' />
        <Key letter='L' />
        <Key letter='??' />
      </div>
      <div className='key-row-3'>
        <Key letter='Z' />
        <Key letter='X' />
        <Key letter='C' />
        <Key letter='V' />
        <Key letter='B' />
        <Key letter='N' />
        <Key letter='M' />
      </div>
    </div>
  )
}

export default Keyboard
