import {GiMuscleUp} from 'react-icons/gi'
import {TbYoga} from 'react-icons/tb'
import {GrRun} from 'react-icons/gr'
import {CgGym} from 'react-icons/cg'
import {TbDiamond} from 'react-icons/tb'




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
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <GiMuscleUp/>,
        title: "Lean Muscle Workout",
        info: "This is a Four-Week program",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <TbYoga/>,
        title: "Yoga",
        info: "This is a Yoga Class for women only",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <GrRun/>,
        title: "HIIT",
        info: "Our HIIT class only open on Monday, Wednesday and Friday",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <CgGym/>,
        title: "Adrenaline",
        info: "This class is for Beginners",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <TbDiamond/>,
        title: "Commitment to Care",
        desc: "We are passionate about changing lives. We are action takers to support each other."
    },
    {
        id: 2,
        icon: <TbDiamond/>,
        title: "Honest & Open",
        desc: "We are committed to growing as a team & as health professionals. We strive to deliver the best health outcomes for our clients within our professional scope of practice."
    },
    {
        id: 3,
        icon: <TbDiamond/>,
        title: "Respect & Responsibility",
        desc: "We are serious about communicating with each other, our clients & the community."
    },
    {
        id: 4,
        icon: <TbDiamond/>,
        title: "Empowerment",
        desc: "We provide awesome health outcomes through education & coaching. We actively nurture working relationships with like-minded health professionals."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "As a general goal, aim for at least 30 minutes of moderate physical activity every day."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Muscle strength, flexibility, power output and endurance are all better in the evening than they are in the morning. Plus, people who exercise in the evening take up to 20% longer to reach the point of exhaustion."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Ideally, aim for at least 150 minutes of moderate activity or 75 minutes of vigorous intensity cardio exercise per week."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Strength training can help you manage or lose weight, and it can increase your metabolism to help you burn more calories."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I’ve had a long history of training on and off along with chronic lower back pain. The VW Team have been brilliant in making sure my fitness level and ability are catered to ensuring none of the exercises cause further injury/strain whilst still pushing me to achieve goals and strengthen my body.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Great coaches and community to have fun in the gym! They have helped and supported me on my fitness journey! Love to be here all the time! 🤩",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Going to VW was one of the best things I did. The Team at VW are dedicated to ensuring you achieve the results you are after. I thoroughly enjoy the interactions with the coaching staff and love how supportive they are of me in my journey. When you join VW, you join a family because that's what it feels like!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "I came to VW looking for something a bit different to a normal gym and to get back in shape. I can't speak highly enough of the team, they are all fantastic and keep me motivated and help to ensure I am doing things properly. There are all ages attending and no judgement , it really is a great, encouraging fun, environment.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Loving the boxing sessions with VW. Great equipment and perfect combination of boxing and other cardio/weights. If you're new to exercise or prefer to only go with a gym buddy, I strongly encourage you to give VW Health & Fitness a go. I signed up without knowing anyone and the team have all been very welcoming. They'll guide and support you and they will not let you fail.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Free Wifi', available: true},
            {feature: 'Club Access', available: true},
            {feature: 'Gym Floor and Cardio', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Kids Zone', available: true},
            {feature: 'Access 5+ Clubs Nationwide', available: false},
            {feature: 'Group Fitness Functioning Training', available: false},
            {feature: 'Membership Hold', available: false},
            {feature: 'Ignite PT Packs', available: false},
            {feature: 'No lock-in contracts', available: false},
            {feature: 'Great range of classes', available: false},
            {feature: 'Free membership time-stop', available: false},
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Free Wifi', available: true},
            {feature: 'Club Access', available: true},
            {feature: 'Gym Floor and Cardio', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Kids Zone', available: true},
            {feature: 'Access 5+ Clubs Nationwide', available: true},
            {feature: 'Group Fitness Functioning Training', available: true},
            {feature: 'Membership Hold', available: true},
            {feature: 'Ignite PT Packs', available: false},
            {feature: 'No lock-in contracts', available: false},
            {feature: 'Great range of classes', available: false},
            {feature: 'Free membership time-stop', available: false},
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'Free Wifi', available: true},
            {feature: 'Club Access', available: true},
            {feature: 'Gym Floor and Cardio', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Kids Zone', available: true},
            {feature: 'Access 5+ Clubs Nationwide', available: true},
            {feature: 'Group Fitness Functioning Training', available: true},
            {feature: 'Membership Hold', available: true},
            {feature: 'Ignite PT Packs', available: true},
            {feature: 'No lock-in contracts', available: true},
            {feature: 'Great range of classes', available: true},
            {feature: 'Free membership time-stop', available: true},
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Enzo He',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://www.linkedin.com/in/Enzo-He/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Enzo He',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/in/Enzo-He/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Enzo He',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/in/Enzo-He/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Enzo He',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/in/Enzo-He/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Enzo He',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/in/Enzo-He/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Enzo He',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/in/Enzo-He/']
    }
]