import { Avatar, Grid, Input } from '@arco-design/web-react'
import { IconNotification, IconUser } from '@arco-design/web-react/icon'
import money from '../../assets/money.png'
import article from '../../assets/newspaper.png'
import account from '../../assets/personal.png'
import DashboardCard from './DashboardCard'
const InputSearch = Input.Search
const Row = Grid.Row
const Col = Grid.Col

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <InputSearch
          allowClear
          placeholder="Enter keyword to search"
          style={{ width: 350, height: 40, border: '1px solid lightgrey' }}
        />
        <div className="responsive-nav-icons">
          <IconNotification style={{ fontSize: 40, marginRight: 20 }} />
          <Avatar style={{ backgroundColor: '#3370ff' }}>
            <IconUser />
          </Avatar>
        </div>
      </div>

      <Row gutter={40}>
        <Col xs={24} sm={24} md={12}>
          <DashboardCard
            title="Your Total Balance"
            value="৳1000"
            subtitle="Next bill due on: 13 days."
            button="Pay"
            image={money}
            path="/"
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <DashboardCard
            title="Total Number of Articles"
            value="25"
            subtitle="Remaining storage: 100"
            button="Show Articles"
            image={article}
            path="/articles"
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <DashboardCard
            title="Total Number of User"
            value="12"
            subtitle="Remaining slots: 5"
            button="Invite"
            image={account}
            path="/"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
