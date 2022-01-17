import { useRouter } from "next/router";
import * as React from "react";

export interface BlogDetailPageProps {}

export default function BlogDetailPage(props: BlogDetailPageProps) {
  const router = useRouter();
  return (
    <div>
      <h2>Blog detail</h2>
      <h3>{JSON.stringify(router.query)}</h3>
    </div>
  );
}
