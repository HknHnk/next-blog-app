import pic_1 from './Biology.jpeg'
import pic_2 from './Studying.jpeg'
import icon from './icon.jpg'
import arrow from './arrow.png'
import pic_3 from './Physics.jpeg'
import profile_icon from './profile_icon.png'

export const assets = {
    icon,
    arrow  
    }
    
    export const blog_data =[{
        id:1,
        title: "Physics",
        description: "AS Levels",
        image:icon,
        date:Date.now(),
        category: "Notes",
        author: "Xingzhi Lu",
        author_img:profile_icon
    },
    {
        id:2,
        title: "Biology",
        description:"AS Levels",
        image:pic_1,
        date:Date.now(),
        category: "Notes",
        author: "Xingzhi Lu",
        author_img:profile_icon

    }
]
