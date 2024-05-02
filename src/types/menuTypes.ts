// React Imports
import type { ReactNode } from 'react'

// Type Imports
import type {
  SubMenuProps as VerticalSubMenuProps,
  MenuItemProps as VerticalMenuItemProps,
  MenuSectionProps as VerticalMenuSectionProps
} from '@menu/vertical-menu'
import type {
  SubMenuProps as HorizontalSubMenuProps,
  MenuItemProps as HorizontalMenuItemProps
} from '@menu/horizontal-menu'

// Vertical Menu Data
export type VerticalMenuItemDataType = Omit<VerticalMenuItemProps, 'children' | 'icon'> & {
  label: ReactNode
  icon?: string
}
export type VerticalSubMenuDataType = Omit<VerticalSubMenuProps, 'children' | 'icon'> & {
  children: VerticalMenuDataType[]
  icon?: string
}
export type VerticalSectionDataType = Omit<VerticalMenuSectionProps, 'children'> & {
  isSection: boolean
  children: VerticalMenuDataType[]
}
export type VerticalMenuDataType = VerticalMenuItemDataType | VerticalSubMenuDataType | VerticalSectionDataType

// Horizontal Menu Data
export type HorizontalMenuItemDataType = Omit<HorizontalMenuItemProps, 'children' | 'icon'> & {
  label: ReactNode
  icon?: string
}
export type HorizontalSubMenuDataType = Omit<HorizontalSubMenuProps, 'children' | 'icon'> & {
  children: HorizontalMenuDataType[]
  icon?: string
}
export type HorizontalMenuDataType = HorizontalMenuItemDataType | HorizontalSubMenuDataType
