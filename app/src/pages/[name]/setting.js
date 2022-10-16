import React from "react"
import { useRouter } from "next/router"

export default function Setting({ query }) {
    const router = useRouter()
    console.log(router.query)
    //query.name に [name]の情報が入っている
    const clickHandler = () => {
        //表示されるもの＝第1引数、URL＝第2引数
        // 履歴情報を追加する
        // router.push("/", "/dummy-url")

        // replace、とすると、今開いているページが dummy-urlに上書きされる
        // = 履歴情報がなくなる
        // router.replace("/", "/dummy-url")
        // 一つ前のページに戻る
        router.back()
        // RELOADする
        router.reload()
    }
    return (
        <>
            <h1>rounterから取得:{router.query.name}</h1>
            <button onClick={clickHandler}>アクションによる画面遷移</button>
        </>
    )
}

/**
 * SSR getServerSideProps
 *  指定の関数名.この関数名があると、読み込まれる。
 *  props で設定したものが、関数コンポーネントに渡される
 *
 */
export async function getServerSideProps(context) {
    //[name] の情報は、
    //getServerSideProps の context にオブジェクトとして格納されてくる
    // console.log(context.query)
    const { query } = context
    return {
        props: { query },
    }
}
