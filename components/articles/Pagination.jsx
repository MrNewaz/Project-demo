import { Pagination } from '@arco-design/web-react'

const ArticlePagination = ({ articles, setCurrentPage }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pagination
        onChange={(page) => setCurrentPage(page)}
        showTotal={(total, range) => (
          <span>{`${range[0]} - ${range[1]} of ${total} items`}</span>
        )}
        total={articles.length}
      />
    </div>
  )
}

export default ArticlePagination
