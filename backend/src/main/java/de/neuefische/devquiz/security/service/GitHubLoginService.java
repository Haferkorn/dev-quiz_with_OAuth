package de.neuefische.devquiz.security.service;

import de.neuefische.devquiz.security.api.GitHubApiService;
import de.neuefische.devquiz.security.model.GitHubUserDto;
import org.springframework.stereotype.Service;

@Service
public class GitHubLoginService {

    private final GitHubApiService gitHubApiService;

    public GitHubLoginService(GitHubApiService gitHubApiService) {
        this.gitHubApiService = gitHubApiService;
    }

    public String verifyGitHubCode(String code) {
        // 1) Verify code via GitHub
        String gitHubToken = gitHubApiService.retrieveGitHubToken(code);

        // 2) Retrieve User Info
        GitHubUserDto gitHubUserDto = gitHubApiService.retrieveUserInfo(gitHubToken);
        // 3) Create JWT access token

        // TODO
        return "JWT!";
    }
}