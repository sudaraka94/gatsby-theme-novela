import { css } from "@emotion/react";

export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }

  /**
   * Unfurl styles
   */

  a.gatsby-remark-link-unfurl__container {
    margin: 0 auto;
    font-size: 21px;
    line-height: 24px;
    font-weight: lighter;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #e1e8ed;
    overflow: hidden;
    color: #181919;
    font-family: InterUI, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    display: flex;
    text-decoration: none;
    opacity: 1;
    position: relative;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-property: background, border-color;
    will-change: background, border-color;
    flex-direction: row;
    height: 8vw;

    @media (max-width: 1024px) {
      height: 16vw;
    }

    @media (max-width: 480px) {
      height: 28vw;
    }
}

a.gatsby-remark-link-unfurl__container:hover {
    background: #f5f8fa;
    border-color: rgba(136, 153, 166, 0.5);
    outline: 0;
}

.gatsby-remark-link-unfurl__media {
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0%;
    background: transparent no-repeat center center / cover;
    display: block;
    overflow: hidden;
    height: auto;
}

.gatsby-remark-link-unfurl__content {
    display: flex;
    padding: 10px 10px;
    min-width: 0;
    box-sizing: border-box;
    flex: 0 0 55%;
    justify-content: space-around;
    flex-direction: column;
    align-items: stretch;
}

.gatsby-remark-link-unfurl__title {
    text-align: left;
    font-weight: bold;
    margin: 0;
    width: 100%;
    flex-grow: 1.2;
    font-size: 16px;
}

.gatsby-remark-link-unfurl__title p {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.gatsby-remark-link-unfurl__description {
    text-align: left;
    font-size: 14px;
    flex-grow: 2;
    margin: auto 0;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.gatsby-remark-link-unfurl__description p {
    margin: 0;
}

.gatsby-remark-link-unfurl__container footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    margin: 0;
    flex-grow: 0;
    font-size: 12px;
    width: 100%;
}

.gatsby-remark-link-unfurl__container footer p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0;
}

.gatsby-remark-link-unfurl__container footer span {
    min-width: 16px;
    width: 25px;
    height: 25px;
    background-size: contain;
}
`;
