import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Code from "./Code";
import  ImageHandler  from "./ImageHandler";
import Space from "./Space";
import cover from '../Assets/images/test-img.png'
import "./blog.css";
import Note from './Note'

const Post = (props) => {
    const [postContent, setPostcontent] = useState('')
    const [isDark, setIsDark] =props.ctx.theme;
    const post = props.post;
  
    useEffect(() => {
      import(require(props.post.path)) //src/Content/13-08-22_Try-to-Post.md
        .then(res =>
          fetch(res.default)
            .then(response => response.text())
            .then(response => {setPostcontent(response)})
            .catch(err => console.log(err))
        )
    }, [])
  return (
    <div>
       <div className={isDark?"article-wrapper-dark":"article-wrapper"}>
      <article>
        <header>
          <div className="article__cover">
            <img
              src={cover}
              alt="my-cover"
            />
           
          </div>
        </header>
        <main>
          <Markdown
            options={{
              // forceWrapper: true ,
              // forceBlock:false,
              overrides: {
                Code: {
                  component: Code,
                  props: {
                    isDark
                  }
                },
                ImageHandler:{
                  component:ImageHandler,
                  props:{
                    isDark
                  }
                },
                Note:{
                  component:Note,
                  props:{
                    isDark
                  }
                },
                Space:{
                  component:Space
                }
              }
            }}
          >
            {postContent}
          </Markdown>
        </main>
      </article>
    </div>
    </div>
  )
}

export default Post
