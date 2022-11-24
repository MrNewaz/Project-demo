import { Button, Card, Image, Typography } from '@arco-design/web-react'
import { useRouter } from 'next/router'
const { Meta } = Card

const ArticleCard = ({ article }) => {
  const router = useRouter()
  return (
    <Card
      hoverable
      cover={
        <div style={{ height: 200, overflow: 'hidden' }}>
          <Image
            style={{ width: '100%', transform: 'translateY(-20px)' }}
            alt={article.title}
            src={article.image}
          />
        </div>
      }
    >
      <Meta
        style={{ cursor: 'pointer' }}
        onClick={() => router.push(`/article/${article.id}`)}
        title={
          <Typography.Title style={{ marginTop: 0 }} heading={3}>
            {article.title}
          </Typography.Title>
        }
        description={
          <div>
            <Typography.Text className="line-clamp-2">
              {article.description}
            </Typography.Text>
            <br />
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography.Text type="secondary">
                Created at: {article.date}
              </Typography.Text>
              <Button style={{ padding: '0 2rem' }} size="large" type="primary">
                View
              </Button>
            </div>
          </div>
        }
      />
    </Card>
  )
}

export default ArticleCard
