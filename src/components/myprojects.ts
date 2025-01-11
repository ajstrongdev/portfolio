interface Project {
    Title: string;
    Date: string;
    Descriptor: string;
    Information: string[];
    Pictures: string[];
    Website?: string;
    Repo: string;
    Skills: { skill: string }[];
    new?: boolean;
}

export const MyProjects: Project[] = [
    {
        Title: "Rhino Linux",
        Date: "October 2022 - Present",
        Descriptor: "Open source project",
        Information: [
          "I am the Founder, Desktop Lead and Website Maintainer for Rhino Linux. Due to the nature of open source development and having a small development team, I have had to work across multiple different roles since this projects creation.",
          "Rhino Linux has given me an incredible opportunity to lead the development of a product from the original idea until its completion. From finding other open source developers and building a team, to facilitating development towards new releases. Leading this open source project has both enhanced my technical skills and abilities, and has taught me a lot.",
          "I have also been responsible for every aspect of the development of Unicorn, the custom Desktop experience of Rhino Linux. Building and maintaining the Rhino Linux website has helped strengthen my front-end website development. I've become proficient in React, Next.JS and TailwindCSS over the course of maintaining the Rhino Linux website. It is important for me to ensure that the website is user-friendly, visually appealing and accessible.",
          "I have also been responsible for the marketing of Rhino Linux, and our overall brand identity. This includes writing our blog posts, and communications with journalists. In the past year Rhino Linux has managed to hit over 35,000 downloads on Sourceforge."
        ],
        Pictures: [
          "/rhino.webp",
          "/rhino-website.webp",
          "/setup-wizard.webp",
        ],
        Website: "https://rhinolinux.org",
        Repo: "https://github.com/rhino-linux",
        Skills:  [
            {
                skill: "Project Management"
            },
            {
                skill: "Linux"
            },
            {
                skill: "System Administration"
            },
            {
                skill: "Python"
            },
            {
                skill: "Bash"
            },
            {
                skill: "Packaging"
            },
            {
                skill: "React"
            },
            {
                skill: "Next.JS"
            },
            {
                skill: "TailwindCSS"
            },
            {
                skill: "Git"
            }
        ],
    },
    {
        Title: "Stockhive",
        new: true,
        Date: "December 2024",
        Descriptor: "Web Application",
        Information: [
            "Stockhive is a web application created for my second year of University. The application is an inventory management system, designed to help a business keep track of their stock levels, make sales, and manage deliveries.",
            "The application was created using the Laravel, which I learnt throughout the semester whilst working on this project. I decided to utilise TailwindCSS for the front-end of the application, as I find it to be a very efficient way to create beautiful websites.",
            "This project was developed as part of a team, and we were also graded on our ability to work as a team. We adhered to agile development practices, such as Scrum, and we utilised Git for our version control."
        ],
        Pictures: [
            "/stockhive-1.webp",
            "/stockhive-2.webp",
            "/stockhive-3.webp",
        ],
        Repo: "https://github.com/stockhive-uni/stockhiveapp",
        Skills: [
            {
                skill: "PHP"
            },
            {
                skill: "Laravel"
            },
            {
                skill: "TailwindCSS"
            },
            {
                skill: "SQL"
            },
            {
                skill: "JavaScript"
            },
            {
                skill: "Git",
            }
        ]
    },
    {
        Title: "Win538",
        new: true,
        Date: "December 2024",
        Descriptor: "WinForms Application",
        Information: [ 
            "I created this project as part of my second year of University. The project was created for my Systems Programming module. We were tasked with creating an application in C#, that incorporated advanced object-oriented programming concepts, such as: inheritance, polymorphism and encapsulation.",
            "I decided to make a game for this project, as I wanted to work on something a bit more creative. Win538 is a turn based strategy game in which the player must win against the computer in an election. The player must be strategic in their decisions and aim to win as many states as possible."
        ],
        Pictures: [
            "/win538-1.webp",
            "/win538-2.webp",
            "/win538-3.webp",
        ],
        Repo: "https://github.com/ajstrongdev/Win538",
        Skills: [
            {
                skill: "C#",
            },
            {
                skill: "WinForms",
            },
            {
                skill: "Git",
            },
        ],
    },
    {
        Title: "Social App",
        Date: "March 2024",
        Descriptor: "Web Application",
        Information: [
            "I created this Web Application as one of my projects for the Software Projects module in my first year of University. This project was a lot more complex than my website for Cantor College, as I was not only reading data from a database, but also writing to it.",
            "The web application itself aims to be a simple social media website, allowing for users to sign up and post text or images to the website's homepage.",
            "Since we were allowed to utilise libraries and frameworks for this project, I decided to utilise TailwindCSS for the front-end as TailwindCSS is excellent for allowing me to create beautiful websites, quickly. I utilised PHP for the backend.",
            "I prepared to create this application by utilising a high-fidelity prototype, as well as creating a use-case diagram and entity-relationship diagram. We were graded for this project based on: performance, code quality, preperation, and documentation.",
        ],
        Pictures: [
            "/scrumble-1.webp",
            "/scrumble-3.webp",
            "/scrumble-2.webp"
        ],
        Repo: "https://github.com/ajstrongdev/social-app",
        Skills: [
            {
                skill: "PHP"
            },
            {
                skill: "HTML"
            },
            {
                skill: "TailwindCSS"
            },
            {
                skill: "SQL"
            },
            {
                skill: "JavaScript"
            },
            {
                skill: "Git",
            }
        ]
    },
    {
        Title: "Portfolio",
        Date: "September 2024",
        Descriptor: "Website",
        Information: [
            "You are currently on my portfolio website! I've been creating websites and projects since I started programming in 2017, and while only some of them have managed to make it in this section, all of them have taught me valuable skills that I still use to this day.",
            "This website should hopefully serve as a great place for potential employers to see my professional works, and contact me easily."
        ],
        Pictures: [],
        Repo: "https://github.com/ajstrongdev/portfolio",
        Skills: [
            {
                skill: "HTML"
            },
            {
                skill: "CSS"
            },
            {
                skill: "JavaScript"
            },
            {
                skill: "Next.JS"
            },
            {
                skill: "React"
            },
            {
                skill: "TailwindCSS"
            },
            {
                skill: "Git"
            }
        ]
    }
]

