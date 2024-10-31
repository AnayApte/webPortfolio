'use client'

import { useState, useEffect, useCallback } from 'react'
import { Linkedin, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

function Header({ activeSection, scrollToSection }) {
  const sections = ['home', 'experience', 'skills', 'awards']

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="container mx-auto py-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/microchip.png"
              alt="Microchip logo"
              width={96}
              height={96}
              className="object-contain"
            />
            <span className="text-4xl font-bold">Anay Apte</span>
          </div>
        </nav>
        <div className="flex justify-center mt-2 space-x-1 overflow-x-auto">
          {sections.map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section)}
              variant={activeSection === section ? "default" : "ghost"}
              size="sm"
              className="transition-none"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}

function AwardCard({ organization, achievements, imagePath }) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">{organization}</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-xl">{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-[3/2]">
            <Image
              src={imagePath}
              alt={`${organization} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

function OnePercentBetterCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slides = [
    {
      image: '/images/profile.png',
      description: 'Profile setup page. Asks user for their health information, including but not limited to height, weight, age, etc.'
    },
    {
      image: '/images/calorieGallery.png',
      description: 'Recipes page. Utilizes Edamam API to generate 1000+ recipes. Uses a calculated daily caloric goal from profile to generate recommended recipes.'
    },
    {
      image: '/images/powerHour.png',
      description: 'Workout page. Integrates ExerciseDB API to provide 100+ exercises. Multi-table setup in Supabase allows tracking of various metrics, including one-rep-max.'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slides.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">One Percent Better</CardTitle>
            <CardDescription className="text-xl">Better Each Day, In Every Way</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Developed a comprehensive health and wellness application, serving as a one-stop shop improvement.</li>
              <li className="text-lg">Implemented diverse features including a workout tracker, calorie counter, recipes page, meditation station, and much more.</li>
              <li className="text-lg">Integrated multiple APIs including Google Gemini, Edamam API, and ExerciseDB API, showcasing proficiency in API integration and data management.</li>
              <li className="text-lg">Utilized React Native for cross-platform compatibility and Supabase (PostgreSQL-based) for backend support.</li>
              <li className="text-lg">Led a team of four in creating this application for the Congressional App Challenge.</li>
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-video">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`One Percent Better screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
            
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              {slides[currentImageIndex].description}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button asChild className="w-full max-w-md">
          <a href="https://www.youtube.com/watch?v=lVU-Msay_a8" target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
        </Button>
      </div>
    </Card>
  )
}

function NCHSNavCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slides = [
    {
      image: '/images/schoolMap.png',
      description: 'Proprietary school map interface displaying all floors, classrooms, and facilities. Utilized QGIS software to vectorize and map school floor plans onto planet.'
    },
    {
      image: '/images/schedule.png',
      description: 'Personalized schedule view for students to input their room numbers and find classroom names. Integrated with MappedIn SDK for enhanced functionality.'
    },
    {
      image: '/images/mappedin.png',
      description: 'Leveraged iFrame and MappedIn SDK to calculate the distance and determine the fastest route from a user\'s current location to a given classroom.'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slides.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">NCHS Nav</CardTitle>
            <CardDescription className="text-xl">Making Navigation Easier, One Step At A Time</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Created of a web app to streamline navigation within Naperville Central High School.</li>
              <li className="text-lg">Utilized QGIS vectorization software to accurately map school floor plans.</li>
              <li className="text-lg">Implemented a classroom schedule feature by integrating Google OAuth and establishing a connection to Infinite Campus.</li>
              <li className="text-lg">Leveraged NextJS and MappedIn SDK to create a seamless and intuitive navigation experience.</li>
              <li className="text-lg">Collaborated in a team of three over seven months, successfully delivering the project across four sprints.</li>
              <li className="text-lg">Applied Agile methodologies, including sprints, retrospectives, and daily scrums for a more responsive product.</li>
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-video">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`NCHS Nav screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
            
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              {slides[currentImageIndex].description}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button asChild className="w-full max-w-md">
          <a href="https://drive.google.com/file/d/1ykBj-OlkENaVmdrls2s5IZzpLcIHOxaN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
        </Button>
      </div>
    </Card>
  )
}

