import React from 'react';
import Link from 'next/link';

export default function Blogpage() {
  return (
    <div>
      
      <Link href="/blog/Computer-Sciences">Computer Sciences</Link><br />
      <Link href="/blog/Mathematics">Mathematics</Link><br />
      <Link href="/blog/Physics">Physics</Link><br />
      <Link href="/blog/Biology">Biology</Link>
    </div>
  )
}
