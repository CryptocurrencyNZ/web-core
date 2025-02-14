// Function to get the next event date (last Wednesday of current/next month)
function getNextEventDate(): string {
    const now = new Date()

    // Function to get last Wednesday of a given month
    function getLastWednesday(year: number, month: number): Date {
        const lastDay = new Date(year, month + 1, 0) // Last day of the month
        const lastWednesday = new Date(lastDay)

        // Go backwards until we hit a Wednesday (3 is Wednesday)
        while (lastWednesday.getDay() !== 3) {
            lastWednesday.setDate(lastWednesday.getDate() - 1)
        }

        return lastWednesday
    }

    // Get last Wednesday of current month
    const currentMonthLastWed = getLastWednesday(now.getFullYear(), now.getMonth())

    // If we've passed this month's last Wednesday, get next month's
    if (now > currentMonthLastWed) {
        const nextMonth = now.getMonth() + 1
        const year = nextMonth === 12 ? now.getFullYear() + 1 : now.getFullYear()
        const month = nextMonth === 12 ? 0 : nextMonth
        const nextDate = getLastWednesday(year, month)
        return nextDate.toLocaleDateString('en-NZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    return currentMonthLastWed.toLocaleDateString('en-NZ', {
        day: 'numeric',
        month: 'long'
    })
}

export const BASE_URL = 'https://cryptocurrency.org.nz'

// Helper function to format the city URL
function getCityUrl(name: string, isNorthIsland: boolean): string {
    const island = isNorthIsland ? 'north-island' : 'south-island'
    const citySlug = name.toLowerCase().replace(/ /g, '-')
    return `${BASE_URL}/${island}/${citySlug}/`
}

interface City {
    name: string
    coords: [number, number]
    importance: number
    description: string
    host: string
    usualAttendees: number
    link: string
    venue: string
    date: string
    time: string
}

export const cities: City[] = [
    {
        name: 'Whangarei',
        coords: [174.026, -35.7321],
        importance: 1,
        description: 'Northland city known for its stunning beaches and the nearby Whangarei Heads.',
        host: 'Sarah Johnson',
        usualAttendees: 25,
        link: getCityUrl('Whangarei', true),
        venue: 'The Orchard Business & Event Hub',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Hibiscus Coast',
        coords: [174.4633, -36.3485],
        importance: 1,
        description: "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor.",
        host: 'Mike Williams',
        usualAttendees: 30,
        link: getCityUrl('Hibiscus Coast', true),
        venue: 'Whangaparaoa Library Community Room',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Auckland',
        coords: [174.7633, -37.1485],
        importance: 1,
        description: "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor.",
        host: 'David Chen',
        usualAttendees: 45,
        link: getCityUrl('Auckland', true),
        venue: 'Grid AKL Innovation Hub',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Rotorua',
        coords: [175.9793, -38.287],
        importance: 1,
        description: 'Inland city famous for its gardens, education facilities, and research institutions.',
        host: 'Emma Thompson',
        usualAttendees: 28,
        link: getCityUrl('Rotorua', true),
        venue: 'Rotorua Business Hub',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Tauranga',
        coords: [175.8793, -37.787],
        importance: 1,
        description: 'Coastal city known for its beautiful beaches, port activities, and Mount Maunganui.',
        host: 'James Wilson',
        usualAttendees: 35,
        link: getCityUrl('Tauranga', true),
        venue: 'Basestation Coworking Space',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'New Plymouth',
        coords: [174.07, -39.4011],
        importance: 1,
        description: 'A coastal city with strong arts and culture scenes, and views of Mount Taranaki.',
        host: 'Sophie Taylor',
        usualAttendees: 22,
        link: getCityUrl('New Plymouth', true),
        venue: 'The Village Coworking',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Hawkes Bay',
        coords: [176.2126, -39.4907],
        importance: 1,
        description: "Famous for its art deco architecture and vineyards, located on the North Island's east coast.",
        host: 'Oliver Brown',
        usualAttendees: 32,
        link: getCityUrl('Hawkes Bay', true),
        venue: 'The Tech Collective',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Palmerston North',
        coords: [175.6082, -40.1508],
        importance: 1,
        description: 'A key university city, with strong agricultural and research industries.',
        host: 'Isabella Clark',
        usualAttendees: 27,
        link: getCityUrl('Palmerston North', true),
        venue: 'Square Edge Community Arts',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Wellington',
        coords: [174.9762, -41.2866],
        importance: 1,
        description: 'Capital city known for strong winds, cultural attractions, and being the center of government.',
        host: 'Thomas Anderson',
        usualAttendees: 40,
        link: getCityUrl('Wellington', true),
        venue: 'BizDojo Wellington',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Nelson',
        coords: [173.2922, -41.2925],
        importance: 1,
        description: 'A small city known for its outdoor lifestyle, sunny climate, and arts community.',
        host: 'Lucy Parker',
        usualAttendees: 20,
        link: getCityUrl('Nelson', false),
        venue: 'Bridge Street Collective',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Blenheim',
        coords: [173.9922, -40.9925],
        importance: 1,
        description: 'A small city known for its outdoor lifestyle, sunny climate, and arts community.',
        host: 'William Davis',
        usualAttendees: 18,
        link: getCityUrl('Blenheim', false),
        venue: 'Marlborough Research Centre',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Christchurch',
        coords: [172.6362, -43.532],
        importance: 1.5,
        description: 'Largest city in South Island, known for its English heritage and post-earthquake innovation.',
        host: 'Harry Satoshi',
        usualAttendees: 38,
        link: getCityUrl('Christchurch', false),
        venue: 'EPIC Innovation Campus',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Dunedin',
        coords: [170.5027, -45.7788],
        importance: 1.5,
        description: 'Southern city with strong Scottish influence, known for its Victorian architecture and wildlife.',
        host: 'Daniel Stewart',
        usualAttendees: 33,
        link: getCityUrl('Dunedin', false),
        venue: 'Petridish Coworking Space',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Invercargill',
        coords: [169.1512, -46.1132],
        importance: 1.5,
        description: 'Southernmost city on the mainland, known for its Scottish heritage and close proximity to natural reserves.',
        host: 'Grace Martin',
        usualAttendees: 24,
        link: getCityUrl('Invercargill', false),
        venue: 'COIN South Innovation Hub',
        date: getNextEventDate(),
        time: '7:00 PM'
    }
]
