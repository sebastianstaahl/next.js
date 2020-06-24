import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout';



const idPage = () => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>This is page for id: </title>
      </Head>

  <h1> Page for id: {router.query.id}</h1>
      
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default idPage;