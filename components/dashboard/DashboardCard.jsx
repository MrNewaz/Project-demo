import { Button, Card, Space, Tag, Typography } from '@arco-design/web-react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const DashboardCard = ({ title, value, subtitle, button, path, image }) => {
  const router = useRouter()
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
          <Typography.Title style={{ marginTop: 0 }} heading={4}>
            {title}
          </Typography.Title>
          <Tag
            size="large"
            color="arcoblue"
            style={{ padding: '0 2rem', margin: '1rem 0' }}
          >
            {value}
          </Tag>
          <Tag size="small" color="red">
            {subtitle}
          </Tag>

          <Button
            onClick={() => router.push(path)}
            style={{ marginTop: '2rem', padding: '0 2rem' }}
            size="large"
            type="primary"
          >
            {button}
          </Button>
        </Space>
        <Image
          className="responsive-desktop"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
      </Space>
    </Card>
  )
}

export default DashboardCard
