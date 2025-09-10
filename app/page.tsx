"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, FileText, Phone } from "lucide-react";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <img 
                  src="public/photo.jpg" 
                  alt="Profile Photo" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">Mohamed Othman</h1>
          <p className="text-xl sm:text-2xl text-blue-400 mb-6 text-balance">Data Analyst</p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto text-pretty">
            I specialize in analyzing data and building interactive dashboards to turn data into actionable insights.
          </p>

          {/* Quick Contact Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 hover:bg-slate-800 bg-transparent hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href="mailto:medo20do20@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 hover:bg-slate-800 bg-transparent hover:scale-110 transition-all duration-200"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/mohamed-sahloul-b740b7231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 hover:bg-slate-800 bg-transparent hover:scale-110 transition-all duration-200"
              asChild
            >
              <a href="https://github.com/picachu3112" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-600 hover:bg-slate-800 bg-transparent hover:scale-110 transition-all duration-200"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/12Ddlvlfyb7d4iSepKdpdIjcZxWtJXdee/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-200">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 hover:bg-slate-800 bg-transparent px-8 py-3 rounded-full hover:scale-105 transition-all duration-200"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-balance">About Me  </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I am a Data Analyst who combines strong technical expertise with creative problem-solving. My unique edge lies in my ability to transform complex datasets into clear, actionable insights through interactive dashboards and compelling visualizations. Skilled in Python, R, SQL, and Power BI, I bridge the gap between raw numbers and real-world decisions, helping businesses see the bigger picture and act with confidence.
              </p>

              
            </div>

            <div className="flex justify-center">
              <img
                src="/photo.jpg"
                alt="Profile Photo"
                className="w-80 h-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-balance text-center">Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400">Data Cleaning & Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Transform messy, unstructured data into well-organized datasets ready for analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400">Data Visualization & Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Build interactive dashboards and clear visualizations using Power BI, Python, and R to help clients
                  understand trends and make better decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400">Data-Driven Insights & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Analyze data to uncover patterns, create detailed reports, and provide actionable recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400">Predictive Modeling (Machine Learning Basics)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Apply basic machine learning techniques to build predictive models that forecast trends and support
                  smarter strategies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-balance text-center">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Programming & Data Analysis</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Python
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  R
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  SQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Excel
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Pandas
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  NumPy
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Data Visualization & BI Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Power BI
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Matplotlib
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Seaborn
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  ggplot2
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Machine Learning (Basics)</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Scikit-learn
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Regression
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Classification
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Clustering
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Other Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  Problem Solving & Critical Thinking
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 hover:bg-blue-900 hover:text-blue-300 transition-colors"
                >
                  {"Time Manegment"}
                </Badge>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-balance">Education / Internships  </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">
              Damietta University – Faculty of Computers and AI
            </h3>
            <p className="text-lg text-slate-300 mb-2">Bachelor's Degree in Computer Science (2024 – 2028)</p>
          </div>

          

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-400">
                Digital Egypt Pioneers Initiative (DEPI) – Data Analysis Specialist Trainee
              </h3>
              <p className="text-slate-400 mb-4 italic">2025</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gained hands-on experience in data analysis, focusing on Python, SQL, and data visualization
                  techniques.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed skills in transforming complex datasets into clear, actionable insights through interactive
                  dashboards.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Applied data cleaning and preparation techniques to ensure high-quality analysis results.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-400">
                National Telecommunication Institute (NTI) – Machine Learning Trainee
              </h3>
              <p className="text-slate-400 mb-4 italic">2025</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trained on fundamental machine learning concepts and applied basic algorithms for predictive modeling.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gained experience with scikit-learn for regression, classification, and clustering tasks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-balance">Projects</h2>

          <div className="space-y-16">
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">LinkedIn Jobs Data Scraper with n8n</h3>
                    <p className="text-slate-300 mb-4">
                      A project that automatically extracts job listings from LinkedIn in Egypt and Saudi Arabia, compiling them into a CSV file for easy analysis and reporting.
                    </p>
                    <div className="flex gap-4 mb-4">
                      <a
                        href="https://github.com/picachu3112/web-scraping.git" // رابط الريبو هنا
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                        >
                          Source
                        </Button>
                      </a>

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                    <div className="bg-slate-700 rounded-lg p-6 flex items-center justify-center">
                      <img
                        src="/n8n.png"
                        alt="Project Screenshot"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                </div>
              </CardContent>
            </Card>

<Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
  <CardContent className="p-8">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="lg:order-2">
        <h3 className="text-2xl font-bold mb-4 text-white">
          MNIST Digit Classification with Gradio
        </h3>
        <p className="text-slate-300 mb-4">
          A machine learning project that classifies handwritten digits using a
          neural network. Built with Python, TensorFlow/Keras, and deployed with
          Gradio.
        </p>
        <div className="flex gap-4 mb-4">
          <a
            href="https://github.com/picachu3112/MNIST.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Source
            </Button>
          </a>
          <a
            href="https://huggingface.co/spaces/username/mnist-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Preview
            </Button>
          </a>
        </div>
      </div>

      {/* هنا مكان الصورة بدل النص */}
      <div className="bg-slate-700 rounded-lg p-6 flex items-center justify-center lg:order-1">
        <img
          src="/mnist.png"
          alt="MNIST Project Screenshot"
          className="w-full h-auto object-contain rounded-md shadow-md"
        />
      </div>
    </div>
  </CardContent>
</Card>

            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Data Visualization Dashboard</h3>
                    <p className="text-slate-300 mb-4">
                      
                    </p>
                    <div className="flex gap-4 mb-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      >
                        Source
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-6 h-48 flex items-center justify-center">
                    <div className="text-slate-400">Project Screenshot</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-balance text-center">Contact</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:medo20do20@gmail.com" className="text-lg">
                    medo20do20@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/mohamed-sahloul-b740b7231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-400" />
                  <a
                    href="https://github.com/picachu3112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">+201229971743</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-200">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
