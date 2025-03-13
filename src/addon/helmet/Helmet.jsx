
const Helmet = (props) => {

    // eslint-disable-next-line react/prop-types
    document.title = "PASEIC - " + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet