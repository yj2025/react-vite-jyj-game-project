import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/ui/layouts/MainLayout'
import LottoPage from '@/ui/pages/LottoPage'
import RspPage from '@/ui/pages/RspPage'
import BoardPage from '../ui/pages/BoardPage'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    loader: () => '로또',
    children: [
      {
        path: '/',
        loader: () => '로또',
        element: <LottoPage />,
      },
      {
        path: '/rsp',
        loader: () => '가위바위보',
        element: <RspPage />,
      },
      {
        path: 'boards',
        loader: () => '게시판',
        element: <BoardPage />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
