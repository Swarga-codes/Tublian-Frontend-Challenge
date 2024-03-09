import React from 'react'
import Posts from './Posts'


const postsData=[
    {image:'https://avatars.githubusercontent.com/u/810438?v=4',caption:'Success can be achieved by being bold enough...',date:'May 30',views:'1.1k'},
    {image:'https://avatars.githubusercontent.com/u/810438?v=4',caption:'Knowing what to do can never be okay, you have to...',date:'May 30',views:'3.1k'}
]
function PostActivity() {
  return (
    <div className='mt-10 px-4'>
        <h1 className='text-lg font-bold'>Post Activity</h1>
        <div className='mb-10'>
            {postsData.map((post,idx)=>(
                <Posts key={idx} image={post.image} caption={post.caption} date={post.date} views={post.views}/>
            ))
       
            }
       </div>
    </div>
  )
}

export default PostActivity