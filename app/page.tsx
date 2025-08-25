"use client";

import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/projects.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
          <div>
            <h1 className="text-5xl font-bold text-center py-2">
              By{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                AJ
              </span>
              .
            </h1>
            <p className="text-lg py-2">
              Software Engineer, Open Source Advocate, Occasional Blog Writer.
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 5v14m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-2 text-sm text-gray-500">Scroll down</span>
          </div>
        </div>
      </div>
      <div className="w-full py-8 bg-card/40">
        <div className="py-12" id="projects">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text leading-normal">
            My Projects
          </h1>
        </div>
        <div className="w-full my-8 md:w-[85%] md:m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4 md:px-8">
            {projects.MyProjects.map((project, id) => (
              <Card key={project.Title + id}>
                <CardHeader>
                  <CardTitle>
                    {project.Title}{" "}
                    {project.new && <Badge variant="secondary">New!</Badge>}
                  </CardTitle>
                  <CardDescription>
                    {project.Date} &mdash; {project.Descriptor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {Array.isArray(project.Information) &&
                    project.Information.map((info, i) => (
                      <p key={i} className="mb-4 text-muted-foreground">
                        {info}
                      </p>
                    ))}
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.Skills) &&
                      project.Skills.length > 0 && (
                        <h1 className="w-full text-sm font-semibold">
                          Skills I have used in this project:
                        </h1>
                      )}
                    {project.Skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {project.Pictures && (
                    <Carousel
                      opts={{ loop: true, align: "start" }}
                      className="mt-4"
                    >
                      <CarouselPrevious />
                      <CarouselNext />
                      <CarouselContent>
                        {project.Pictures.map((image, index) => (
                          <CarouselItem key={index}>
                            <Image
                              src={image}
                              alt={project.Title + " image " + index}
                              width={700}
                              height={500}
                              className="object-contain rounded-2xl w-full max-h-[500px]"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  )}
                </CardContent>
                <CardFooter>
                  <CardFooter className="flex gap-4 justify-center items-center w-full">
                    {project.Website && (
                      <Button asChild>
                        <Link href={project.Website} target="_blank">
                          View Website
                        </Link>
                      </Button>
                    )}
                    {project.Repo && (
                      <Button asChild variant="secondary">
                        <Link href={project.Repo} target="_blank">
                          GitHub Repository
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
