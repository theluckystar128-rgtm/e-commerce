import { useState, useEffect } from "react"
export default function Alert({ heading, message, onClose }) {
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const t1 = setTimeout(() => {
            setFade(false);
        }, 2000)
        const t2 = setTimeout(() => {
            onClose();
        }, 3000)
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [onClose])
    return (
        <div className={`fixed top-10 right-10 p-4 rounded-lg text-center-white shadow-lg z-50 ${heading.toLowerCase() === "error" ? "bg-red-500" : "bg-green-500" } ${fade ? "animate-fadeIn" : "animate-fadeOut"}`}>
            <h1 className="text-3xl font-bold my-4 text-white">{heading}</h1>
            <p className="text-white">{message}</p>
        </div>
    )
}