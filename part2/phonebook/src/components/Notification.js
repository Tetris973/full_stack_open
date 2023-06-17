// notification component
const Notification = ({ message, type }) => {
  if (message === null || message === '' || type === null || type === '') {
    return null
  }

  switch (type) {
    case 'success':
      return <div className="success">{message}</div>
    case 'error':
      return <div className="error">{message}</div>
    default:
      return null
  }
}

export default Notification
