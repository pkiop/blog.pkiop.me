import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MainTemplate from '@templates/Main';
import NotFound from '@components/UI/NotFound';

const NotFoundPage: NextPage = () => {
  return <MainTemplate contents={<NotFound />} />;
};

export default NotFoundPage;