function AndMuchMoreCard() {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">And So Much More...</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Cityscape Project: Developed a Java animation utilizing loops and classes to create a dynamic, moving city scene for my APCSA class.</li>
              <li className="text-lg">Maze Solver Project: Engineered a Java program employing advanced class structures to solve complex mazes, providing step-by-step solutions and identifying unsolvable scenarios for my Software Engineering course.</li>
              <li className="text-lg">Video 4Ever Project: Created a React-Native web application interfacing with a phpMyAdmin SQL database to display video store pricing given a dataset.</li>
            </ul>
          </CardContent>
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Including Some Fun Projects!</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">LeBron James Collage: Leveraged Java classes and loops to manipulate image pixels, creating a goofy picture collage of LeBron James for my APCSA class.</li>
              <li className="text-lg">DJ Khaled Soundboard: Utilized Raspberry Pi and Python to develop an interactive soundboard featuring DJ Khaled clips in my Software Engineering class.</li>
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-video">
            <Image
              src="/images/githubPic.png"
              alt="GitHub profile screenshot"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Explore my GitHub profile for a comprehensive view of my  projects!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button asChild className="w-full max-w-md">
          <a href="https://github.com/anayapte" target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </Button>
      </div>
    </Card>
  )
}

function RudderVirtCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slides = [
    {
      image: '/images/RudderUI.png',
      description: '500 error page developed as part of the RudderVirt user interface & frontend design improvements.'
    },
    {
      image: '/images/RudderVS.png',
      description: 'Backend code snippet showcasing the implementation of Drizzle ORM for efficient storage and management of classroom data, including student and teacher information.'
    },
    {
      image: '/images/RudderAPI.png',
      description: 'API implementation of Cloudflare Turnstile, enhancing security measures for login and signup functionalities.'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slides.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Software Engineering Intern</CardTitle>
            <CardDescription className="text-xl">Eigenvector LLC • 2024 - Present</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Contributed to both frontend and backend development of RudderVirt using PostgreSQL, Sveltekit, and TypeScript, demonstrating full-stack capabilities.</li>
              <li className="text-lg">Designed and implemented various UI components, including a dynamic theme toggling feature and comprehensive page redesigns.</li>
              <li className="text-lg">Engineered a fully functional classroom assignment page with a focus on robust server-side logic.</li>
              <li className="text-lg">Successfully integrated Cloudflare Turnstile API to improve login security, showcasing skills in API integration.</li>
              <li className="text-lg">Learned both client-side and server-side testing methodologies to ensure feature integrity across different environments.</li>
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-video">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`RudderVirt screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
            
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              {slides[currentImageIndex].description}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

function ArgonneCard() {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Argonne ESRP Data Analysis Team</CardTitle>
            <CardDescription className="text-xl">Argonne National Laboratory • 2023 - Present</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg">Active member of the Argonne Exemplary Student Research Program (ESRP) at Naperville Central, specializing in data analysis.</li>
              <li className="text-lg">Contributed to research analyzing the toxic effects of Cadmium Selenide quantum dots uptake in plants.</li>
              <li className="text-lg">Utilized the pandas library in Python to conduct analysis of both chloroplast morphology and chlorophyll content, demonstrating proficiency in data manipulation.</li>
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-video">
            <Image
              src="/images/Argonnelablogo.png"
              alt="Argonne National Laboratory logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

function VolunteerCard({ title, organization, period, description, imagePath }) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div className="text-center">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-xl">{organization} • {period}</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </CardContent>
        </div>
        
        <div className="relative">
          <div className="relative aspect-[3/2]">
            <Image
              src={imagePath}
              alt={`${organization} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

const programmingLanguages = [
  { name: 'JavaScript/HTML/CSS', icon: '/images/js.png' },
  { name: 'Python', icon: '/images/Python-logo.png' },
  { name: 'Java', icon: '/images/java.png' },
  { name: 'C++', icon: '/images/cpp_logo.png' },
  { name: 'PostgreSQL', icon: '/images/Postgresql_elephant.png' },
]

const awards = [
  {
    organization: "Business Professionals of America (BPA)",
    achievements: [
      "Top 15 - National Leadership Conference, C++ Programming (2024)",
      "3rd Place - State Leadership Conference, C++ Programming (2024)",
      "State Qualifier - State Leadership Conference, Python Programming (2022)"
    ],
    imagePath: "/images/BPA.jpg"
  },
  {
    organization: "Naperville School District 203",
    achievements: [
      "Career & Technical Education Student of the Month (2024)",
      "Completed rigorous requirements to earn an endorsement in the Programming & Software Development Career Path from the state of Illinois.",
    ],
    imagePath: "/images/naperville.png"
  },
  {
    organization: "College Board",
    achievements: [
      "AP Scholar with Distinction (2024)",
      "Received a Score of 5 - AP Computer Science A (2023)",
      "Received a Score of 5 - AP Calculus BC Exam (2023)"
    ],
    imagePath: "/images/collegeBoard.png"
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const volunteerPositions = [
    {
      title: "Co-Founder & Director",
      organization: "CodeBytes Youth Computer Science Camp",
      period: "2024 - Present",
      description: [
        "Founded and directed a comprehensive five-week introductory camp, successfully teaching Python programming to over 70 middle school students.",
        "Developed and implemented an engaging curriculum covering fundamental programming concepts.",
        "Effectively managed a team of 20+ volunteer instructors, coordinating camp scheduling, lesson planning, and interactive activities to ensure a high-quality learning experience."
      ],
      imagePath: "/images/codebytes.png"
    },
    {
      title: "Data Manager",
      organization: "The Merry Tutor",
      period: "2024 - Present",
      description: [
        "Leveraged advanced SQL queries to efficiently manage data for over 200 tutoring sessions and multiple tutors, ensuring accurate record-keeping and performance tracking.",
        "Generated comprehensive monthly reports by analyzing trends in attendance, tutoring session outcomes, and other key metrics, providing insights for organizational improvement.",
        "Collaborated effectively within a team of four data managers."
      ],
      imagePath: "/images/merry.png"
    },
    {
      title: "Volunteer",
      organization: "Power Up Project",
      period: "2024 - Present",
      description: [
        "Played a key role in coordinating technology donations and refurbishing computers, contributing to digital equity initiatives.",
        "Led the largest technology donation drive for Power Up through Aurora libraries, successfully collecting over 50 used computers. The initiative was featured on NCTV17.",
        "Actively contributed to developing community engagement strategies, including tech drives and awareness campaigns."
      ],
      imagePath: "/images/powerUp.png"
    }
  ]

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Set active section after scrolling
      setActiveSection(sectionId)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'awards']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="container mx-auto space-y-16 mt-32 bg-background">
        <section id="home" className="pt-8">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center w-full">
              <div className="space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold">Anay Apte</h2>
                  <p className="text-xl text-muted-foreground">
                    Aspiring CS & Business Student | Software & Machine Learning Engineer | Social Entrepreneur
                  </p>
                </div>
                <div className="flex flex-col space-y-6 text-lg">
                  <p className="w-full"><span className="font-bold text-xl">Email:</span> <span className="text-xl">apte_anay@outlook.com</span></p>
                  <p className="w-full"><span className="font-bold text-xl">Phone:</span> <span className="text-xl">331-401-8123</span></p>
                  <div className="flex space-x-8 w-full">
                    <a
                      href="https://linkedin.com/in/anay-apte-a1a123258/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary transition-colors duration-200 text-xl"
                    >
                      <Linkedin className="w-8 h-8 mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/anayapte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary transition-colors duration-200 text-xl"
                    >
                      <Github className="w-8 h-8 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <Image
                  src="/images/Anay DECA.png"
                  alt="Anay Apte"
                  width={500}
                  height={500}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full text-center">
              <h3 className="text-4xl font-extrabold mb-4">About Me</h3>
              <p className="text-lg max-w-none">
              Hello! My name is Anay Apte and I am a graduating senior in the Class of 2025 at Naperville Central High School. 
              Through the past four years, I've developed a burning passion for computer science, specifically in Artificial Intelligence 
              and Web/App Development. My biggest dream is to one day help solve the world's problems through computer science. 
              In this portfolio, you'll find all the CS-related activities I've been involved in throughout high school. 
              Regardless of what you choose to look at, I hope you enjoy learning more about me and my passions!
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-4 bg-background text-center border-t-2 border-gray-200 pt-16">
          <h2 className="text-4xl font-extrabold mb-8">Experience</h2>
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="justify-center">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="internships">Internships & Research</TabsTrigger>
              <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="space-y-4">
              <OnePercentBetterCard />
              <NCHSNavCard />
              <AndMuchMoreCard />
            </TabsContent>
            <TabsContent value="internships" className="space-y-4">
              <RudderVirtCard />
              <ArgonneCard />
            </TabsContent>
            <TabsContent value="volunteering" className="space-y-4">
              {volunteerPositions.map((position, index) => (
                <VolunteerCard key={index} {...position} />
              ))}
            </TabsContent>
          </Tabs>
        </section>

        <section id="skills" className="space-y-8 bg-background text-center border-t-2 border-gray-200 pt-16">
          <h2 className="text-4xl font-extrabold">Proficient in these Programming Languages</h2>
          <div className="grid grid-cols-5 gap-4 w-full px-4">
            {programmingLanguages.map((lang) => (
              <div key={lang.name} className="flex flex-col items-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={lang.icon}
                    alt={`${lang.name} icon`}
                    width={96}
                    height={96}
                    className="transition-all duration-300 hover:scale-110"
                  />
                </div>
                <span className="text-xl text-muted-foreground">{lang.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="awards" className="space-y-4 bg-background text-center border-t-2 border-gray-200 pt-16">
          <h2 className="text-4xl font-extrabold mb-8">Awards & Achievements</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </section>
        <div className="h-16"></div>
      </main>
    </div>
  )
}
