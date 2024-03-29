import Head from "next/head";
import img from '../image/common/pre.png';

export default function HeadTitle(){
    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <meta property="og:title" content="다시, 봄"/>
            <meta property="og:image" content={img}/> 
            <meta property="og:description" content="2023 둥국대학교 봄 대동제 축제사이트"/>
            <title>Re:Spring</title>
            <meta name="description" content="2023 둥국대학교 대동제 다시 봄 축제사이트입니다." />
        </Head>
    )
}