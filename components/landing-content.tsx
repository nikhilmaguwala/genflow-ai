"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Parth Ghinaiya",
        title: "Software Engineer",
        description: "This is the best application I've ever used!",
    },
    {
        name: "Keyur Vadodariya",
        title: "Software Developer",
        description: "I use this daily for help with my work, it's a life saver!",
    },
    {
        name: "Max David Faulkner",
        title: "CFO",
        description: "The best in class, definitely worth the premium subscription!",
    },
    {
        name: "Ryan Mhamdi",
        title: "Sr. Software Engineer",
        description: "Nice app It's very useful for me. I love it!",
    },
];

export const LandingContent = () => {

    const getInitials = (name: string) => {
        return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
    }

    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <Avatar><AvatarFallback className="bg-black text-sm">{getInitials(item.name)}</AvatarFallback></Avatar>
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}