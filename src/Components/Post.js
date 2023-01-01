import Code from "./Code";
import Note from "./Note";
import Space from "./Space";
import BlogHead from "./BlogHead";
import {Link} from "react-router-dom";
import Markdown from "markdown-to-jsx";
import ImageHandler from "./ImageHandler";
import { LeftArrow } from "../Assets/icons"
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Post = (props) => {
  const [postContent, setPostcontent] = useState("");
  const [isDark] = props.ctx.theme;
  const post = props.post;

  const override = {
    display: "block",
    top: "40vh",
    left: "35vw",
    margin: "10",
    borderColor: `${isDark ? "#faf5f5" : "#11b880"}`,
  };

  useEffect(() => {
    import(`../Content/${post.path}.md`) //src/Content/13-08-22_Try-to-Post.md
      .then((res) =>
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => {
            setPostcontent(response);
          })
          .catch((err) => console.log(err))
      );
  }, []);

  return (
    <div>
      {postContent === "" ? (
        <BounceLoader
          color={isDark ? "#dae6e2" : "#11b880"}
          loading={true}
          cssOverride={override}
          size={90}
        />
      ) : (
        <div className= "bg-[#8bc2c2] dark:bg-[#012b2b] my-2 md:my-3 mx-2 p-6 md:py-20 md:pb-28 rounded-xl md:mx-6 md:px-36 shadow-xl min-h-screen">
          <article>

          <Link to="/blog" className='relative top-2 left-4 flex flex-row items-center space-x-2 text-lg hover:underline'>
            <LeftArrow className=""/><span className="">back</span></Link>

            <BlogHead post={post} />
            <main className="prose-base md:prose-xl md:prose-slate">
              <Markdown
                options={{
                  overrides: {
                    Code: {
                      component: Code,
                      props: {
                        isDark,
                      },
                    },
                    ImageHandler: {
                      component: ImageHandler,
                    },
                    Note: {
                      component: Note,
                    },
                    Space: {
                      component: Space,
                    },
                  },
                }}
              >
                {postContent}
              </Markdown>
            </main>
          </article>
        </div>
      )}
    </div>
  );
};

export default Post;
