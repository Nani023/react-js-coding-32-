import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATION_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registrationDetails{' '}
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned, We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered"
      />
      <p className="registered-view-description">
        You have already registered for the event
      </p>
    </div>
  )

  const renderYetToRegisteredView = () => (
    <div className="yet-to-registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        className="yet-to-register-image"
        alt="yet to register"
      />
      <p className="yet-to-registered-view">
        A live performance bring so much to your relationship with dance.
        Sleeping dance live can can often make you fall totally in love with
        this beautiful heart form.
      </p>
      <button className="registered-here" type="button">
        Register here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisteredView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
