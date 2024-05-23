import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

/*import './index.css'

const EventItem = props => {
  const {Details, CheckStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = Details
  const DisplayStatus = () => {
    CheckStatus(registrationStatus)
  }
  return (
    <li key={id}>
      <button className="EachEvent" type="button" onClick={DisplayStatus}>
        <img src={imageUrl} alt="event" className="eachImg" />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
*/
