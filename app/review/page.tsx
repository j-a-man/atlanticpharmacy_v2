"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, ArrowLeft, Send, Loader2 } from "lucide-react"

const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=Atlantic+Pharmacy+%26+Surgical+Supplies+1706B+Atlantic+Ave+Brooklyn+NY+Reviews#lrd=0x89c25c78449142e1:0x2527109bbda974e9,3,,,"

export default function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sendEmailToPharmacy = async (starRating: number, message: string) => {
    try {
      console.log("Attempting to send email...");
      await fetch('/api/contact', {
        method: 'POST',
        keepalive: true, 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: starRating, message: message }),
      })
      console.log("Email request sent to background");
      return true
    } catch (error) {
      console.error("Background email failed", error)
      return false
    }
  }

  const handleStarClick = async (star: number) => {
    setRating(star)
    setSubmitted(false)

    if (star >= 4) {
      setIsSubmitting(true)
      await sendEmailToPharmacy(star, "High rating received! User is being redirected to Google Maps.")
      window.location.href = GOOGLE_REVIEW_URL
    }
  }

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await sendEmailToPharmacy(rating, feedback)
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/20 px-6 py-12">
      <div className="max-w-lg w-full space-y-8 bg-background border border-border p-8 md:p-12 rounded-xl shadow-sm text-center relative">
        
        <div className="space-y-4">
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="absolute top-6 left-6 md:top-8 md:left-8 rounded-full px-4 border-muted-foreground/20 hover:border-primary/50 hover:bg-background transition-all shadow-sm"
          >
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-[family-name:var(--font-playfair)]">
              <ArrowLeft className="h-3 w-3" /> Back
            </Link>
          </Button>

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium mt-8">
            How did we do?
          </h1>
          <p className="text-muted-foreground">
            Your feedback helps us serve our community better.
          </p>
        </div>

        <div className="flex justify-center gap-2 py-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              disabled={isSubmitting}
              className="transition-transform hover:scale-110 focus:outline-none disabled:opacity-50 disabled:hover:scale-100"
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            >
              <Star
                className={`h-10 w-10 transition-colors duration-200 ${
                  star <= (hover || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground/20"
                }`}
              />
            </button>
          ))}
        </div>

        {rating >= 4 && isSubmitting && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-4">
            <div className="flex flex-col items-center justify-center gap-3 text-green-600">
              <Loader2 className="h-8 w-8 animate-spin" />
              <div className="text-lg font-medium">Thank you!</div>
              <p className="text-sm text-muted-foreground">Redirecting to Google Reviews...</p>
            </div>
          </div>
        )}

        {rating > 0 && rating <= 3 && !submitted && (
          <form onSubmit={handleFeedbackSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2 text-left">
              <label htmlFor="feedback" className="text-sm font-medium">
                We're sorry we missed the mark. Please tell us how we can improve:
              </label>
              <Textarea
                id="feedback"
                placeholder="Type your message here..."
                className="min-h-[120px] resize-none"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Feedback
                </>
              )}
            </Button>
          </form>
        )}

        {submitted && (
          <div className="py-8 space-y-4 animate-in zoom-in duration-300">
            <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <Send className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium">Thank you!</h3>
            <p className="text-muted-foreground">Your feedback has been sent to our team.</p>
          </div>
        )}

      </div>
    </main>
  )
}
