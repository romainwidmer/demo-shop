import React, { useState } from 'react'


type SkillType = {
    href: string,
    title: string,
    img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}


const SKILL_LIST = [
    {
        href: "https://reactjs.org/",
        title: "ReactJS",
        img: <img src="/img/react.png" alt="reactjs" />
    },
    {
        href: "https://redux.js.org/",
        title: "Redux",
        img: <img src="/img/redux.png" alt="Redux" />
    },
    {
        href: "https://nodejs.org/en/",
        title: "NodeJS",
        img: <img src="/img/nodejs.png" alt="NodeJS" />
    },
    {
        href: "https://graphql.org/",
        title: "GraphQL",
        img: <img src="/img/graphql.png" alt="GraphQL" />
    },
    {
        href: "https://www.mongodb.com/",
        title: "MongoDB",
        img: <img src="/img/mongodb.png" alt="MongoDB" />
    },
    {
        href: "https://aws.amazon.com/fr/",
        title: "AWS",
        img: <img src="/img/aws.png" alt="AWS" />
    }
]


const SkillListComponent:React.FC = () => {
    const [skills, setSkills] = useState<SkillType[]>(SKILL_LIST)

    return(
        <div className="skills">
            <div className="container">
                <nav>
                    <p className="center">Mon terrain de jeu</p>
                    <ul>
                        {skills.map((data, index) => (
                            <li key={index}>
                                <a href={data.href} target="_blank" rel="noopener noreferrer" title={data.title}>
                                    { data.img }
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SkillListComponent
