// React Imports
import { useEffect, useRef } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
// import styled from '@emotion/styled'

// Type Imports
import type { Locale } from '@configs/i18n'

// import type { VerticalNavContextProps } from '@menu/contexts/verticalNavContext'

// Component Imports
import MaterioLogo from '@core/svg/Logo'

// Config Imports
// import themeConfig from '@configs/themeConfig'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// type LogoTextProps = {
//   isHovered?: VerticalNavContextProps['isHovered']
//   isCollapsed?: VerticalNavContextProps['isCollapsed']
//   transitionDuration?: VerticalNavContextProps['transitionDuration']
// }

// const LogoText = styled.span<LogoTextProps>`
//   font-size: 1.25rem;
//   line-height: 1.2;
//   font-weight: 600;
//   letter-spacing: 0.15px;
//   text-transform: uppercase;
//   transition: ${({ transitionDuration }) =>
//     `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

//   ${({ isHovered, isCollapsed }) =>
//     isCollapsed && !isHovered ? 'opacity: 0; margin-inline-start: 0;' : 'opacity: 1; margin-inline-start: 10px;'}
// `

const Logo = () => {
  // Refs
  const logoTextRef = useRef<HTMLSpanElement>(null)

  // Hooks
  const { isHovered, isCollapsed } = useVerticalNav()
  const { settings } = useSettings()
  const { lang: locale } = useParams()

  // Vars
  const { layout } = settings

  useEffect(() => {
    if (layout === 'horizontal' || !isCollapsed) {
      return
    }

    if (logoTextRef && logoTextRef.current) {
      if (isCollapsed && !isHovered) {
        logoTextRef.current?.classList.add('hidden')
      } else {
        logoTextRef.current.classList.remove('hidden')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, isCollapsed])

  // You may return any JSX here to display a logo in the sidebar header
  // return <Img src='/next.svg' width={100} height={25} alt='logo' /> // for example
  return (
    <Link href={getLocalizedUrl('/', locale as Locale)} className='flex items-center min-bs-[24px]'>
      <MaterioLogo className='text-[22px] text-primary' />
      {/* <LogoText
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={isCollapsed}
        transitionDuration={transitionDuration}
      >
        {themeConfig.templateName}
      </LogoText> */}
    </Link>
  )
}

export default Logo
