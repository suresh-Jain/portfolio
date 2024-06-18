/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suresh Kumar",
  title: "Hi all, I'm Suresh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Desktop applications with JavaScript / Reactjs / Nodejs / Typescript and some other cool libraries and frameworks."
  ),
  resumeLink:
   // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    "https://docs.google.com/document/d/1UT3rteLdSytWhLf-NCjZJn06Y9qAt4FGVdfCQhzyVzE/edit?usp=drive_link", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/suresh-jain-43544024/",
  gmail: "suresh.jain@ymail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER BLENDED WITH BUSINESS ACUMEN WHO ALWAYS STRIVE TO PROVIDE RELIABLE AND SCALABLE TECHNICAL SOLUTIONS TO THE CLIENTS AT OPTIMAL COST.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and Desktop applications."
    ),
    emoji(
      "⚡ Develop scalable full stack applications. (Backend, Frontend, DB)."
    ),
    emoji(
      "⚡ Write CI/CD pipelines using GitHub Actions."
    ),
    emoji(
      "⚡ Plan software architecture and decide on strategies for multi-environment deployments."
    ),
    emoji("⚡ Individual contributor - involve in End to End SDLC process."),
    emoji(
      "⚡ Identify lags and improvement opportunities to enhance client's experience and adoption rate."
    ),
    emoji(
      "⚡ Optimise infrastructure costs."
    ),
    emoji(
      "⚡ Integration of third party services such as AWS / Slack / mails."
    ),
    emoji(
      "⚡ Scrum master and Team Lead."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "Typescript",
    //   fontAwesomeClassname: "fab fa-typescript"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anna University - Chennai, India",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2007 - 2011",
      desc: "7.3 CGPA",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "60%"
    },
    {
      Stack: "Agile Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Open to learning ",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer / Individual Contributor",
      company: "Structo",
      // companylogo: require("./assets/images/filedrop.jpeg"),
      date: "January 2023 – Present",
      desc: "As a lead, I guided the team in architecting the cloud infrastructure and developing an Electron-based desktop application for 3D printers. My leadership contributed to the successful launch of two new 3D printers in the market.",
      descBullets: [
        "Successfully designed and delivered a desktop based fleet management solution.",
        "I was part of the delivery team to successfully launch 2 new advanced commercial printers.",
        "As an individual contributor, collaborated with external vendors to design and develop an automated workflow solution for files pre-processing."
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "SparesCNX (Magellan X)",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "September 2021 – November 2022",
      desc: "As an active member of the development team, designed and implemented end to end features for the web applications.",
      descBullets: [
        "DB sync from Edge servers to Cloud DB",
        "Writing transformation adapter to extract insights and write to Elastic DB",
        "3 layered code structure with 90% code coverage."
      ]

    },
    {
      role: "Senior Full Stack Developer",
      company: "Bank Of Singapore, Singapore",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2020 – September 2021",
      desc: "Design and develop reusable Front end components ",
      descBullets: [
        "Pitched and developed a generalised UI component library for the Bank",
        "Efficiently engage with multiple teams for the delivery of features",
        "Implement a global search functionality for the application "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/phantom.webp"),
      projectName: "Phantom",
      projectDesc: "An automated headless Node Js based service to reduce human intervention in file preparation process before files are sent to printing",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.structo3d.com/pages/products"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/filedrop.jpeg"),
      projectName: "FileDrop",
      projectDesc: "Desktop based application to scan for edge devices on intranet and establish connections to transfer data of any size.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.structo3d.com/pages/products"
        }
      ]
    },
    {
      image: require("./assets/images/st-01.webp"),
      projectName: "ST-01",
      projectDesc: "MSLA-powered 3D printer for high throughput printing in dental and orthodontic laboratories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.structo3d.com/pages/products"
        }
      ]
    },
    {
      image: require("./assets/images/st-32.webp"),
      projectName: "ST-32",
      projectDesc: "Semi automated 3D printer for lights-out manufacturing of clear aligner models.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.structo3d.com/pages/products"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Top performer",
      subtitle:
        "I was awarded a top performer award for my active involvement in the deliverables and piching for new ideas",
      image: require("./assets/images/bos.jpeg"),
      imageAlt: "Bank of Singapore",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+65 91323885",
  email_address: "suresh.jain@ymail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
