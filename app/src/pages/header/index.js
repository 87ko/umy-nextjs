import React, { useState } from "react"
import Head from "next/head"
import Script from "next/script"

export default function Page() {
    const [load, setLoad] = useState([false])
    return (
        <>
            <Head>
                <title>ページのタイトル</title>
                <meta property='og:title' content='ページのタイトル' />
            </Head>

            {/* ふだんはライブラリを使用する。Scriptは使わないことがおおい */}
            <Script
                src='/jquery-3.2.1.min.js'
                // strategy='beforeInteractive' //サーバから返ってくるHTMLの状態を表示
                // strategy='afterInteractive' //nextJSが読み込まれてから読み込まれる..
                strategy='lazyOnLoad' //ブラウザの処理が空いているときに読み込まれる
                onLoad={() => setLoad(true)}
            />

            <Script
                //inlineでスクリプトをかける
                dangerouslySetInnerHTML={{
                    __html: `console.log('inline Script')`,
                }}
            />
        </>
    )
}
