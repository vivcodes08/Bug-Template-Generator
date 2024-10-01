'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CriticalBugs() {

  const router=useRouter();
  return (
    (<Card className="w-full max-w-2xl ml-80 mt-10">
      <CardHeader className="bg-red-500 text-white p-6">
        <CardTitle className="text-2xl font-bold">Report a Critical Issue</CardTitle>
        <CardDescription className="text-lg">
          Please fill out this form to report a high-priority bug or incident.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Detailed Description</Label>
          <Textarea
            className="min-h-[150px]"
            id="description"
            placeholder="Provide a detailed description of the issue, including any steps to reproduce it." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attachments">Attach Files (optional)</Label>
          <Input id="attachments" multiple type="file" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-6">
        <Button onClick={()=>{router.push('/pricing')}}>Submit Report</Button>
      </CardFooter>
    </Card>)
  );
}
