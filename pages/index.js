import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import fetch from 'isomorphic-unfetch';


export default function Home({ posts}) {
  
  const [title, setTitle] = useState('');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <ol>
            {posts.map( post => (
              
              <li key={`Post_${post.number}`}>
                
                <h2>{post.common_name}</h2>
                
                <a>
                  <img src={post.cover_image} alt= "image of flower"/>
                </a>
                
                <Link href="/post/[id]" as={`/post/${post.number}`}>
                  <a>More information about: {post.common_name}</a>
                </Link>

                <br></br><br></br>
              </li>
            ))}
          </ol>
        </div>
      </section>

      


    </Layout>
  )
};

Home.getInitialProps = async () => {
  const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json');
  const posts = await res.json()
  console.log(posts)
  console.log(typeof posts);
  let all_details = []

  // for (var property in posts) {
  //   console.log('Inside for loop')
  //     console.log(posts[property].common_name)
  //     const flower_detail = await fetch('https://flowers-mock-data.firebaseio.com/flowers/${property}.json');
  //     const flower_detail_data = await flower_detail.json()
  //     //console.log(flower_detail_data)
  //     all_details.push(flower_detail_data)

  //   }
    let counter = 0;
    posts.forEach(post => {
      post['number'] = counter;
      counter ++;
    }); 
  //console.log("FIRST FLOWER: ", all_details[0])

  
  return {posts}
};
