import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import {python,javascript,bash,jsx} from 'react-syntax-highlighter/dist/esm/languages/prism'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { CopyIcon, PasteIcon, SunIcon, MoonIcon } from "../Assets/icons"
import "./blog.css";

const Code = ({ children, language, code,isDark}) => {
  const [isCopied, setIsCopied] = useState(false)
  const [isDarkC, setIsDark] = useState(true);

//   if(isDark===true){
//     setIsDark(true);  }
    if(language==='python'){
        SyntaxHighlighter.registerLanguage("python",python);
    }
    if(language==='javascript'){
        SyntaxHighlighter.registerLanguage("javascript",javascript);
    }
    if(language==="bash"){
        SyntaxHighlighter.registerLanguage("bash",bash);
    }
    if(language==="jsx"){
      SyntaxHighlighter.registerLanguage("jsx",jsx);
  }

  const setCopied = () => {
    setIsCopied(true);
    // navigator.clipboard.writeText(children);
    setTimeout(() => { setIsCopied(false) }, 1000);
  }
 
  return (
    <div className="code">
      <div className="code__icons">
        <button onClick={() => setIsDark(!isDarkC)}>
          {isDarkC ? <MoonIcon /> : <SunIcon />}
        </button>

        <CopyToClipboard text={code.length===0?children[0]:code}>
          <button onClick={() => setCopied()}>
            {isCopied
              ? <span title="Copied!"><PasteIcon /></span>
              : <span title="Copy to Clipboard"><CopyIcon /></span>
            }
          </button>
        </CopyToClipboard>
      </div>
           
      <SyntaxHighlighter language={language} style={isDarkC ? materialDark : materialLight}>
            {code.length===0?children[0]:code  }
      </SyntaxHighlighter>
    
     
    </div>
  )
}

export default Code