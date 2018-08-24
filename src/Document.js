import ast from "idyll-ast";
import * as builtInComponents from "idyll-components";
import color from "@khanacademy/wonder-blocks-color";
import IdyllDocument from "idyll-document";
import Link from "@khanacademy/wonder-blocks-link";
import React, { Fragment } from "react";
import Tooltip from "@khanacademy/wonder-blocks-tooltip";
import { MediaLayout } from "@khanacademy/wonder-blocks-core";
import { Row, Cell } from "@khanacademy/wonder-blocks-grid";
import { StyleSheet, css } from "aphrodite";
import { styles as textStyles } from "@khanacademy/wonder-blocks-typography";

const mobileQuery = "@media (max-width: 767px)";

const styles = StyleSheet.create({
  noPosition: {
    position: "unset"
  },

  root: {
    color: color.offBlack
  },

  imageBlock: {
    width: "100%",
    marginBottom: "1rem",
    [mobileQuery]: {
      maxWidth: 640
    }
  },

  imageBlockBorder: {
    borderRadius: 4,
    border: `1px solid ${color.offBlack16}`
  },

  authors: {
    opacity: 0.66,
    marginBottom: 2
  },

  authorsDisclaimer: {
    opacity: 0.32
  },

  authorLink: {
    textDecoration: "none",
    color: color.offBlack,

    [":hover"]: {
      textDecoration: "underline"
    }
  },

  logoContainer: {
    top: 32,
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    margin: "0 auto",
    textAlign: "center",

    [mobileQuery]: {
      left: 16,
      top: 24,
      transform: "unset",
      margin: "0"
    }
  },

  // titleContainer: {
  //   marginBottom: 32,
  // },

  heroContainer: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",

    marginTop: 96,
    height: 467,
    [mobileQuery]: {
      marginTop: 72,
      height: 375,
      width: "calc(100% - 32px)",
      marginLeft: 16,
      marginRight: 16,
      textAlign: "left"
    }
  },

  heroImage: {
    marginTop: 55,
    position: "absolute",
    left: 0,
    width: "100%",
    height: 413,
    background: "url(images/heading.png) no-repeat",
    backgroundSize: "1089px 413px",
    backgroundPosition: "top center",
    zIndex: -1,
    ["@media (max-width: 1070px)"]: {
      backgroundPosition: "top left",
    },
    [mobileQuery]: {
      backgroundPosition: "top center",
      backgroundSize: "680px 258px",
      marginTop: 120
    },
    ["@media (max-width: 650px)"]: {
      backgroundPosition: "top left"
    }
  },

  heroTitle: {
    marginBottom: "0.5em"
  },

  keyQuoteContainer: {
    marginTop: "1rem",
    marginBottom: "4rem",
    textAlign: "center",
    marginLeft: 32,
    marginRight: 32,
    [mobileQuery]: {
      marginTop: 0,
      marginBottom: "2.5rem"
    }
  },

  keyQuote: {
    lineHeight: 1.38
  },

  clearContainer: {
    position: "absolute",
    width: "100%",
    left: 0
  },

  abstractContainer: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: `1px solid ${color.offBlack16}`
  },

  sizingContainerOuter: {
    position: "relative",
    maxWidth: "100%",
    overflowX: "hidden",
    visibility: "hidden"
  },

  sizingContainerInner: {
    width: "100vw"
  },

  twoUpImage: {
    marginTop: 36,
    width: "100%",
    [mobileQuery]: {
      marginTop: 0
    }
  },

  citationNumber: {
    fontSize: "70%",
    display: "inline-block",
    position: "relative",
    top: -6,
    height: 0,
    overflow: "visible"
    /*["::before"]: {
      content: '", "'
    },
    [":first-of-type"]: {
      ["::before"]: {
        content: "unset"
      }
    }*/
  },

  asideCitation: {
    fontSize: "80%",
    position: "absolute",
    display: "inline-block",
    marginLeft: -24 - 4,
    width: 24,
    textAlign: "right",
    marginTop: -4
  },

  asideParagraph: {
    [mobileQuery]: {
      opacity: 0.66
    }
  },

  mobileAside: {
    maxWidth: 352,
    marginLeft: "auto",
    marginRight: "auto"
  },

  citationContainer: {
    opacity: 0.66,
    marginBottom: 8
  },

  blockquote: {
    marginLeft: 32
  },

  table: {
    borderSpacing: "16px 16px",
    borderCollapse: "separate",
    margin: "0px -16px 1rem -16px",
    borderRadius: 4,
    backgroundColor: color.offWhite,
    width: "calc(100% + 16px * 2)"
  },

  tableCell: {
    display: "table-cell",
    padding: 0,
    verticalAlign: "top",
    [mobileQuery]: {
      hyphens: "auto",
      fontSize: 12,
      lineHeight: "1.5"
    }
  },

  hairline: {
    height: 1,
    backgroundColor: color.offBlack16,
    marginTop: "1.5rem",
    marginBottom: "1.5rem"
  },

  hideOnMobile: {
    [mobileQuery]: {
      display: "none"
    }
  },

  hideUnlessMobile: {
    display: "none",
    [mobileQuery]: {
      display: "block"
    }
  },

  hairlineDashes: {
    backgroundImage: "url(images/hairline.svg)",
    height: 65,
    marginTop: "1.5rem",
    marginBottom: "0rem",

    [mobileQuery]: {
      marginTop: 0,
      marginBottom: -20
    }
  }
});

