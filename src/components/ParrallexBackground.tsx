export default function ParallaxBackground() {
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                <div className="absolute inset-0 w-full h-screen -z-50" style={{
                    backgroundImage: "url(/static/assets/sky.jpg)"
                }} />
                <div />
                <div />
                <div />
                <div />
            </div>
        </section>
    )
}