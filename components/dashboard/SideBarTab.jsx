import { Typography } from '@arco-design/web-react'

const SideBarTab = ({ title, icon, currentTab, setCurrentTab }) => {
  return (
    <div
      onClick={() => setCurrentTab(title)}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: currentTab === title ? '#f6f6f6' : '#ffffff',
        transition: 'all 0.5s ease-in-out',
        width: '100%',
        padding: '0 20px',
      }}
      className="responsive-sidebar-menu"
    >
      {icon}

      <Typography.Title
        style={{
          margin: '1rem',
          color: currentTab === title ? '#165DFF' : '#181413',
          transition: 'all 0.5s ease-in-out',
        }}
        className="responsive-desktop"
        bold
        heading={4}
      >
        {title}
      </Typography.Title>
    </div>
  )
}

export default SideBarTab
