const CNZ_URL = 'https://cryptocurrency.org.nz'

interface DropdownItem {
    icon: string
    title: string
    description: string
    path: string
}

interface DropdownSection {
    title: string
    items: DropdownItem[]
}

interface NavDropdown {
    type: 'dropdown'
    text: string
    sections: DropdownSection[]
}

interface NavLink {
    type: 'link'
    text: string
    path: string
}

type NavItem = NavLink | NavDropdown

export const navigation: NavItem[] = [
    {
        type: 'link',
        text: 'DAO',
        path: '/guides/daos/'
    },
    {
        type: 'link',
        text: 'Wallets',
        path: '/wallets'
    },
    {
        type: 'link',
        text: 'Buy Crypto',
        path: '/buy-cryptocurrency-nz/'
    },
    {
        type: 'dropdown',
        text: 'Learn',
        sections: [
            {
                title: 'Transferring',
                items: [
                    {
                        icon: '📊',
                        title: 'How to Buy',
                        description: 'Learn the basics of buying crypto',
                        path: '/buy-cryptocurrency-nz/'
                    },
                    {
                        icon: '💹',
                        title: 'How to Sell',
                        description: 'Master the selling process',
                        path: '/sell-cryptocurrency-nz/'
                    }
                ]
            },
            {
                title: 'Technical',
                items: [
                    {
                        icon: '💼',
                        title: 'Crypto Mining',
                        description: 'Understand mining basics',
                        path: '/guides/crypto-atms-nz/'
                    },
                    {
                        icon: '⛏️',
                        title: 'Crypto Mining',
                        description: 'Understand mining basics',
                        path: '/guides/crypto-mining-nz/'
                    }
                ]
            }
        ]
    },
    {
        type: 'dropdown',
        text: 'Community',
        sections: [
            {
                title: 'Events',
                items: [
                    {
                        icon: '🎯',
                        title: 'Upcoming Events',
                        description: 'Join our next meetup',
                        path: '/meetups'
                    }
                ]
            },
            {
                title: 'Connect',
                items: [
                    {
                        icon: '👥',
                        title: 'Join Discord',
                        description: 'Connect with the community',
                        path: '/discord'
                    }
                ]
            }
        ]
    },
    {
        type: 'link',
        text: 'News',
        path: '/news'
    },
    {
        type: 'link',
        text: 'About us',
        path: '/about'
    },
    {
        type: 'link',
        text: 'Get help',
        path: '/get-help'
    }
] as const

// Helper function to get full URLs
export const getFullUrl = (path: string) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || CNZ_URL
    return `${BASE_URL}${path}`
}

// Type guard to check if a nav item is a dropdown
export const isDropdown = (item: NavItem): item is NavDropdown => {
    return item.type === 'dropdown'
}

// Type guard to check if a nav item is a link
export const isLink = (item: NavItem): item is NavLink => {
    return item.type === 'link'
}
