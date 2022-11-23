import { Grid, Typography } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { useState } from 'react'
import ArticleCard from '../../components/articles/ArticleCard'
import ArticlePagination from '../../components/articles/Pagination'
import articles from '../../data/articles'
const Row = Grid.Row
const Col = Grid.Col

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastArticle = currentPage * 10
  const indexOfFirstArticle = indexOfLastArticle - 10
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )

  return (
    <div style={{ padding: '2rem' }}>
      <Typography.Title
        style={{ marginTop: 0, textDecoration: 'underline' }}
        heading={2}
      >
        All Articles
      </Typography.Title>
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
