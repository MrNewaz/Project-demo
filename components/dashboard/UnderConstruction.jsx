import { IconSync } from '@arco-design/web-react/icon'

const UnderConstruction = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconSync spin style={{ fontSize: 40 }} />
      <h1 align="left" variant="h2">
        UnderConstruction
      </h1>
    </div>
  )
}

export default UnderConstruction
