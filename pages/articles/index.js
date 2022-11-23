import { Card, Divider, Grid, Typography } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { IconDoubleLeft } from '@arco-design/web-react/icon'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ArticleCard from '../../components/articles/ArticleCard'
import ArticlePagination from '../../components/articles/Pagination'
import articles from '../../data/articles'
const Row = Grid.Row
const Col = Grid.Col

const Articles = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastArticle = currentPage * 10
  const indexOfFirstArticle = indexOfLastArticle - 10
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )

  return (
    <div style={{ padding: '2rem' }}>
      <Card style={{ margin: '0 0 2rem 0' }}>
        <div
          onClick={() => router.push('/')}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <IconDoubleLeft fontSize="30px" />
          <Typography.Title style={{ margin: 0 }} heading={5}>
            Go Back
          </Typography.Title>
        </div>
        <Divider />
        <Typography.Title style={{ margin: 0 }} heading={3}>
          All Articles
        </Typography.Title>
      </Card>
      <Row gutter={40}>
        {currentArticles.map((article) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            key={article.id}
            style={{ marginBottom: '2rem' }}
          >
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
      <ArticlePagination articles={articles} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Articles
