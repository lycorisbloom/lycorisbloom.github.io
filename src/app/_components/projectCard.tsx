export default function ProjectCard({title}:{title:string}) {
    return (
        <div className="bg-foreground">
            <p className="text-text-light">{title}</p>
        </div>
    );
}