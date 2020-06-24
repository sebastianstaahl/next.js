import {useRouter} from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const PostPage = ({ post }) => {
  
  const router = useRouter();
  
  return (
    <div>
      <p>Name: {post.common_name}</p>
      <p>Latin Name: {post.latin_name}</p>
      <p>Notes: {post.notes}</p>
                      
        <p>Soils preference:</p>
        <ul>
          {post.soil.map(soil => (
            <li>{soil}</li>
          ))}
        </ul>

      <p>Blooming season: {post.blooming_season}</p>
      <p>Depth: {post.depth.numberInt}</p>
      <p>Height:</p>
        <ul>
          {post.height.map(h1 => (
            <li>{h1.numberInt}</li>
          ))}
        </ul>
      <p>Spacing: {post.spacing.numberInt}</p>
      <p>Sun: {post.sun}</p>
      <p>Photo of the {post.common_name}:</p>
      <a>
        <img src={post.cover_image} width="572" height="381"/>
      </a>                
    </div>
  )
}

PostPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers/'+id+'.json');
  const post = await res.json()
  return { post }
}

export default PostPage;