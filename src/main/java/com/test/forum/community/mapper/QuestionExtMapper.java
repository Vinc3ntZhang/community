package com.test.forum.community.mapper;

import com.test.forum.community.dto.QuestionQueryDTO;
import com.test.forum.community.model.Question;

import java.util.List;

public interface QuestionExtMapper {

    int incView(Question record);

    int incCommentCount(Question record);

    List<Question> selectRelated(Question question);


    Integer countBySearch(QuestionQueryDTO questionQueryDTO);

    List<Question> selectBySearch(QuestionQueryDTO questionQueryDTO);
}