package com.test.forum.community.mapper;

import com.test.forum.community.model.Question;

public interface QuestionExtMapper {

    int incView(Question record);
    int incCommentCount(Question record);

}