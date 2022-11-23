import { Card, Image, Typography } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { useRouter } from 'next/router'
import articles from '../../data/articles'

const SingleArticle = () => {
  const router = useRouter()
  const { id } = router.query
  const filteredArticle = articles.find((item) => item.id === parseInt(id))
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), 
                url(${filteredArticle?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Card
          style={{
            width: 'fit-content',
            blockSize: 'fit-content',
            margin: '2rem',
          }}
        >
          <Image
            width="100%"
            src={filteredArticle?.image}
            alt={filteredArticle?.title}
          />
        </Card>

        <Typography.Title
          style={{
            marginTop: 0,
            padding: '2rem',
            color: '#fafafa',
          }}
        >
          {filteredArticle?.title}
        </Typography.Title>
        <Typography.Title
          heading={6}
          style={{
            marginTop: 0,
            padding: '0 2rem',
            color: '#fafafa',
          }}
        >
          Created at: {filteredArticle?.date}
        </Typography.Title>
        <Typography.Title
          heading={5}
          style={{
            marginTop: 0,
            padding: '0 2rem',
            color: '#fafafa',
          }}
        >
          {filteredArticle?.description}
        </Typography.Title>
      </div>
    </div>
  )
}

export default SingleArticle
