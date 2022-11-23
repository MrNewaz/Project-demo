import { Button, Card, Space, Typography } from '@arco-design/web-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import article from '../../assets/newspaper.png'

const ArticleCard = () => {
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
          <Typography.Title style={{ marginTop: 0 }} heading={3}>
            Total Number of Articles
          </Typography.Title>
          <Typography.Text style={{ fontSize: '1.4rem' }}>25</Typography.Text>
          <Typography.Text disabled style={{ cursor: 'text' }}>
            Remaining storage: 100
          </Typography.Text>
          <Button
            onClick={() => router.push('/articles')}
            style={{ marginTop: '4rem', padding: '0 2rem' }}
            size="large"
            type="primary"
          >
            Show Articles
          </Button>
        </Space>
        <Image
          className="responsive-desktop"
          src={article}
          alt="Article"
          width={100}
          height={100}
        />
      </Space>
    </Card>
  )
}

export default ArticleCard
