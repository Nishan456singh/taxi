"use client"
import { cn } from "../../utils/cn";

export default function CardDemo() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 gap-4">
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/5668466/pexels-photo-5668466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZ5MXFhZWltOXF3ZGpwZWF0bTAxajFpbXY4Z24ya3ZycHNveXdoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wK2OYJONVnWcmjCi6a/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZ5MXFhZWltOXF3ZGpwZWF0bTAxajFpbXY4Z24ya3ZycHNveXdoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wK2OYJONVnWcmjCi6a/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Corporate Transportation Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Corporate Transportation ShuttleTrivalley Airporter provide best SFO/OAK/SJC airport transportation and corporate transportation shuttle service in Modesto.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/12283299/pexels-photo-12283299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NmOGs5Njl3dHJ1eDFpMjBlMnB2eXFiYWhueXZxM3lsbGNxenJvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9nNGBGVM42VUs/200.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NmOGs5Njl3dHJ1eDFpMjBlMnB2eXFiYWhueXZxM3lsbGNxenJvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9nNGBGVM42VUs/200.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Prom Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Arrive at your prom with our excellent proms shuttle Modesto City.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVjbnBzbjE4MDZ0cDRjYXhvZms1MWo4ZXFqN3UzZ2JkaThuNGtreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGy6d7uJRemHGKI/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVjbnBzbjE4MDZ0cDRjYXhvZms1MWo4ZXFqN3UzZ2JkaThuNGtreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGy6d7uJRemHGKI/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Wedding Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Our wedding shuttles are amazing and well decorated. Book your wedding shuttle in Modesto with us.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW1vY212NWdzam1tZGJndG92aDM2cWdsd3NyZ3h4cTVkcm02bndqNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W10zWYnncKjw7q1HdF/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW1vY212NWdzam1tZGJndG92aDM2cWdsd3NyZ3h4cTVkcm02bndqNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W10zWYnncKjw7q1HdF/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Night on the Town Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Take benefit of our great prices on night on the town shuttle in Modesto.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnF1bGxqdWV3ZDB0NnRzMjM2eHNmZm5iaDVqNnRybnI0ZXoya2I4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E3L5goMMSoAAo/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnF1bGxqdWV3ZDB0NnRzMjM2eHNmZm5iaDVqNnRybnI0ZXoya2I4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E3L5goMMSoAAo/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Wine Tour Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Enjoy your weekdays with our Wine Tours Shuttle in Modesto City.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHA5b3RsbTNwNWF5dGExM2t3b3h0am8waTZiZ2xweHpvN3hlZHo1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ACxfcWKCJG5Us/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHA5b3RsbTNwNWF5dGExM2t3b3h0am8waTZiZ2xweHpvN3hlZHo1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ACxfcWKCJG5Us/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Bachelor Party Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Do your bachelor party right in a shuttle with best prices on bachelor party shuttle service in Modesto.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/234196/pexels-photo-234196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVkOThlMGVnbWd1NzZ2ZmIyZWk3cTU4dG44OThzeHR2cGU3aTVvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LzwcNOrbA3aYvXK6r7/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVkOThlMGVnbWd1NzZ2ZmIyZWk3cTU4dG44OThzeHR2cGU3aTVvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LzwcNOrbA3aYvXK6r7/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Birthday Party Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        We provide birthday party shuttle in Modesto for adult and kids birthdays.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGdkdHYzaXR5bzJnaXB2MjVhNnlqNjBjaWg4eXR2Z3FjMXBlaGE5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r6jrEccATOZ6U/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGdkdHYzaXR5bzJnaXB2MjVhNnlqNjBjaWg4eXR2Z3FjMXBlaGE5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r6jrEccATOZ6U/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Concert Shuttle
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        We offers flawless concert shuttle in Modesto with same day service. Arrive at your next Modesto concert in style.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.pexels.com/photos/5778222/pexels-photo-5778222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1nODN5YXdneGdmZ3lmdnVtamJ3dDg1enZ3c3dnZG0yNXc5eWFqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CYLmqDJ1xi3EA/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1nODN5YXdneGdmZ3lmdnVtamJ3dDg1enZ3c3dnZG0yNXc5eWFqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CYLmqDJ1xi3EA/giphy.webp)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}
            >
                <div className="text relative">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Shuttle for Charter
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        We also provide charter service in Modesto ca.
                    </p>
                </div>
            </div>
        </div>
    );
}
