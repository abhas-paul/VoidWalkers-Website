"use client";
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useRouter } from "next/navigation";

function StackedCircularFooter() {

  const router = useRouter();

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 w-16 h-16 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover scale-150"
              src="/logo.png"
              alt="voidwalkerslogo"
            />
          </div>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="cursor-pointer rounded-full"
            onClick={() => router.push("https://www.instagram.com/official.voidwalkers/")}
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Void Walkers. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Build with ☕ & ❤️ by Abhas Paul.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }