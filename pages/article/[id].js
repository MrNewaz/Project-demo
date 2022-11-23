import { Typography } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { useRouter } from 'next/router'
import OtherArticles from '../../components/articles/OtherArticles'
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
        }}
      >
        <Typography.Title
          style={{
            marginTop: 0,
            padding: '2rem',
            color: '#fafafa',
            fontSize: '3rem',
          }}
        >
          {filteredArticle?.title}
        </Typography.Title>
        <Typography.Title
          heading={4}
          style={{
            marginTop: 0,
            padding: '0 2rem',
            color: '#fafafa',
          }}
        >
          Created at: {filteredArticle?.date}
        </Typography.Title>
        <Typography.Title
          heading={3}
          style={{
            marginTop: 0,
            padding: '0 2rem',
            color: '#fafafa',
          }}
        >
          {filteredArticle?.description}
        </Typography.Title>
        <br />
        <Typography.Title
          heading={3}
          style={{
            textAlign: 'center',
            marginTop: 0,
            padding: '0 2rem',
            color: '#fafafa',
          }}
        >
          Similar Articles
        </Typography.Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <OtherArticles />
        </div>
      </div>
    </div>
  )
}

export default SingleArticle
