import { Button, Card, Space, Typography } from '@arco-design/web-react'
import Image from 'next/image'
import account from '../../assets/personal.png'

const AccountCard = () => {
  return (
    <Card hoverable style={{ margin: '2rem 0' }}>
      <Space
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Space
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Typography.Title style={{ marginTop: 0 }} heading={3}>
            Total Number of User
          </Typography.Title>
          <Typography.Text style={{ fontSize: '1.4rem' }}>12</Typography.Text>
          <Typography.Text disabled style={{ cursor: 'text' }}>
            Remaining slots: 5
          </Typography.Text>
          <Button
            style={{ marginTop: '4rem', padding: '0 2rem' }}
            size="large"
            type="primary"
          >
            Invite
          </Button>
        </Space>
        <Image
          className="responsive-desktop"
          src={account}
          alt="Account"
          width={100}
          height={100}
        />
      </Space>
    </Card>
  )
}

export default AccountCard
