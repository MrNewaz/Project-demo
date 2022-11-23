import { Grid } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { useState } from 'react'
import MainBody from '../components/dashboard/MainBody'
import SideBar from '../components/dashboard/SideBar'
import Header from '../components/Header/Header'
const Row = Grid.Row
const Col = Grid.Col

export default function Home() {
  const [currentTab, setCurrentTab] = useState('DashBoard')
  return (
    <div>
      <Header />

      <main>
        <Row>
          <Col
            style={{
              height: '100vh',
              background: '#ffffff',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              position: 'sticky',
              top: 0,
            }}
            xs={4}
            sm={10}
            md={10}
            lg={6}
            xl={4}
          >
            <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </Col>
          <Col xs={20} sm={14} md={14} lg={18} xl={20}>
            <MainBody currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </Col>
        </Row>
      </main>
    </div>
  )
}
