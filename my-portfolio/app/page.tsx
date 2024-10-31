'use client'

import { useState, useEffect } from 'react'
import { Linkedin, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

function Header({ activeSection, scrollToSection }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="container mx-auto py-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/microchip.png"
              alt="Microchip logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-2xl font-bold">Anay Apte</span>
          </div>
        </nav>
        <div className="flex justify-center mt-2 space-x-1 overflow-x-auto">
          {['home', 'experience', 'skills', 'awards'].map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section)}
              variant={activeSection === section ? "default" : "ghost"}
              size="sm"
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
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>{organization}</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
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
      image: '/images/calorieGallery.png',
      description: 'Comprehensive calorie tracking interface with detailed nutritional information and progress visualization.'
    },
    {
      image: '/images/powerHour.png',
      description: 'Power Hour feature helping users maximize their productivity with focused time blocks and achievement tracking.'
    },
    {
      image: '/images/profile.png',
      description: 'Habit dashboard showcasing daily streaks, completion rates, and personalized insights for continuous improvement.'
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
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>One Percent Better</CardTitle>
            <CardDescription>Habit Tracking Application</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li>Developed a comprehensive habit tracking application focused on incremental improvement</li>
              <li>Implemented calorie tracking and nutritional analysis features</li>
              <li>Created Power Hour productivity tracking system</li>
              <li>Built with React Native and Firebase for real-time data synchronization</li>
              <li>Integrated data visualization for progress tracking</li>
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
      image: '/images/mappedin.png',
      description: 'Integration with MappedinWeb SDK provides an interactive, dynamic 3D map of the school building, allowing for precise navigation and location services.'
    },
    {
      image: '/images/schedule.png',
      description: 'Personalized schedule view helps students manage their daily classes, showing room numbers and optimal routes between classrooms.'
    },
    {
      image: '/images/schoolMap.png',
      description: 'Comprehensive school map interface displaying all floors, classrooms, and facilities with real-time navigation assistance.'
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
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>NCHS Nav</CardTitle>
            <CardDescription>Mobile Navigation Application</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li>Developed a mobile application to help students navigate Naperville Central High School</li>
              <li>Implemented turn-by-turn directions and classroom schedules</li>
              <li>Integrated real-time updates for school events and room changes</li>
              <li>Used React Native and MappedinWeb SDK for seamless navigation</li>
              <li>Implemented user authentication and personalized schedules</li>
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

function VolunteerCard({ title, organization, period, description, imagePath }) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{organization} • {period}</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
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

function RudderVirtCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slides = [
    {
      image: '/images/RudderAPI.png',
      description: 'RudderVirt API documentation page, showcasing the backend architecture and available endpoints for seamless integration.'
    },
    {
      image: '/images/RudderUI.png',
      description: 'User interface of RudderVirt, demonstrating the intuitive design for managing virtual classrooms and student interactions.'
    },
    {
      image: '/images/RudderVS.png',
      description: 'Visual Studio Code integration with RudderVirt, allowing for real-time code collaboration and teaching in a virtual environment.'
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
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>Software Engineering Intern</CardTitle>
            <CardDescription>Eigenvector LLC • Summer 2023</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with the team to implement new features and improve existing ones</li>
              <li>Participated in code reviews and contributed to the company's best practices</li>
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
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle>Argonne ESRP Data Analysis Team</CardTitle>
            <CardDescription>Argonne National Laboratory • 2022 - 2023</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="list-disc list-inside space-y-2">
              <li>Conducted data analysis on large-scale scientific datasets</li>
              <li>Developed machine learning models to predict experimental outcomes</li>
              <li>Collaborated with researchers to interpret and present findings</li>
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
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Argonne National Laboratory is a science and engineering research national laboratory operated by the University of Chicago for the U.S. Department of Energy.
            </p>
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
      "1st Place - State Leadership Conference, Web Application Team (2023)",
      "3rd Place - National Leadership Conference, Web Application Team (2023)",
      "1st Place - Regional Leadership Conference, Java Programming (2022)"
    ],
    imagePath: "/images/BPA.jpg"
  },
  {
    organization: "Naperville School District 203",
    achievements: [
      "Outstanding CS Student of the Year (2023)",
      "1st Place - District-wide Hackathon (2022)",
      "Perfect Attendance Award (2021-2023)"
    ],
    imagePath: "/images/naperville.png"
  },
  {
    organization: "College Board",
    achievements: [
      "AP Scholar with Distinction (2023)",
      "Perfect Score - AP Computer Science A Exam (2022)",
      "Perfect Score - AP Calculus BC Exam (2023)"
    ],
    imagePath: "/images/collegeBoard.png"
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const volunteerPositions = [
    {
      title: "Co-Founder & Director",
      organization: "CodeBytes Computer Science Camp",
      period: "2021 - Present",
      description: [
        "Founded and directed a summer camp teaching computer science to middle and high school students",
        "Developed comprehensive curriculum covering programming fundamentals",
        "Managed team of instructors and coordinated camp activities"
      ],
      imagePath: "/images/codebytes.png"
    },
    {
      title: "Volunteer",
      organization: "Power Up Project",
      period: "2020 - Present",
      description: [
        "Assisted in providing technology education to underserved communities",
        "Conducted workshops on basic computer skills and internet safety",
        "Helped develop educational materials and resources"
      ],
      imagePath: "/images/powerUp.png"
    },
    {
      title: "Data Manager",
      organization: "The Merry Tutor",
      period: "2022 - Present",
      description: [
        "Managed and analyzed data for free tutoring services",
        "Implemented data-driven strategies to improve tutoring effectiveness",
        "Coordinated with team members to optimize resource allocation"
      ],
      imagePath: "/images/merry.png"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Reduced offset for header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'awards']
      const scrollPosition = window.scrollY + 100 // Reduced offset for header

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
                I'm a passionate computer science student with a keen interest in artificial intelligence and machine learning.
                I love solving complex problems and building innovative solutions that can make a positive impact on the world.
                My journey in the world of technology has been driven by curiosity and a desire to push the boundaries of what's possible.
                From developing cutting-edge algorithms to creating user-friendly applications, I'm always eager to take on new challenges
                and learn from every experience. As I continue to grow in my field, I'm excited about the possibilities that lie ahead
                and the potential to contribute to groundbreaking advancements in technology.
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
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">And Much More Including:</h3>
              </div>
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
