import Biologyx from './Biology.jpeg'
import Studyingx from './Studying.jpeg'
import icon from './icon.jpg'
import arrow from './arrow.png'
import Physicsx from './Physics.jpeg'
import profile_icon from './profile_icon.png'

export const assets = {
    icon,
    arrow,
      
    }
    
    export const blog_data =[{
        id:1,
        title: "Physics",
        description: "AS Levels",
        image:'./Physics.jpeg',
        date:Date.now(),
        category: "Notes",
        author: "unknown",
        author_img:profile_icon
    },
    {
        id:2,
        title: "Biology",
        description:"AS Levels",
        image:'./Biology.jpeg',
        date:Date.now(),
        category: "Notes",
        author: "unknown",
        author_img:profile_icon


    },
    {
        id:3,
        title: "Chemistry",
        description:"AS levels",
        image:Studyingx,
        date:Date.now(),
        category: "Notes",
        author: "unknown",
        author_img:profile_icon
    },
        {
            id: 4,
            title: "Math",
            description:"AS levels",
            image:'/Math.jpeg',
            date:Date.now(),
            category: "Notes",
            author: "unknown",
            author_img:profile_icon
        },
        {
            id: 5,
            title: "Further Maths",
            description:"A levels",
            image:'/FM.jpeg',
            date:Date.now(),
            category: "Notes",
            author: "unkown",
            author_img:profile_icon
        },
        {
            id: 6,
            title: "English",
            description:"A levels",
            image:'/EngL.jpeg',
            date:Date.now(),
            category: "Notes",
            author: "unknown",
            author_img:profile_icon
        },
        {
            id: 7,
        title: "Economics",
        description:"GCSEs",
        image:'/Econ.jpeg',
        date:Date.now(),
        category: "Notes",
        author: "unkown",
        author_img:profile_icon
        },
        {
            id: 8,
            title: "Econ MCQ generator",
            description:"GCSEs",
            image:'/emcq.png',
            date:Date.now(),
            category: "Tools/Utility",
            author: "unkown",
            author_img:profile_icon
        },
        {
            id: 9,
            title: "Physics Olympiad",
            description:"BPho (6.2)",
            image:'/olym.jpg',
            date:Date.now(),
            category: "Extracurricular",
            author: "unknown",
            author_img:profile_icon
        },
        {    
            id: 10,
            title: "Statistics and Mechanics",
            description:"A Level Maths single/double",
            image:'/Stats.png',
            date:Date.now(),
            category: "Notes",
            author: "Xingzhi Lu",
            author_img:profile_icon,
            pdf: '/pdfs/Applied ALL 1.pdf'
        },
]
