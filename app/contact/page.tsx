"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import NavHeader from "@/app/header/page";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@designportfolio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">New York, NY</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <h2 className="text-xl font-bold">Connect</h2>
                  <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Instagram
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Behance
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 Portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Instagram
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Behance
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            LinkedIn
          </Link>
        </nav>
      </footer>
    </div>
  )
}

