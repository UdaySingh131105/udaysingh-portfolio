import IconSphere from "@/components/IconSphere";

export default function Page() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="absolute h-[120%] w-[75%] opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                        <IconSphere />
                      </div>
        </div>
    )
}