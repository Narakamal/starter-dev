// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Manajemen Inventaris',
    href: '/inventory',
    icon: 'ri-archive-line'
  },
  {
    label: 'About',
    href: '/about',
    icon: 'ri-information-line'
  }
]

export default verticalMenuData
