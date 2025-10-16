import {useEffect, useState} from "react";
import {Star, GitFork, Globe} from "lucide-react";

interface RepoCardProps {
    owner: string;
    repo: string;
}

function OcticonRepo() {
    return (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
             className="octicon octicon-repo mr-1 color-fg-muted">
            <path
                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
    );
}

export default function RepoCard({owner, repo}: RepoCardProps) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, [owner, repo]);

    if (!data) {
        return (
            <div className="w-full max-w-md p-4 border rounded-xl shadow-sm bg-white animate-pulse"/>
        );
    }
    console.log(data);
    return (
        <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md border rounded-xl shadow-sm bg-white hover:shadow-md transition-all p-4 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <OcticonRepo/>
                    <h3 className="text-blue-600 font-semibold hover:underline">
                        {data.name}
                    </h3>
                    {data.private ? (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
              Private
            </span>
                    ) : (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              Public
            </span>
                    )}
                </div>
            </div>

            <p className="text-gray-700 text-sm mb-3 text-left">
                {data.description || "No description provided."}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
                {data.language && (
                    <div className="flex items-center gap-1">
            <span
                className="w-3 h-3 rounded-full"
                style={{backgroundColor: "#3572A5"}} // fallback for Python
            />
                        <span>{data.language}</span>
                    </div>
                )}
                <div className="flex items-center gap-1">
                    <Star size={14}/>
                    <span>{data.stargazers_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork size={14}/>
                    <span>{data.forks_count.toLocaleString()}</span>
                </div>
            </div>
        </a>
    );
}
