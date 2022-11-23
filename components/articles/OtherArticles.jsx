import {
  Button,
  Card,
  Carousel,
  Image,
  Typography,
} from '@arco-design/web-react'
import { useRouter } from 'next/router'
import articles from '../../data/articles'

const OtherArticles = () => {
  const router = useRouter()
  return (
    <Card>
      <Carousel
        style={{ width: '100%', height: 300 }}
        autoPlay={true}
        indicatorType="dot"
        showArrow="hover"
      >
        {articles.map((article, index) => (
          <div key={index} style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <Typography.Title
                heading={5}
                style={{
                  margin: 0,
                }}
              >
                {article?.title}
              </Typography.Title>
              <Button
                onClick={() => router.push(`/article/${article.id}`)}
                type="primary"
                style={{ padding: '0 2rem' }}
                size="large"
              >
                View
              </Button>
            </div>
            <Image
              src={article?.image}
              style={{ width: '100%' }}
              alt={article?.title}
            />
          </div>
        ))}
      </Carousel>
    </Card>
  )
}

export default OtherArticles
