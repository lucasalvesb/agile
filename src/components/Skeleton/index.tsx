import './styles.css'

const Skeleton = () => {
  return (
    <div className='skeleton'>
      <div className='skeleton line h15 w25'></div>
      <div className='skeleton line h20 w40'></div>
      <div className='skeleton line h15 w75'></div>
    </div>
  )
}

export default Skeleton