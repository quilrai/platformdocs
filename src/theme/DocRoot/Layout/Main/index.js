import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import Footer from '@theme/Footer';
import {useDocFooterEmbeddedSetter} from '@site/src/theme/DocFooterEmbeddedContext';
import styles from './styles.module.css';

export default function DocRootLayoutMain({hiddenSidebarContainer, children}) {
  const sidebar = useDocsSidebar();
  const setDocFooterEmbedded = useDocFooterEmbeddedSetter();
  const mainRef = useRef(null);
  const {pathname, hash} = useLocation();

  useEffect(() => {
    setDocFooterEmbedded(true);
    return () => setDocFooterEmbedded(false);
  }, [setDocFooterEmbedded]);

  // `.doc-main` is the scroll container (overflow-y: scroll) and lives in the
  // persistent DocRoot layout, so Docusaurus's window-level scroll-to-top never
  // resets it on navigation. Reset it ourselves on pathname change, but leave
  // hash navigation (anchor/TOC links) to position itself.
  useEffect(() => {
    if (hash) {
      return;
    }
    mainRef.current?.scrollTo({top: 0});
  }, [pathname, hash]);

  return (
    <main
      ref={mainRef}
      className={clsx(
        'doc-main',
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}>
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg doc-main__panel',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}>
        {children}
        <div className={clsx(styles.docFooter, 'doc-page-footer')}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
