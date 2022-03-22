import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { extractCritical } from '@emotion/server';
// import { resetServerContext } from 'react-beautiful-dnd';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    //   const page = await ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    //    const styles = extractCritical(page.html);
    //resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

    return (
      <Html>
        <Head>
          {/* <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          /> */}
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
