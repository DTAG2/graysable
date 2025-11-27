"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
  imagePosition?: string;
}

export default function TeamMember({ name, role, bio, initials, image, imagePosition = "center" }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group bg-gray-950 border border-gray-800 hover:border-gray-600 transition-colors duration-300 h-full flex flex-col"
    >
      {/* Avatar area */}
      <div className="aspect-[4/3] bg-black border-b border-gray-800 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale"
            style={{ objectPosition: imagePosition }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className="text-5xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors">
            {initials}
          </span>
        )}
        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black z-10" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black z-10" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <h3 className="text-lg font-bold uppercase tracking-tight">{name}</h3>
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mt-1">{role}</p>
        <p className="mt-4 text-gray-400 text-sm leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
