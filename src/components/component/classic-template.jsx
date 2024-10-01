'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import React, { useState, useRef } from "react"
import { useRouter } from 'next/navigation'

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("Form Submitted")
}

export function ClassicTemplate() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    steps: "",
    expected:"",
    actual:"",
    severity:"medium",
    priority:"medium",
    attachments:""
  }); 
  const router = useRouter()
 
  const pref=useRef();
  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;
    console.log({
      fieldName,fieldValue
    })
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));

   
  }

  const handleSubmit = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = '/api/submit'
    const data ={}

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data[key]=value
    })

    console.log("data\n",data)

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
     
      // setFormSuccessMessage(data.submission_text)
      try{
        alert("Bug Successfully submitted")
        setFormSuccess(true)
      }catch(e){
        console.log("something Went Wrong")
      }
      
     

    }).finally(()=>{
      router.push('/tracker')
    })
  }


  return (
    (<Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Report a Bug</CardTitle>
        <CardDescription>Fill out the form below to generate a detailed bug report.</CardDescription>
      </CardHeader>
      <form method='POST'  className="grid gap-6" onSubmit={handleSubmit}>
      <CardContent>
        
          <div className="grid gap-3">
            <Label htmlFor="title">Bug Title</Label>
            <Input id="title" placeholder="Describe the bug in a few words" onChange={handleInput} value={formData.title} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="mt-3">Description</Label>
            <Textarea
              id="description"
              onChange={handleInput} value={formData.description}
              placeholder="Provide a detailed description of the issue"
              rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="steps" className="mt-3">Steps to Reproduce</Label>
            <Textarea id="steps" onChange={handleInput} value={formData.steps} placeholder="List the steps to reproduce the bug" rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expected" className="mt-3">Expected Behavior</Label>
            <Input id="expected" onChange={handleInput} value={formData.expected} placeholder="Describe the expected behavior" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="actual" className="mt-3">Actual Behavior</Label>
            <Input id="actual" onChange={handleInput} value={formData.actual} placeholder="Describe the actual behavior" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="priority" className="mt-3">Priority</Label>
              <Select defaultValue="medium" id="priority" onChange={handleInput} value={formData.priority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="severity" className="mt-3">Severity</Label>
              <Select defaultValue="medium" id="severity"onChange={handleInput} value={formData.severity} >
                <SelectTrigger >
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="attachments" className="mt-3" >Attachments</Label>
            <Input id="attachments" onChange={handleInput} value={formData.attachments} multiple type="file" />
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Generate Bug Report</Button>
       
      </CardFooter>
      </form>
      
    </Card>)
  );
}
