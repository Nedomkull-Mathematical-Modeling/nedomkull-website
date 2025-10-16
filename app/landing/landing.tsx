import RepoCard from "../components/repocard";
import {getBasePath} from "~/basePath";
import GithubIcon from "~/components/Github";
import Highlights from "~/components/highlights";
import Hero from "~/components/Hero";

export function LandingPage() {
    return (
        <main className="flex items-center justify-center pb-4">
            <div className="flex-1 flex flex-col items-center min-h-0">
                <header
                    className="sticky top-0 z-50 flex flex-row justify-between items-center py-3 gap-9 w-full h-full text-white bg-black">
                    <img src={`${getBasePath()}/logo.png`} alt="Logo" className="max-h-[96px] px-16"/>
                    <nav className="text-lg font-light flex flex-row gap-6 px-16">
                        <a href="#about" className="hover:underline translate-y-1 ">About</a>
                        <a href="https://github.com/Nedomkull-Mathematical-Modeling"
                           className="hover:underline flex flex-row items-center gap-2">
                            <GithubIcon/>
                        </a>
                    </nav>
                </header>
                <div className="w-full p-4" style={{"backgroundColor": "#FF8621"}}>
                </div>
                <div className="relative w-full">
                    <img src={`${getBasePath()}/math.jpg`} alt="Mathematics" className="block w-full"/>
                    <div className="absolute inset-0 flex items-center px-16 z-10">
                        <Hero/>
                    </div>
                </div>
                <div id="about"
                     className="w-full px-16 py-4 gap-32 flex flex-row justify-between bg-gray-100 -mt-12 rounded-t-2xl shadow-md relative z-10 scroll-mt-24">
                    <div className="text-center flex flex-col gap-8 max-w-[60%] mx-auto">
                        <Highlights/>
                    </div>
                </div>
                <div className="w-full p-4" style={{"backgroundColor": "#FF8621"}}>
                </div>
                <div id="what-have-we-done"
                     className="w-full px-16 py-12 gap-32 flex flex-row justify-between bg-gray-100 rounded-t-2xl shadow-md relative z-10 scroll-mt-24">
                    <div className="text-center flex flex-col gap-8 mx-auto">
                        <h3 className="text-2xl font-medium text-center">What have we done so far?</h3>
                    </div>
                    <div className="text-center items-center">
                        <h3 className="font-medium text-2xl">Open Source Initiatives</h3>
                        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                            {resources.map(({owner, repo}) => (
                                <RepoCard key={owner + repo} owner={owner} repo={repo}/>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

const resources = [
    {
        owner: "hbldh",
        repo: "bleak",
    },
    {
        owner: "Nedomkull-Mathematical-Modeling",
        repo: "ScenoMorph"
    },
    {
        owner: "hbldh",
        repo: "hitherdither"
    },
    {
        owner: "hbldh",
        repo: "pyefd"
    },
    {
        owner: "hbldh",
        repo: "lspopt"
    },
    {
        owner: "hbldh",
        repo: "skboost"
    },
    {
        owner: "hbldh",
        repo: "b2ac"
    },
    {
        owner: "hbldh",
        repo: "pybankid"
    },
];
