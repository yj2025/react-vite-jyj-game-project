import LottoPage from '@/ui/pages/LottoPage'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <LottoPage />,
    loader: () => '로또',
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
