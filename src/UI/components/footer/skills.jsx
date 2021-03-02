import React from 'react'


const LIST = [
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

const SkillListComponent = () => (
    <div className="skills">
        <div className="container">
            <nav>
                <p className="center">{ t('footer.mySkills') }</p>
                <ul>
                    {LIST.map((brand, index) => (
                        <li key={index}>
                            <a href={brand.href} target="_blank" rel="noopener noreferrer" title={brand.title}>
                                {brand.img}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
)

export default SkillListComponent