const MobileDesktopVariant = ({ mobileChildren, desktopChildren }) => (
  <Fragment>
    <div className={css(styles.hideOnMobile)}>{desktopChildren}</div>
    <div className={css(styles.hideUnlessMobile)}>{mobileChildren}</div>
  </Fragment>
);

const Logo = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<a data-test-id="header-logo" href="https://khanacademy.org" aria-label="Khan Academy" class="pad_hvrboe-o_O-navItem_9vq2q-o_O-navItemWhenOpaque_14q51ze-o_O-wonderBlocksNavItem_eijtp7-o_O-logo_djpwtp"><svg class="logoSvg_1pnxex7" aria-hidden="true" width="176px" height="28px" viewBox="0 0 176 28" style="fill: #0a2a66"><path d="M33.66,6.5A.54.54,0,0,1,34.21,6h2a.55.55,0,0,1,.55.55v6.2l5.79-6.52A.53.53,0,0,1,43,6h2.3a.48.48,0,0,1,.36.82l-6,6.75,6.43,7.69a.51.51,0,0,1-.41.81h-2.5a.55.55,0,0,1-.42-.16l-6-7.4v7a.56.56,0,0,1-.55.56h-2a.55.55,0,0,1-.55-.56Z"></path><path d="M47.78,6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5v5.63a4.07,4.07,0,0,1,2.7-.9c3.38,0,4.3,2.34,4.3,5v5.32a.53.53,0,0,1-.51.51H55.28a.51.51,0,0,1-.5-.51V16.16c0-1.47-.67-2.36-1.93-2.36a2.18,2.18,0,0,0-2.2,1.86v5.85c0,.3-.14.51-.56.51H48.28a.52.52,0,0,1-.5-.51Z"></path><path d="M63.48,15.31a7.7,7.7,0,0,1,2,.3c0-1.35-.34-2-1.47-2a13.49,13.49,0,0,0-3,.39c-.35.12-.55-.13-.6-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.31,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.51.51h-.78c-.18,0-.32-.07-.46-.37l-.3-.71a4.66,4.66,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C59.25,16.76,60.79,15.31,63.48,15.31Zm.07,4.82A2.27,2.27,0,0,0,65.45,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.4,1.4,0,0,0,63.55,20.13Z"></path><path d="M70.59,11.92a.51.51,0,0,1,.51-.51H72a.42.42,0,0,1,.44.32l.39,1a4.26,4.26,0,0,1,3.42-1.54c3.37,0,4.24,2.27,4.24,4.84v5.49A.52.52,0,0,1,80,22H78.1a.51.51,0,0,1-.51-.51V16c0-1.37-.55-2.22-1.83-2.22a2.34,2.34,0,0,0-2.3,1.65v6.06c0,.39-.16.51-.66.51H71.1a.53.53,0,0,1-.51-.51Z"></path><path d="M85.89,21.42,93,6a.4.4,0,0,1,.39-.25h.23A.39.39,0,0,1,94,6l7.07,15.45a.41.41,0,0,1-.39.6h-2a.66.66,0,0,1-.67-.46l-1.12-2.48H90.07l-1.13,2.48a.69.69,0,0,1-.66.46h-2A.4.4,0,0,1,85.89,21.42Zm9.91-4.89-2.29-5.05h-.07l-2.25,5.05Z"></path><path d="M107,11.18A5.24,5.24,0,0,1,111,13c.23.23.12.53-.11.76l-1,1.06c-.23.25-.48.13-.69-.07a2.84,2.84,0,0,0-2.11-.92,2.78,2.78,0,0,0-2.8,2.91,2.77,2.77,0,0,0,2.78,2.94,2.81,2.81,0,0,0,2.25-1.17.5.5,0,0,1,.66-.07l1,.87c.25.23.37.49.18.76a4.75,4.75,0,0,1-4.2,2.23,5.55,5.55,0,1,1,0-11.09Z"></path><path d="M116.83,15.31a7.82,7.82,0,0,1,2,.3c0-1.35-.35-2-1.47-2a13.5,13.5,0,0,0-3,.39c-.34.12-.55-.13-.59-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.3,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.5.51h-.78c-.19,0-.32-.07-.46-.37l-.3-.71a4.68,4.68,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C112.61,16.76,114.15,15.31,116.83,15.31Zm.07,4.82A2.29,2.29,0,0,0,118.81,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.39,1.39,0,0,0,116.9,20.13Z"></path><path d="M128.62,11.18a7.67,7.67,0,0,1,2.55.44V6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5V21.51a.51.51,0,0,1-.51.51h-.85c-.25,0-.41-.21-.5-.51l-.28-.83a4.55,4.55,0,0,1-3.46,1.59c-2.9,0-5.08-2.34-5.08-5.56A5.21,5.21,0,0,1,128.62,11.18Zm2.55,3.22a4.18,4.18,0,0,0-2.21-.6,2.68,2.68,0,0,0-2.64,2.91c0,1.5.85,2.94,2.51,2.94a2.43,2.43,0,0,0,2.34-1.47Z"></path><path d="M141.22,11.18a4.75,4.75,0,0,1,4.87,4.91c0,.16,0,.53-.05.69a.53.53,0,0,1-.5.48h-6.8a2.55,2.55,0,0,0,2.64,2.46,3.49,3.49,0,0,0,2.27-.78c.26-.21.53-.23.69,0l.9,1.19a.45.45,0,0,1-.05.69,6,6,0,0,1-3.95,1.45,5.37,5.37,0,0,1-5.37-5.56A5.37,5.37,0,0,1,141.22,11.18Zm2,4.2a1.94,1.94,0,0,0-2-1.83,2.11,2.11,0,0,0-2.25,1.83Z"></path><path d="M147.79,11.92a.51.51,0,0,1,.5-.51h.83a.4.4,0,0,1,.43.3l.39,1a4,4,0,0,1,3.24-1.54,3.61,3.61,0,0,1,3.17,1.61,4.53,4.53,0,0,1,3.42-1.61c3.39,0,4.2,2.16,4.2,4.91v5.42a.52.52,0,0,1-.53.51H161.6a.51.51,0,0,1-.5-.51V16c0-1.37-.51-2.22-1.84-2.22a2,2,0,0,0-2,1.1s0,.53,0,1v5.6a.52.52,0,0,1-.5.51H155a.5.5,0,0,1-.51-.51V16c0-1.37-.39-2.22-1.74-2.22a2.1,2.1,0,0,0-2,1.65v6.06a.52.52,0,0,1-.5.51h-1.86a.52.52,0,0,1-.5-.51Z"></path><path d="M165.07,12.1a.47.47,0,0,1,.46-.69h2.2a.42.42,0,0,1,.44.3l1.9,6.33h.05l2.41-6.33c.16-.28.34-.3.67-.3h2a.47.47,0,0,1,.46.69l-6.25,15.06a.53.53,0,0,1-.46.32h-2.2a.48.48,0,0,1-.46-.71l2.13-5.37Z"></path><path fill="#14bf96" d="M2.31,5.8A3.56,3.56,0,0,0,.66,8.6V19.4a3.56,3.56,0,0,0,1.65,2.8L12,27.62a3.75,3.75,0,0,0,3.3,0L25,22.2a3.56,3.56,0,0,0,1.65-2.8V8.6A3.56,3.56,0,0,0,25,5.8L15.31.38a3.75,3.75,0,0,0-3.3,0Z"></path><path fill="#ffffff" d="M23.61,11.32c-5.38,0-9.4,4.46-9.4,9.93v.23H13.13v-.23c0-5.47-4-9.91-9.42-9.93,0,.34,0,.69,0,1a9.91,9.91,0,0,0,6.4,9.32,10.47,10.47,0,0,0,3.59.64,10.64,10.64,0,0,0,3.62-.64,9.92,9.92,0,0,0,6.39-9.32C23.66,12,23.64,11.66,23.61,11.32Z"></path><circle fill="#ffffff" cx="13.66" cy="8.74" r="3"></circle></svg></a>`
    }}
  />
);

const Title = ({ title, authors, date }) => (
  <ClearDisplay>
    {() => (
      <div className={css(styles.titleContainer)}>
        <div className={css(styles.logoContainer)}>
          <Logo />
        </div>
        <div className={css(styles.heroContainer)}>
          <div className={css(styles.heroImage)} />
          <div className={css(textStyles.Title, styles.heroTitle)}>{title}</div>
          <div className={css(styles.authors, textStyles.LabelMedium)}>
            {authors.map(({ name, link }, index) => (
              <Fragment>
                {index > 0 ? ", " : ""}
                <a href={link} className={css(styles.authorLink)}>
                  {name}
                </a>
              </Fragment>
            ))}
          </div>
          <div className={css(styles.authorsDisclaimer, textStyles.Caption)}>
            Authors listed alphabetically. {date}.
          </div>
        </div>
      </div>
    )}
  </ClearDisplay>
);

const Abstract = ({ children }) => (
  <MediaLayout>
    <div className={css(styles.abstractContainer, styles.clearContainer)}>
      <Row style={styles.noPosition}>
        <Cell largeCols={2} mediumCols={1} smallCols={0} />
        <Cell largeCols={8} mediumCols={6} smallCols={4}>
          {children}
        </Cell>
      </Row>
    </div>
    <div
      className={css(
        styles.abstractContainer,
        styles.clearContainer,
        styles.sizingContainerOuter
      )}
    >
      <div className={css(styles.sizingContainerInner)}>
        <Row style={styles.noPosition}>
          <Cell largeCols={2} mediumCols={1} smallCols={0} />
          <Cell largeCols={8} mediumCols={6} smallCols={4}>
            {children}
          </Cell>
        </Row>
      </div>
    </div>
  </MediaLayout>
);

const KeyQuote = ({ children }) => (
  <div className={css(styles.keyQuoteContainer)}>
    <h2 className={css(textStyles.HeadingSmall)}>Our challenge:</h2>
    <div className={css(textStyles.Tagline, styles.keyQuote)}>{children}</div>
  </div>
);

const Aside = ({ children }) => (
  <div
    style={{ position: "absolute", width: "100%", zIndex: -1, left: 0 }}
    className={css(textStyles.Footnote, styles.hideOnMobile)}
  >
    <MediaLayout>
      <Row style={styles.noPosition}>
        <Cell largeCols={8} mediumCols={5} smallCols={4} />
        <Cell largeCols={4} mediumCols={3} smallCols={0}>
          {children}
        </Cell>
      </Row>
    </MediaLayout>
  </div>
);

const MobileAside = ({ children }) => (
  <div
    className={css(
      textStyles.Footnote,
      styles.mobileAside,
      styles.hideUnlessMobile
    )}
  >
    {children}
  </div>
);

const Citation = ({ number, children }) => (
  <div
    className={css(
      textStyles.Footnote,
      styles.citationContainer,
      styles.hideOnMobile
    )}
  >
    <div className={css(styles.asideCitation)}>{number}</div>
    {children}
  </div>
);

const CitationRef = ({ number, hidden, citationText }) =>
  !hidden && (
    <div className={css(styles.citationNumber)}>
      <MobileDesktopVariant
        mobileChildren={
          <Tooltip content={citationText}>{number.toString()}</Tooltip>
        }
        desktopChildren={number}
      />
    </div>
  );

const InlineAside = ({ children }) => (
  <div className={css(textStyles.Footnote)}>{children}</div>
);

const SemiHairline = () => <div className={css(styles.hairline)} />;

const Hairline = () => (
  <AcrossAllColumns>
    {() => <div className={css(styles.imageBlock, styles.hairlineDashes)} />}
  </AcrossAllColumns>
);

const ClearDisplay = ({ children }) => (
  <MediaLayout>
    <div className={css(styles.clearContainer)}>{children()}</div>
    <div className={css(styles.clearContainer, styles.sizingContainerOuter)}>
      <div className={css(styles.sizingContainerInner)}>{children()}</div>
    </div>
  </MediaLayout>
);

const MobileAltImage = ({ desktopURL, mobileURL, alt }) => (
  <MobileDesktopVariant
    mobileChildren={
      <img src={mobileURL} alt={alt} className={css(styles.imageBlock)} />
    }
    desktopChildren={
      <img src={desktopURL} alt={alt} className={css(styles.imageBlock)} />
    }
  />
);

const AcrossAllColumns = ({ children }) => (
  <ClearDisplay>
    {() => (
      <Row style={styles.noPosition}>
        <Cell largeCols={12} mediumCols={8} smallCols={4}>
          {children}
        </Cell>
      </Row>
    )}
  </ClearDisplay>
);

const RawTable = ({ children }) => (
  <table className={css(styles.table)}>{children}</table>
);

const TwoUpImage = ({ heading, imageURL, altText, children }) => (
  <ClearDisplay>
    {() => (
      <Row style={styles.noPosition}>
        <Cell largeCols={6} mediumCols={4} smallCols={0}>
          <h2 className={css(textStyles.HeadingMedium, styles.hideOnMobile)}>
            {heading}
          </h2>
          {children}
        </Cell>
        <Cell largeCols={6} mediumCols={4} smallCols={4}>
          <h2
            className={css(textStyles.HeadingMedium, styles.hideUnlessMobile)}
          >
            {heading}
          </h2>
          <img
            src={imageURL}
            alt={altText}
            className={css(
              styles.twoUpImage,
              styles.imageBlock,
              styles.imageBlockBorder
            )}
          />
          <div
            className={css(textStyles.HeadingMedium, styles.hideUnlessMobile)}
          >
            {children}
          </div>
        </Cell>
      </Row>
    )}
  </ClearDisplay>
);

/*
   Configuration bits here!
   ========================
*/

const documentName = "main.idyll";

const components = {
  ...builtInComponents,
  Abstract,
  AcrossAllColumns,
  Aside,
  Citation,
  CitationRef,
  Hairline,
  KeyQuote,
  InlineAside,
  Link,
  MobileAside,
  RawTable,
  SemiHairline,
  Title,
  TwoUpImage,
  MobileAltImage
  /* Add any custom components you want to use here. */
};

//===========================================================================

const postProcessor = inputAST => {
  let transformedAST = inputAST;

  let citationCount = 1;
  let citationContents = {};
  transformedAST = ast.modifyNodesByName(transformedAST, "Citation", node => {
    node = ast.setProperty(node, "number", citationCount);
    citationContents[citationCount] = node[2];
    citationCount++;
    return node;
  });

  citationCount = 1;
  transformedAST = ast.modifyNodesByName(
    transformedAST,
    "CitationRef",
    node => {
      node = ast.setProperty(node, "number", citationCount);
      node = ast.setProperty(
        node,
        "citationText",
        citationContents[citationCount][0][2].reduce((acc, current) => {
          if (typeof current === "string") {
            return acc + current;
          } else {
            return acc + current[2][0];
          }
        }, "")
      );
      citationCount++;
      return node;
    }
  );

  transformedAST = ast.modifyNodesByName(transformedAST, "a", node => {
    node[0] = "Link";
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "img", node => {
    const hasBorder = !/-noborder/.test(ast.getProperty(node, "src"));
    node = ast.setProperty(
      node,
      "className",
      css(styles.imageBlock, hasBorder && styles.imageBlockBorder)
    );
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "p", node => {
    node = ast.setProperty(node, "className", css(textStyles.Body));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "blockquote", node => {
    node = ast.setProperty(
      node,
      "className",
      css(textStyles.Body, styles.blockquote)
    );
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "ol", node => {
    node = ast.setProperty(node, "className", css(textStyles.Body));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "ul", node => {
    node = ast.setProperty(node, "className", css(textStyles.Body));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "td", node => {
    node = ast.setProperty(
      node,
      "className",
      css(textStyles.Body, styles.tableCell)
    );
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "h1", node => {
    node = ast.setProperty(node, "className", css(textStyles.HeadingLarge));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "h2", node => {
    node = ast.setProperty(node, "className", css(textStyles.HeadingMedium));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "h3", node => {
    node = ast.setProperty(node, "className", css(textStyles.HeadingSmall));
    return node;
  });

  transformedAST = ast.modifyNodesByName(transformedAST, "Aside", node => {
    if (node[2].length === 1 && typeof node[2][0] === "string") {
      node[2][0] = ast.createNode(
        "p",
        { className: css(styles.asideParagraph) },
        [node[2][0]]
      );
    } else {
      node[2] = ast.modifyNodesByName(node[2], "p", innerNode => {
        return ast.setProperty(
          innerNode,
          "className",
          css(styles.asideParagraph)
        );
      });
    }
    return node;
  });

  let swapAsides;
  swapAsides = childrenList => {
    if (!childrenList) {
      return childrenList;
    }
    const output = [];
    for (let index = 0; index < childrenList.length; index++) {
      const child = childrenList[index];
      if (ast.getChildren(child).length > 0) {
        child[2] = swapAsides(child[2]);
      }

      if (Array.isArray(child) && child[0] === "Aside") {
        output.splice(output.length - 1, 0, child);
        const mobileAside = [...child];
        mobileAside[0] = "MobileAside";
        output.push(mobileAside);
      } else {
        output.push(child);
      }
    }
    return output;
  };
  transformedAST[0][2] = swapAsides(transformedAST[0][2]);

  transformedAST = ast.modifyNodesByName(transformedAST, "Citation", node => {
    node[2] = ast.modifyNodesByName(node[2], "Link", innerNode => {
      return ast.setProperty(innerNode, "kind", "secondary");
    });
    return node;
  });

  return transformedAST;
};

const Document = ({ documents }) => (
  <div className={css(styles.root)}>
    <MediaLayout>
      <Row style={styles.noPosition}>
        <Cell
          largeCols={7}
          mediumCols={5}
          smallCols={4}
          style={styles.noPosition}
        >
          <IdyllDocument
            markup={documents.get(documentName)}
            components={components}
            layout="none"
            compilerOptions={{
              postProcessors: [postProcessor]
            }}
          />
        </Cell>
      </Row>
    </MediaLayout>
  </div>
);

export default Document;
