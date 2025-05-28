import React from "react"

export default function Header() {
    return (
        <header className="bg-[#7ed957] shadow-lg p-4" >
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center space-x-3">
                <a href="#" class="flex items-center">
                    <img src="/src/assets/logo.png" alt="CalcVis Logo" class="h-10 w-10 md:h-12 md:w-12" />
                    <span class="text-white text-3xl font-extrabold tracking-tight ml-2">CalcVis</span>
                </a>
                </div>

                <nav>
                <ul class="flex space-x-6 pr-4">
                    <li><a href="#" class="text-white text-lg">Home</a></li>
                </ul>
                </nav>
            </div>
        </header>
    );
}