export const ArchivedProjects: Project[] = [
    {
        Title: "Cantor College",
        Date: "January 2024",
        Descriptor: "Website",
        Information: [
            "I created this website for my Website Development module assignment in my first year of University. The website was created for a fictional “cantor college”, named after one of our university buildings.",
            "Despite having previous knowledge in HTML, CSS and JavaScript, as well as some website design principles, I still found myself learning a lot in this module as I ended up learning both the concept of wireframing, and PHP for the first time in this module.",
            "This was the first website that I have created using PHP with a database in MySQL, which I hosted locally on an XAMPP Server."
        ],
        Pictures: [ 
            "/cantor-1.webp",
            "/cantor-2.webp",
            "/cantor-3.webp", 
        ],
        Repo: "https://github.com/ajstrongdev/cantor-college",
        Skills: [
            {
                skill: "PHP"
            },
            {
                skill: "HTML"
            },
            {
                skill: "CSS"
            },
            {
                skill: "JavaScript"
            },
            {
                skill: "SQL"
            },
            {
                skill: "Databases"
            },
            {
                skill: "Git"
            }
        ],
    },
    {
        Title: "DistroCollection",
        Date: "December 2023",
        Descriptor: "WinForms Application",
        Information: [ 
            "This was my first project in C# for our programming module assignment during my first year of University. After learning C# for the first time through completing smaller tasks, we eventually moved onto learning WinForms, which was used in this project.",
            "Throughout developing this project, I continued to learn C# and try to improve my knowledge, ultimately leading me to refactor my code. I wanted to be able to produce a piece of software that is efficient and functional.",
            "Many topics were covered in this module, such as: Classes, Variables, Functions, Collections, File.IO and WinForms properties and events."
        ],
        Pictures: [
            "/distro-2.webp",
            "/distro-3.webp",
            "/distro-1.webp"
        ],
        Repo: "https://github.com/ajstrongdev/distrocollection",
        Skills: [
            {
                skill: "C#",
            }
        ],
    },
]