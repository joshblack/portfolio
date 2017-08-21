import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion/server';
import {flush} from 'emotion';

const __DEV__ = process.env.NODE_ENV !== 'production';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    if (__DEV__) {
      flush();
    }
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {
      ...page,
      ...styles,
    };
  }

  constructor(props) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Josh Black</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
