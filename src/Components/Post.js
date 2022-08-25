import { useState, useEffect } from "react";
import "./blog.css";
import Markdown from "markdown-to-jsx";
import Code from "./Code";
import ImageHandler from "./ImageHandler";
import Space from "./Space";
import Note from "./Note";
import BlogHead from "./BlogHead";
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
    borderColor: `${isDark ? "#dae6e2" : "#11b880"}`,
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
        <div className={isDark ? "article-wrapper-dark" : "article-wrapper"}>
          <article>
            <BlogHead post={post} ctx={props.ctx} />
            <main>
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
                      props: {
                        isDark,
                      },
                    },
                    Note: {
                      component: Note,
                      props: {
                        isDark,
                      },
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
