import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import Code from "./Code"

import cover from '../Assets/images/test-img.png'
import "./blog.css";

const Post = (props) => {
    const [postContent, setPostcontent] = useState('')
    const [isDark, setIsDark] =props.ctx.theme;
  
    useEffect(() => {
      import('../Content/testContent/test.md')
        .then(res =>
          fetch(res.default)
            .then(response => response.text())
            .then(response => setPostcontent(response))
            .catch(err => console.log(err))
        )
    }, [])
  return (
    <div>
       <div className="article-wrapper">
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
              overrides: {
                Code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark,
                    ctx: props.ctx
                  }
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
