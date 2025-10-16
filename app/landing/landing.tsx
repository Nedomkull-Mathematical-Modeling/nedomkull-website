import RepoCard from "../components/repocard";
import { getBasePath } from "../basePath";

export function LandingPage() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="flex-1 flex flex-col items-center min-h-0">
        <header className="flex flex-row justify-between items-center py-8 gap-9 w-full h-full text-white" style={{"backgroundColor": "black"}}>
            <p className="px-4">Nedomkull Mathematical Modeling</p>
            <p className="px-4">Menu</p>
        </header>
        <div className="w-full p-4" style={{"backgroundColor": "#FF8621"}}>
        </div>
        <img src={`${getBasePath()}/math.jpg`} alt="Mathematics" className="block w-full" />
        <div className="w-full space-y-6 px-4 py-8 flex flex-row justify-between">
            <div className="w-full text-center">
                <h2 className="text-3xl font-bold">Nedomkull Mathematical Modeling</h2>
            </div>
            <div className="w-full text-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                    {resources.map(({ owner, repo }) => (
                        <RepoCard key={owner + repo} owner={owner} repo={repo} />
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
