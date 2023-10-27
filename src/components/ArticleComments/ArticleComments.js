"use client";
import React from "react";
import Comment from "@/components/Comment";

import { getComments } from "@/helpers/interview-helpers";

async function ArticleComments() {
  const comments = await getComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default ArticleComments;
