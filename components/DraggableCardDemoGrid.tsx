import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Link from "next/link";

export function DraggableCardDemoGrid({ className = "" }: { className?: string }) {
  return (
    <DraggableCardContainer
      className={`relative min-h-screen w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center overflow-clip ${className}`}
    >
        <Container>
            <DraggableCardBody>
                <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop"
                alt="Some mountains"
                className="pointer-events-none relative z-10 h-80 w-full object-cover"
                />
                <p className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                How
                </p>
                <Link href="/" className="flex justify-center">
                <button className="shadow-[0_0_0_3px_#000000_inset] mt-5 px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Browse
                </button>
                </Link>
            </DraggableCardBody>
        </Container>

      <DraggableCardBody>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop"
          alt="Some mountains"
          className="pointer-events-none relative z-10 h-80 w-full object-cover"
        />
        <p className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          You
        </p>
        <Link href="/" className="flex justify-center">
          <button className="shadow-[0_0_0_3px_#000000_inset] mt-5 px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Browse
          </button>
        </Link>
      </DraggableCardBody>

      <DraggableCardBody>
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072&auto=format&fit=crop"
          alt="Some mountains"
          className="pointer-events-none relative z-10 h-80 w-full object-cover"
        />
        <p className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          Doin
        </p>
        <Link href="/" className="flex justify-center">
          <button className="shadow-[0_0_0_3px_#000000_inset] mt-5 px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Browse
          </button>
        </Link>
      </DraggableCardBody>
    </DraggableCardContainer>
  );
}


const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center rounded-lg">
      {children}
    </div>
  );
};
