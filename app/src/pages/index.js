import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            {/* Link で囲むと、画面遷移が発生しない
             *   as URL　とすると、URLはdummy-urlを表示する */}
            {/* <Link href='/blog' as='/dummmy-url'> */}

            {/* href={{pathname: ***, query:{key:value}}} とすると、queryを指定できる */}
            <Link href={{ pathname: "/blog", query: { key: "value" } }}>
                <a>/blog</a>
            </Link>
            {/* a tagだと、画面遷移が発生する */}
            <a href='/blog'>/blog</a>
        </>
    )
}
