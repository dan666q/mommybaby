import { ROUTE_PATHS } from '@/router'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={ROUTE_PATHS.ROOT}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  )
}
