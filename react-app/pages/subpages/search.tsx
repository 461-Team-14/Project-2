import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function FirstPost() {
    return( 
      <main className={styles.main}>
      <div className={styles.center}>
      <h1>Hello Post</h1>;
      </div>
      </main>

    )
  }