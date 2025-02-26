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
        name: 'Auckland',
        coords: [174.7633, -37.1485],
        importance: 1,
        description: '',
        host: 'Dev K',
        usualAttendees: 60,
        link: getCityUrl('Auckland', true),
        venue: 'The Beer Spot - Morningside Auckland',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Hamilton',
        coords: [174.7633, -37.9485],
        importance: 1,
        description: '',
        host: 'Harry',
        usualAttendees: 10,
        link: getCityUrl('Auckland', true),
        venue: 'CocknBull Tavern',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Rotorua',
        coords: [175.9793, -38.287],
        importance: 1,
        description: '',
        host: 'Soloman',
        usualAttendees: 6,
        link: getCityUrl('Rotorua', true),
        venue: 'Ambrosia Restuarant and Bar',
        date: getNextEventDate(),
        time: '6:00 PM'
    },
    {
        name: 'Tauranga',
        coords: [175.8793, -37.787],
        importance: 1,
        description: '',
        host: 'Daniel',
        usualAttendees: 8,
        link: getCityUrl('Tauranga', true),
        venue: 'The Pizza Library co, Mount Manganui',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Hawkes Bay',
        coords: [176.2126, -39.4907],
        importance: 1,
        description: '',
        host: 'Aaron',
        usualAttendees: 50,
        link: getCityUrl('Hawkes Bay', true),
        venue: 'Duke of Gloucester Restaurant and Bar',
        date: getNextEventDate(),
        time: '6:00 PM'
    },
    {
        name: 'Palmerston North',
        coords: [175.6082, -40.1508],
        importance: 1,
        description: '',
        host: 'Gale',
        usualAttendees: 8,
        link: getCityUrl('Palmerston North', true),
        venue: 'Tonys pizza',
        date: getNextEventDate(),
        time: '5:00 PM'
    },
    {
        name: 'Wellington',
        coords: [174.9762, -41.2866],
        importance: 1,
        description: '',
        host: 'Alex McGregor',
        usualAttendees: 25,
        link: getCityUrl('Wellington', true),
        venue: 'Blend Bar Wellington',
        date: getNextEventDate(),
        time: '5:00 PM'
    },
    {
        name: 'Nelson',
        coords: [173.2922, -41.2925],
        importance: 1,
        description: '',
        host: 'Steve',
        usualAttendees: 10,
        link: getCityUrl('Nelson', false),
        venue: 'Golden Bear Brewery',
        date: getNextEventDate(),
        time: '6:30 PM'
    },
    {
        name: 'Blenheim',
        coords: [173.9922, -40.9925],
        importance: 1,
        description: '',
        host: 'Phill Sinclair',
        usualAttendees: 8,
        link: getCityUrl('Blenheim', false),
        venue: 'Dodson Street Beer Garden',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Christchurch',
        coords: [172.6362, -43.532],
        importance: 1.5,
        description: '',
        host: 'Harry Satoshi',
        usualAttendees: 30,
        link: getCityUrl('Christchurch', false),
        venue: 'Dux Central',
        date: getNextEventDate(),
        time: '7:00 PM'
    },
    {
        name: 'Dunedin',
        coords: [170.5027, -45.7788],
        importance: 1.5,
        description: '',
        host: 'Frank',
        usualAttendees: 8,
        link: getCityUrl('Dunedin', false),
        venue: 'Dunedin Social Club',
        date: getNextEventDate(),
        time: '6:30 PM'
    },
    {
        name: 'Invercargill',
        coords: [169.1512, -46.1132],
        importance: 1.5,
        description: '',
        host: 'Jeremy',
        usualAttendees: 5,
        link: getCityUrl('Invercargill', false),
        venue: 'TuaTara Cafe / Bar',
        date: getNextEventDate(),
        time: '5:30 PM'
    }
]
