export default function ProjectCard({ title }: { title: string }) {
    return (
        // TODO: add in images
        // TODO: add if condition for mobile or desktop project
        <div className="bg-foreground text-text-light">
            <p className="text-xl">{title}</p>
            <p>This is a placeholder description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, ante accumsan consectetur ultrices, eros libero commodo odio, nec vulputate enim arcu vel lacus.</p>
        </div>
    );
}