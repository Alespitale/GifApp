export const GifItem = ({title, url}) => {

  return (
    <div className="card">
        <img src={url} alt="gif" />
        <p>{title}</p>
    </div>
  )
}