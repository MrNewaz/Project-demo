import Dashboard from './Dashboard'
import UnderConstruction from './UnderConstruction'

const MainBody = ({ currentTab, setCurrentTab }) => {
  return (
    <div>
      {currentTab === 'DashBoard' && <Dashboard />}
      {currentTab === 'Payment' && <UnderConstruction />}
      {currentTab === 'Logout' && <UnderConstruction />}
    </div>
  )
}

export default MainBody
