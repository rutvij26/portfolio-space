"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Tag from "../sub/Tag";

const Encryption = () => {
	return (
		<div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
			<div className="absolute w-auto h-auto top-0 z-[5]">

			</div>

			<div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
				<div className="flex flex-col items-center group cursor-pointer w-auto h-auto mt-20">
					<Tag variants={slideInFromTop} text="Organizations" />
				</div>
			</div>

			<div className="w-full flex items-start justify-center absolute">
				<video
					loop
					muted
					autoPlay
					playsInline
					preload="false"
					className="w-full h-auto"
					src="/encryption.webm/"
				/>
			</div>
		</div>
	);
};

export default Encryption;