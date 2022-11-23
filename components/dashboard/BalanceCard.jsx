import { Button, Card, Space, Typography } from '@arco-design/web-react'
import Image from 'next/image'
import money from '../../assets/money.png'

const BalanceCard = () => {
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
            Your Total Balance
          </Typography.Title>
          <Typography.Text style={{ fontSize: '1.4rem' }}>
            ৳1000
          </Typography.Text>
          <Typography.Text disabled style={{ cursor: 'text' }}>
            Next bill due on Nov, 28th, 2022.
          </Typography.Text>
          <Button
            style={{ marginTop: '4rem', padding: '0 2rem' }}
            size="large"
            type="primary"
          >
            Pay
          </Button>
        </Space>
        <Image
          className="responsive-desktop"
          src={money}
          alt="balance"
          width={100}
          height={100}
        />
      </Space>
    </Card>
  )
}

export default BalanceCard
