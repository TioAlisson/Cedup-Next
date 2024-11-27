import Link from "next/link";

interface CardDocumentsProps {
    title: string
    paragraph: string
    url1: string
    url2: string
}

export default function CardDocuments({ title, paragraph, url1, url2 }: CardDocumentsProps) {
    return (
        <div className="odd:bg-transparent even:bg-gray py-10 px-6">
            <h1 className="text-2xl line-clamp-1 font-bold text-sencodary-500 text-center">{title}</h1>
            <p className="py-10 text-lg font-medium text-center">{paragraph}</p>
            <div className="flex justify-center gap-4">
                <Link href={url1}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                            fill="#85B6FF"
                        />
                    </svg>
                </Link>
                <Link href={url2}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.35 6.04C19.0141 4.33772 18.0976 2.80486 16.7571 1.70325C15.4165 0.601633 13.7351 -0.000392242 12 1.91737e-07C9.11 1.91737e-07 6.6 1.64 5.35 4.04C3.88023 4.19883 2.52101 4.89521 1.53349 5.99532C0.545971 7.09543 -0.000171702 8.52168 4.04925e-08 10C4.04925e-08 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM17 9L12 14L7 9H10V5H14V9H17Z"
                            fill="#85B6FF"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
