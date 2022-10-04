import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import getNetworkTitle from 'lib/networks/getNetworkTitle';
import PrivateTags from 'ui/pages/PrivateTags';

type PageParams = {
  network_type: string;
  network_sub_type: string;
}

type Props = {
  pageParams: PageParams;
}

const AddressTagsPage: NextPage<Props> = () => {
  const title = getNetworkTitle();
  return (
    <>
      <Head><title>{ title }</title></Head>
      <PrivateTags tab="private_tags_address"/>
    </>
  );
};

export default AddressTagsPage;

export { getStaticPaths } from 'lib/next/getStaticPaths';
export { getStaticProps } from 'lib/next/getStaticProps';
