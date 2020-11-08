import App from './pages/App'

interface PageParamsType {
  name: string
  component: any
  default?: boolean
  config?: PageConfigType
}

interface PageConfigType {}

const pages: Array<PageParamsType> = [
  {
    component: App,
    name: 'index',
    default: true,
    config: {},
  },
]

const router = {
  pages,
}

export default router
