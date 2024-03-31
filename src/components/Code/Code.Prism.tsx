import React, { useState } from "react";
import { Highlight, defaultProps, Language, themes } from 'prism-react-renderer'
import styled from "@emotion/styled";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Icons from "@icons";
import mediaqueries from "@styles/media";
import { copyToClipboard } from "@utils";

interface CopyProps {
  toCopy: string
}

const Copy: React.FC<CopyProps> = ({ toCopy }) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <CopyButton onClick={copyToClipboardOnClick} data-a11y="false">
      {hasCopied ? (
        <>
          Copied <Icons.Copied fill="#6f7177" />
        </>
      ) : (
        <>
          Copy <Icons.Copy fill="#6f7177" />
        </>
      )}
    </CopyButton>
  );
};

const RE = /{([\d,-]+)}/;


const CodePrism: React.FC = (props) => {
  const { props: { className, children: codeString, metastring } } = props.children;
  if (props["live"]) {
    return (
      <Container>
        <LiveProvider code={codeString} noInline={true} theme={themes.oceanicNext}>
          <LiveEditor style={{ marginBottom: "3px", borderRadius: "2px" }} />
          <LivePreview style={{ fontSize: "18px", borderRadius: "2px" }} />
          <LiveError style={{ color: "tomato" }} />
        </LiveProvider>
      </Container>
    );
  } else {
    // fallback to markup
    const language = className?.match(/(?<=language-)(\w.*?)\b/) != null ? className?.match(/(?<=language-)(\w.*?)\b/)[0] : "markup";
    return (
      <Highlight code={codeString} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => {
          return (
            <div style={{ overflow: "auto" }}>
              <pre className={className} style={{ position: "relative" }}>
                <Copy toCopy={codeString} />
                {tokens.map((line, index) => {
                  const { className } = getLineProps({ line, key: index });

                  return (
                    <div key={index} className={className}>
                      <span className="number-line">{index + 1}</span>
                      {line.map((token, key) => {
                        const { className, children } = getTokenProps({
                          token,
                          key
                        });

                        return (
                          <span key={key} className={className}>
                            {children}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </pre>
            </div>
          );
        }}
      </Highlight>
    );
  }
}

export default CodePrism;

const CopyButton = styled.button`
  position: absolute;
  right: 22px;
  top: 24px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border: 2px solid ${p => p.theme.colors.accent};
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.01);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;

const Container = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;
  font-family: ${p => p.theme.fonts.monospace} !important;

  textarea,
  pre {
    padding: 32px !important;
    font-family: ${p => p.theme.fonts.monospace} !important;
  }

  ${mediaqueries.desktop`
      left: -26px;
    `};

  ${mediaqueries.tablet`
    max-width: 526px;
    left: 0;

    textarea,
    pre {
      padding: 20px !important;
    }
  `};

  ${mediaqueries.phablet`
    border-radius: 0;
    margin: 0 auto 25px;
    overflow: initial;
    width: unset;
    max-width: unset;
    float: left;
    min-width: 100%;
    overflow: initial;
    position: relative;
  `};
`;
