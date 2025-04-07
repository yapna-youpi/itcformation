import "./title.css"

const Title = ({ subtitle1, subtitle2 , title }) => {
  return (
    <div>
      <div id="heading">
        <h1 className="font-semibold text-lime-900">{subtitle1} <span>{subtitle2}</span></h1>
        <h2 className="font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default Title
