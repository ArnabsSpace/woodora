import React from "react";
import TeamCard from "./TeamCard";
import member1 from "../assets/images/team1.png";
import member2 from "../assets/images/team2.png";
import member3 from "../assets/images/team3.png";
import member4 from "../assets/images/team4.png";
import member5 from "../assets/images/team5.png";
import member6 from "../assets/images/team6.png";

const teamData = [
  {
    image: member1,
    name: "Riya Mehra",
    role: "Head of Design",
    desc: "Passionate about modern interiors, Riya leads our design team to create timeless functional furniture.",
  },
  {
    image: member2,
    name: "Amit Sharma",
    role: "Production Manager",
    desc: "Amit ensures every piece we craft meets the highest quality standards with precision.",
  },
  {
    image: member3,
    name: "Sneha Roy",
    role: "Customer Experience Lead",
    desc: "Sneha brings warmth and efficiency to every customer interaction.",
  },
  {
    image: member4,
    name: "Karan Desai",
    role: "Marketing Strategist",
    desc: "Karan's creative strategies connect our brand with audiences across digital platforms.",
  },
  {
    image: member5,
    name: "Mehul Singh",
    role: "Logistics Coordinator",
    desc: "Mehul keeps deliveries smooth by managing all logistics and coordination.",
  },
  {
    image: member6,
    name: "Pooja Das",
    role: "Sustainability Advisor",
    desc: "Pooja ensures our processes remain eco-friendly and socially responsible.",
  },
];

export default function TeamMember() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Meet Our team Member
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
