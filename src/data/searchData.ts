// Third-party Imports
import type { Action } from 'kbar'

type SearchData = Action & {
  url: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'CRM',
    url: '/dashboards/crm',
    icon: 'ri-pie-chart-2-line',
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'ri-bar-chart-line',
    section: 'Dashboards'
  },
  {
    id: '3',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'ri-shopping-bag-3-line',
    section: 'Dashboards'
  },
  {
    id: '4',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'ri-calendar-line',
    section: 'Apps'
  },
  {
    id: '5',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'ri-file-list-3-line',
    section: 'Apps'
  },
  {
    id: '6',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview/4987',
    icon: 'ri-file-list-line',
    section: 'Apps'
  },
  {
    id: '7',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
    icon: 'ri-file-edit-line',
    section: 'Apps'
  },
  {
    id: '8',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'ri-file-add-line',
    section: 'Apps'
  },
  {
    id: '9',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'ri-file-user-line',
    section: 'Apps'
  },
  {
    id: '10',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'ri-file-list-2-line',
    section: 'Apps'
  },
  {
    id: '11',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'ri-shield-user-line',
    section: 'Apps'
  },
  {
    id: '12',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'ri-lock-unlock-line',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'ri-user-3-line',
    section: 'Pages'
  },
  {
    id: '14',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'ri-user-settings-line',
    section: 'Pages'
  },
  {
    id: '15',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'ri-question-line',
    section: 'Pages'
  },
  {
    id: '16',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'ri-money-dollar-circle-line',
    section: 'Pages'
  },
  {
    id: '17',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'ri-time-line',
    section: 'Pages'
  },
  {
    id: '18',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'ri-settings-2-line',
    section: 'Pages'
  },
  {
    id: '19',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'ri-error-warning-line',
    section: 'Pages'
  },
  {
    id: '20',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'ri-user-forbid-line',
    section: 'Pages'
  },
  {
    id: '21',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'ri-login-box-line',
    section: 'Pages'
  },
  {
    id: '22',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'ri-login-box-line',
    section: 'Pages'
  },
  {
    id: '23',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '24',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '25',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '26',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'ri-lock-password-line',
    section: 'Pages'
  },
  {
    id: '27',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'ri-lock-password-line',
    section: 'Pages'
  },
  {
    id: '28',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'ri-loop-right-line',
    section: 'Pages'
  },
  {
    id: '29',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'ri-loop-right-line',
    section: 'Pages'
  },
  {
    id: '30',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'ri-mail-check-line',
    section: 'Pages'
  },
  {
    id: '31',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'ri-mail-check-line',
    section: 'Pages'
  },
  {
    id: '32',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'ri-device-line',
    section: 'Pages'
  },
  {
    id: '33',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'ri-device-line',
    section: 'Pages'
  },
  {
    id: '34',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'ri-shopping-cart-2-line',
    section: 'Pages'
  },
  {
    id: '35',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'ri-building-4-line',
    section: 'Pages'
  },
  {
    id: '36',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'ri-gift-line',
    section: 'Pages'
  },
  {
    id: '37',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'ri-tv-2-line',
    section: 'Pages'
  },
  {
    id: '38',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'ri-article-line',
    section: 'Pages'
  },
  {
    id: '39',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'ri-bar-chart-box-line',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'ri-bar-chart-grouped-line',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Widget - Gamification',
    url: '/pages/widget-examples/gamification',
    icon: 'ri-file-image-line',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'ri-remixicon-line',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'ri-file-text-line',
    section: 'Forms & Tables'
  },
  {
    id: '44',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'ri-checkbox-multiple-line',
    section: 'Forms & Tables'
  },
  {
    id: '45',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'ri-equalizer-line',
    section: 'Forms & Tables'
  },
  {
    id: '46',
    name: 'React Table',
    url: '/react-table',
    icon: 'ri-table-alt-line',
    section: 'Forms & Tables'
  },
  {
    id: '47',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'ri-bar-chart-line',
    section: 'Charts'
  },
  {
    id: '48',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'ri-line-chart-line',
    section: 'Charts'
  },
  {
    id: '49',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/intro`,
    icon: 'ri-menu-add-line',
    section: 'Others'
  },
  {
    id: '50',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/typography`,
    icon: 'ri-text',
    section: 'User Interface'
  },
  {
    id: '51',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/icons`,
    icon: 'ri-remixicon-line',
    section: 'User Interface'
  },
  {
    id: '52',
    name: 'Card Basic',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/cards-basic`,
    icon: 'ri-rectangle-line',
    section: 'User Interface'
  },
  {
    id: '53',
    name: 'Card Actions',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/cards-actions`,
    icon: 'ri-toggle-line',
    section: 'User Interface'
  },
  {
    id: '54',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
    icon: 'ri-fullscreen-exit-line',
    section: 'Components'
  },
  {
    id: '55',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
    icon: 'ri-alert-line',
    section: 'Components'
  },
  {
    id: '56',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
    icon: 'ri-account-circle-line',
    section: 'Components'
  },
  {
    id: '57',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
    icon: 'ri-notification-badge-line',
    section: 'Components'
  },
  {
    id: '58',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
    icon: 'ri-download-2-line',
    section: 'Components'
  },
  {
    id: '59',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
    icon: 'ri-file-copy-line',
    section: 'Components'
  },
  {
    id: '60',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
    icon: 'ri-text-snippet',
    section: 'Components'
  },
  {
    id: '61',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
    icon: 'ri-tv-2-line',
    section: 'Components'
  },
  {
    id: '62',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
    icon: 'ri-list-ordered',
    section: 'Components'
  },
  {
    id: '63',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
    icon: 'ri-menu-line',
    section: 'Components'
  },
  {
    id: '64',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
    icon: 'ri-skip-right-line',
    section: 'Components'
  },
  {
    id: '65',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
    icon: 'ri-progress-3-line',
    section: 'Components'
  },
  {
    id: '66',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
    icon: 'ri-star-line',
    section: 'Components'
  },
  {
    id: '67',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
    icon: 'ri-message-3-line',
    section: 'Components'
  },
  {
    id: '68',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
    icon: 'ri-slideshow-4-line',
    section: 'Components'
  },
  {
    id: '69',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
    icon: 'ri-tv-2-line',
    section: 'Components'
  },
  {
    id: '70',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
    icon: 'ri-timeline-view',
    section: 'Components'
  },
  {
    id: '71',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
    icon: 'ri-notification-2-line',
    section: 'Components'
  },
  {
    id: '72',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
    icon: 'ri-layout-grid-line',
    section: 'Components'
  },
  {
    id: '73',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
    icon: 'ri-input-field',
    section: 'Forms & Tables'
  },
  {
    id: '74',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
    icon: 'ri-list-check',
    section: 'Forms & Tables'
  },
  {
    id: '75',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
    icon: 'ri-checkbox-line',
    section: 'Forms & Tables'
  },
  {
    id: '76',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
    icon: 'ri-radio-button-line',
    section: 'Forms & Tables'
  },
  {
    id: '77',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
    icon: 'ri-list-radio',
    section: 'Forms & Tables'
  },
  {
    id: '78',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
    icon: 'ri-rectangle-line',
    section: 'Forms & Tables'
  },
  {
    id: '79',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
    icon: 'ri-list-check',
    section: 'Forms & Tables'
  },
  {
    id: '80',
    name: 'Picker',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/picker`,
    icon: 'ri-calendar-check-line',
    section: 'Forms & Tables'
  },
  {
    id: '81',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
    icon: 'ri-toggle-line',
    section: 'Forms & Tables'
  },
  {
    id: '82',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
    icon: 'ri-file-upload-line',
    section: 'Forms & Tables'
  },
  {
    id: '83',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
    icon: 'ri-ai-generate',
    section: 'Forms & Tables'
  },
  {
    id: '84',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
    icon: 'ri-equalizer-2-line',
    section: 'Forms & Tables'
  },
  {
    id: '85',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
    icon: 'ri-table-2',
    section: 'Forms & Tables'
  }
]

export default data
