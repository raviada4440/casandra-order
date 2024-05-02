'use client'

// React imports
import { useEffect, useState } from 'react'

// Component imports
import VerticalNav, { Menu } from '@menu/vertical-menu'
import { GenerateVerticalMenu } from '@/components/GenerateMenu'

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await fetch('https://mocki.io/v1/52954c56-974e-4977-8bc0-1c0fc3a1e4d3')
      const data = await res.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        {isLoading ? (
          <div className='p-4'>Loading...</div>
        ) : (
          <Menu
            popoutMenuOffset={{ mainAxis: 10 }}
            menuItemStyles={{
              button: { paddingBlock: '12px' },
              subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
            }}
          >
            <GenerateVerticalMenu menuData={sidebarMenuData} />
          </Menu>
        )}
      </Menu>
    </VerticalNav>
  )
}

export default MenuWithAPI
