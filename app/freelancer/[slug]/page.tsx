import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, CheckCircle, Download, MessageSquare } from "lucide-react"

export default function FreelancerProfile({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the freelancer data based on the slug
  const freelancer = {
    name: "Alex Johnson",
    title: "Full-Stack Web Developer",
    location: "San Francisco, CA",
    memberSince: "January 2020",
    lastActive: "2 hours ago",
    rating: 4.9,
    reviews: 127,
    completedProjects: 85,
    hourlyRate: "$45",
    image: "https://source.unsplash.com/iFgRcqHznqg",
    description:
      "I'm a full-stack developer with 5+ years of experience specializing in React, Node.js, and MongoDB. I've worked with startups and established companies to build responsive, scalable web applications. My focus is on creating clean, efficient code and delivering projects on time.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Responsive Design",
      "UI/UX",
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        school: "University of California, Berkeley",
        year: "2015-2019",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2021",
      },
      {
        name: "MongoDB Certified Developer",
        issuer: "MongoDB, Inc.",
        year: "2020",
      },
    ],
    portfolio: [
      {
        title: "E-commerce Platform",
        description:
          "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, product catalog, shopping cart, and payment processing.",
        image: "https://source.unsplash.com/vdaJJbls3xE",
      },
      {
        title: "Real Estate Listing App",
        description:
          "Developed a responsive web application for real estate listings with advanced search functionality, map integration, and user accounts.",
        image: "https://source.unsplash.com/jU9VAZDGMzs",
      },
      {
        title: "Task Management System",
        description:
          "Created a collaborative task management system with real-time updates, team workspaces, and analytics dashboard.",
        image: "https://source.unsplash.com/UYsBCu9RP3Y",
      },
    ],
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        date: "October 15, 2023",
        comment:
          "Alex was fantastic to work with! He understood our requirements perfectly and delivered a beautiful, functional website ahead of schedule. His communication was excellent throughout the project.",
      },
      {
        name: "Michael T.",
        rating: 5,
        date: "August 3, 2023",
        comment:
          "Incredible developer who goes above and beyond. Alex not only built exactly what we needed but also suggested improvements that made our application even better. Highly recommended!",
      },
      {
        name: "Jennifer L.",
        rating: 4,
        date: "July 12, 2023",
        comment:
          "Great experience working with Alex. He's knowledgeable, responsive, and delivered high-quality work. Would definitely hire again for future projects.",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src={freelancer.image || `/placeholder.svg?height=150&width=150&text=${freelancer.name.charAt(0)}`}
                  alt={freelancer.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">{freelancer.name}</h1>
                  <p className="text-xl">{freelancer.title}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{freelancer.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <span className="ml-1 font-medium">{freelancer.rating}</span>
                      <span className="ml-1 text-muted-foreground">({freelancer.reviews} reviews)</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{freelancer.completedProjects} jobs completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">About Me</h2>
                      <p>{freelancer.description}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Featured Work</h2>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {freelancer.portfolio.slice(0, 3).map((item, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="aspect-video w-full object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="portfolio" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {freelancer.portfolio.map((item, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="aspect-video w-full object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reviews" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
                      <div className="space-y-6">
                        {freelancer.reviews.map((review, index) => (
                          <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold">{review.name}</h3>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center my-2">
                              {Array(review.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                              {Array(5 - review.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                ))}
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="about" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Education</h2>
                      <div className="space-y-4">
                        {freelancer.education.map((edu, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold">{edu.degree}</h3>
                              <p className="text-sm">{edu.school}</p>
                              <p className="text-sm text-muted-foreground">{edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Certifications</h2>
                      <div className="space-y-4">
                        {freelancer.certifications.map((cert, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold">{cert.name}</h3>
                              <p className="text-sm">{cert.issuer}</p>
                              <p className="text-sm text-muted-foreground">{cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{freelancer.hourlyRate}/hr</h3>
                    </div>
                    <Button className="w-full gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Me
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-medium">Within 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Availability</span>
                      <span className="text-sm font-medium">Full-time</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Member Since</span>
                      <span className="text-sm font-medium">{freelancer.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last Active</span>
                      <span className="text-sm font-medium">{freelancer.lastActive}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

