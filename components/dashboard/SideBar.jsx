import { Divider } from '@arco-design/web-react'
import {
  IconApps,
  IconDownCircle,
  IconImport,
} from '@arco-design/web-react/icon'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import SideBarTab from './SideBarTab'

const SideBar = ({ currentTab, setCurrentTab }) => {
  return (
    <div>
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image alt="logo" src={logo} className="responsive-sidebar-logo" />
      </div>
      <Divider />
      <SideBarTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="DashBoard"
        icon={
          <IconApps
            style={{
              margin: '16px',
              fontSize: '30px',
              color: currentTab === 'DashBoard' ? '#165DFF' : '#181413',
              transition: 'all 0.5s ease-in-out',
            }}
          />
        }
      />
      <SideBarTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="Payment"
        icon={
          <IconDownCircle
            style={{
              margin: '1rem',
              fontSize: '30px',
              color: currentTab === 'Payment' ? '#165DFF' : '#181413',
              transition: 'all 0.5s ease-in-out',
            }}
          />
        }
      />
      <SideBarTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="Logout"
        icon={
          <IconImport
            style={{
              margin: '1rem',
              fontSize: '30px',
              color: currentTab === 'Logout' ? '#165DFF' : '#181413',
              transition: 'all 0.5s ease-in-out',
            }}
          />
        }
      />
    </div>
  )
}

export default SideBar
