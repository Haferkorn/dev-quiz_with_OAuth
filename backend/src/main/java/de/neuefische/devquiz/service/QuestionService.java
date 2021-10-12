package de.neuefische.devquiz.service;

import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepo questionRepo;

    @Autowired
    public QuestionService(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    public List<Question> getAllQuestions() {
        return questionRepo.getAllQuestions();
    }

    public Question addQuestion(Question newQuestion){
        return questionRepo.addQuestion(newQuestion);
    }


    public Question get(String id) {
        Optional<Question> optionalQuestion = questionRepo.get(id);

        if (optionalQuestion.isEmpty()) {
            throw new NoSuchElementException();
        }

        return optionalQuestion.get();
    }
}
