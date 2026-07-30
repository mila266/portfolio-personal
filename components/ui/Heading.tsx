export default function Heading({
    command,
    title,
    description,
}: {
    command: string;
    title: string;
    description?: string;
}) {
    return (
        <>
            <p className="font-mono text-sm text-emerald-400 mb-2">$ {command}</p>
            <h2 className={`text-3xl font-bold ${description ? "mb-2" : "mb-8"}`}>
                {title}
            </h2>
            {description && (
                <p className="text-neutral-400 mb-8 max-w-2xl">{description}</p>
            )}
        </>
    );
}