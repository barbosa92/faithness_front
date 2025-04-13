// app/home/page.tsx
"use client";

import { Button } from "@/components/button";
import { Card, CardBody } from "@/components/card";
import Link from "next/link"; // Use Next.js Link component
import { Heart, Users, Target, BookOpen, ArrowRight } from "lucide-react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const teamMembers = [
	{
		name: "Sarah Johnson",
		role: "Head Trainer",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
		description:
			"Certified personal trainer with 10+ years of experience in spiritual wellness.",
	},
	{
		name: "Michael Chen",
		role: "Spiritual Guide",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
		description: "Experienced meditation teacher and spiritual wellness coach.",
	},
	{
		name: "Rachel Smith",
		role: "Nutrition Expert",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
		description: "Holistic nutrition specialist focused on body-mind-spirit wellness.",
	},
];

const features = [
	{
		icon: Heart,
		title: "Holistic Wellness",
		description:
			"Integrate physical fitness with spiritual growth for complete well-being.",
	},
	{
		icon: Users,
		title: "Community Support",
		description:
			"Join a supportive community of like-minded individuals on their wellness journey.",
	},
	{
		icon: Target,
		title: "Personalized Goals",
		description:
			"Set and achieve your personal fitness and spiritual wellness objectives.",
	},
	{
		icon: BookOpen,
		title: "Daily Devotionals",
		description:
			"Start each workout with spiritual inspiration and mindful reflection.",
	},
];

export default function Home() {

	return (
		<div className="min-h-screen bg-background font-['Montserrat']">
			{/* Hero Section */}
			<section className="bg-primary/5 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-5xl font-bold mb-6 leading-tight">
							Transform Your Body,<br />Nurture Your Spirit
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							Join a community where fitness meets faith, and every workout
							becomes a step towards holistic well-being.
						</p>

						<div className="flex gap-4 justify-center">
							<Link href="/auth">
								<Button size="lg" className="font-semibold">
									Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="/workouts">
								<Button size="lg" variant="outline" className="font-semibold">
									Explore Workouts
								</Button>
							</Link>
						</div>

					</div>
				</div>
			</section>

			{/* Vision Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-6">Our Vision</h2>
						<p className="text-lg text-muted-foreground mb-8">
							We believe in the power of integrating physical fitness with
							spiritual growth. Our platform is designed to help you achieve not
							just a stronger body, but a deeper connection with your faith and
							overall well-being.
						</p>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-20 bg-primary/5">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Why Choose Us
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<Card key={index} className="border-none shadow-lg">
								<CardBody className="pt-6">
									<div className="flex flex-col items-center text-center">
										<feature.icon className="h-12 w-12 text-primary mb-4" />
										<h3 className="text-xl font-semibold mb-2">
											{feature.title}
										</h3>
										<p className="text-muted-foreground">
											{feature.description}
										</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<Card key={index} className="overflow-hidden">
								<CardBody className="p-0">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-64 object-cover"
									/>
									<div className="p-6">
										<h3 className="text-xl font-semibold mb-1">
											{member.name}
										</h3>
										<p className="text-primary font-medium mb-2">
											{member.role}
										</p>
										<p className="text-muted-foreground">
											{member.description}
										</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-primary/5 py-20  text-default-800">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Begin Your Journey?
					</h2>
					<p className="text-xl mb-8">
						Join our community today and experience the perfect blend of
						physical and spiritual wellness.
					</p>
					<Link href="/auth">
						<Button size="lg" variant="outline" className="font-semibold">
							Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}