import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails
  const eventImageClassName = isActive ? 'event-image-active ' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-details">
      <button className="button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} className="images" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
