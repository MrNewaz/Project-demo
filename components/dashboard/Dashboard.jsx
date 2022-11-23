import { Avatar, Grid, Input } from '@arco-design/web-react'
import { IconNotification, IconUser } from '@arco-design/web-react/icon'
import AccountCard from './AccountCard'
import ArticleCard from './ArticleCard'
import { default as BalanceCard } from './BalanceCard'
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
          <BalanceCard />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <ArticleCard />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <AccountCard />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
