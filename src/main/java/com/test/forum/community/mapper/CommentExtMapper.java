package com.test.forum.community.mapper;

import com.test.forum.community.model.Comment;

public interface CommentExtMapper {

    int incCommentCount(Comment comment);

}