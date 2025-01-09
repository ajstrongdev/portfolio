interface Skills {
    skill: string;
    description: string;
    key: number;
}

const MySkills: Skills[] = [
    {
        skill: "Next.JS",
        description: "I am confident in my ability to write efficient JavaScript code. I utilise it to create user-interaction on my websites. I then later began to use JavaScript more heavily through React. I began to learn Next.JS, a React framework, during my summer break from University, by rewriting some of my older websites. I find React significantly more efficient for website development. React also has seamless integreation with TailwindCSS, which is why a lot of my websites usually utilise both.",
        key: 1,
    },
    {
        skill: "TailwindCSS",
        description: "I first learnt standard CSS in 2017, and from there have consistently tried to improve upon my website design skills. I enjoy keeping up-to-date with the latest design practices in website development, and experimenting. I learnt TailwindCSS in 2023, and it is now probably my favourite CSS framework. TailwindCSS allows for you to write CSS using utility classes, making website design much more efficient.",
        key: 2,
    },
    {
        skill: "C#",
        description: "I first learnt C# during my Games Development module for College, however my knowledge expanded greatly when I began to learn it properly at University. I find Object-Oriented Programming enjoyable as it helps to simplfy larger, more complex systems. I have since expanded upon my learning of C# by incorporating concepts such as Encapsulation, Inheritance and Polymorphism.",
        key: 3,
    },
    {
        skill: "PHP",
        description: "I first began to learn PHP through my Website Development module at University. PHP was my first exposure to proper backend website development, leading me to create a Social Media Web Application in my second semester of University. From there I began to learn more about PHP, and subsequently Laravel, moving onto creating more complex full-stack web applications.",
        key: 4,
    },
    {
        skill: "Linux",
        description: "I first began using Linux in 2020, and have since used it as my main operating system. I find Linux to be a more efficient operating system for programming, due to the fact it allows for greater control over the system. I am confident in using the command-line. I am confident in my abilities utilising linux for system administration, as I currently manage the development of a Linux distribution.",
        key: 5,
    },
    {
        skill: "Git",
        description: "Version control is essential in development. I first began to use GitHub in 2021, later learning the Git command-line by the start of 2023. I first learned Git through collaborating to various open source projects, and have since used it to manage projects, track changes and collaborate effectively with others.",
        key: 6,
    },
]

export default MySkills;