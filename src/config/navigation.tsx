// src/config/navigation.tsx
import React from 'react'
import { Award, BadgeDollarSign, Bitcoin, Book, DollarSign, GanttChart, HelpCircle, Home, Info, Users, Wallet } from 'lucide-react'

// Define interfaces for the navigation types
export interface NavItem {
    text: string
    path?: string
    icon: React.ReactNode
    isDropdown?: boolean
    sections?: NavSection[]
}

export interface NavSection {
    title: string
    items: NavSectionItem[]
}

export interface NavSectionItem {
    title: string
    description: string
    path: string
    icon: React.ReactNode
}

// Export the actual navigation data
export const navigation: NavItem[] = [
    {
        text: 'Home',
        path: 'https://cryptocurrency.org.nz/',
        icon: <Home size={18} />,
        isDropdown: false
    },
    {
        text: 'Buy & Sell',
        icon: <DollarSign size={18} />,
        isDropdown: true,
        sections: [
            {
                title: 'Getting Started',
                items: [
                    {
                        title: 'How to Buy Crypto',
                        description: 'Step-by-step guide for beginners',
                        path: '/web-core/#/web-core/buycrypto',
                        icon: <BadgeDollarSign size={20} />
                    },
                    {
                        title: 'How to Sell Crypto',
                        description: 'Convert your crypto to NZD',
                        path: 'https://cryptocurrency.org.nz/sell-cryptocurrency-nz/',
                        icon: <DollarSign size={20} />
                    },
                    {
                        title: 'Wallets',
                        description: 'Secure your digital assets',
                        path: 'https://cryptocurrency.org.nz/wallets',
                        icon: <Wallet size={20} />
                    }
                ]
            },
            {
                title: 'Trading Options',
                items: [
                    {
                        title: 'NZ Exchanges',
                        description: 'Trusted platforms for Kiwis',
                        path: 'https://cryptocurrency.org.nz/crypto-exchanges-nz/',
                        icon: <GanttChart size={20} />
                    },
                    {
                        title: 'P2P Marketplace',
                        description: 'Trade directly with other Kiwis',
                        path: 'https://cryptocurrency.org.nz/peer-to-peer-trading-nz/',
                        icon: <Users size={20} />
                    }
                ]
            }
        ]
    },
    {
        text: 'Learn',
        icon: <Book size={18} />,
        isDropdown: true,
        sections: [
            {
                title: 'Getting Started',
                items: [
                    {
                        title: 'Get Started',
                        description: 'Looking for a place to start?',
                        path: '/web-core/#/web-core/getstarted',
                        icon: <Bitcoin size={20} />
                    }
                ]
            },
            {
                title: 'Crypto Basics',
                items: [
                    {
                        title: 'Crypto ATMs',
                        description: 'Understanding crypto ATMs',
                        path: 'https://cryptocurrency.org.nz/guides/crypto-atms-nz/',
                        icon: <Bitcoin size={20} />
                    },
                    {
                        title: 'Crypto Mining',
                        description: 'How mining works in New Zealand',
                        path: 'https://cryptocurrency.org.nz/crypto-mining-nz/',
                        icon: <Award size={20} />
                    }
                ]
            }
        ]
    },
    {
        text: 'Community',
        path: 'https://cryptocurrency.org.nz/community',
        icon: <Users size={18} />,
        isDropdown: false
    },
    {
        text: 'About',
        path: '/web-core/#/web-core/about',
        icon: <Info size={18} />,
        isDropdown: false
    },
    {
        text: 'Help',
        path: 'https://cryptoconsulting.nz/',
        icon: <HelpCircle size={18} />,
        isDropdown: false
    }
]
