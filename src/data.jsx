import {SiOpenaigym, SiAdguard, SiAppsignal, SiAdafruit} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Quality Services",
        desc: "We follow best practices like valuing customers' time and providing resources to make deals with clients stressfree.."
    },
    {
        id: 2,
        icon: <SiAdguard/>,
        title: "Reliability",
        desc: "We provide Quality and timely assistance ."
    },
    {
        id: 3,
        icon: <SiAppsignal/>,
        title: "Assurance",
        desc: "Passion is at the heart of our company. Executional excellence is a core value of our group"
    },
    {
        id: 4,
        icon: <SiAdafruit/>,
        title: "Accountabilty",
        desc: "We deliver with transparency, dignity, and respect holding ourselves accountable for results."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What to expect?",
        answer: "We deal on all New and Used premium quality shipping containers made from the best of materials"
    },
    {
        id: 2,
        question: "Do you offer customization services?",
        answer: "We help to mantain and service your containers to keep it for a long lasting storage, We help in the customization of these containers too for various needs, be it homes, site and offices."
    },
    {
        id: 3,
        question: "How long should my order take?",
        answer: "We provide top notch installation & delivery service to you just the way you like it in record time. request for a quote and receive it in less than or fifteen minutes max."
    },
    {
        id: 4,
        question: "Are you a certified Company?",
        answer: "Yes we are. We are ISO 90001 & 90002 certified"
    },
    {
        id: 5,
        question: "Do you offer overland services",
        answer: "With enough resources and years of expirience in the business, we offer a variety of services like overland transportation, logistics and a growing portfolio of port terminal investments."
    },
    {
        id: 6,
        question: "What types/sizes of containers do you have?",
        answer: "we specialize majorly in sales of types of 20ft to 40ft shipping containers. We can also build anything (for example) from a robust 10ft, 20ft or 40ft shipping container with a near endless range of container accessories including servery windows, hydraulic decks, remote controlled awnings and more"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        occupation: "ceo tungst co" ,
        quote: "The Portsmouth team, whether on site or office staff, has been a pleasure to work with. the construction and delivery was well planned.",
        job: "Manager Brebau Construction",
        avatar: require("./images/profile4.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        occupation: "ceo tungst co" ,
        quote: "Portsmouth containers are true professionals and it was a pleasure to work with them. the staff were respectful of our staff and building",
        job: "ceo tungst co",
        avatar: require("./images/profile5.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        occupation: "ceo tungst co" ,
        quote: "Their workmanship was second to none, very easy to deal with and communication throughout the project was excellent.",
        job: "procurement, Bantrel",
        avatar: require("./images/profile1.jpeg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        occupation: "ceo tungst co" ,
        quote: "Time frames given for completion of the construction and delivery were realistic and achievable and the project did finish on time .",
        job: "Dufferin Constrution",
        avatar: require("./images/profile2.jpeg")
    },
    {
        id: 5,
        name: "Fred Eldred",
        occupation: "ceo tungst co" ,
        quote: "I found Portsmouth containers to be a thoroughly proffesional organization with approachable and competent staff at every level. The deadline for delivery was achieved.",
        job: "Gs engineering & Constrution",
        avatar: require("./images/profile3.jpeg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Bronze Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need a little help',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Gold Package',
        desc: 'This is the perfect package for an intermediate user who know what their doing',
        price: 59.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 4,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









// const Trainer1 = require('./images/trainer1.jpg')
// const Trainer2 = require('./images/trainer2.jpg')
// const Trainer3 = require('./images/trainer3.jpg')
// const Trainer4 = require('./images/trainer4.jpg')
// const Trainer5 = require('./images/trainer5.jpg')
// const Trainer6 = require('./images/trainer6.jpg')


// export const trainers = [
//     {
//         id: 1,
//         image: Trainer1,
//         name: 'John Doe',
//         job: 'Aerobic Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 2,
//         image: Trainer2,
//         name: 'Daniel vinyo',
//         job: 'Speed Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 3,
//         image: Trainer3,
//         name: 'Edem Quist',
//         job: 'Flexibility Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 4,
//         image: Trainer4,
//         name: 'Shatta Wale',
//         job: 'Body Composition Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 5,
//         image: Trainer5,
//         name: 'Diana Ayi',
//         job: 'Circuit Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 6,
//         image: Trainer6,
//         name: 'Wayne Carter',
//         job: 'Physical Intelligence Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     }
// ]