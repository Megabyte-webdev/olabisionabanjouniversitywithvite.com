import notifications from '../briefs.json'
const Notifications = () => {
  return (
    notifications.map((item, index)=>{
      return <li key={index} >{item.notification}</li>
    })
  )
}

export default Notifications