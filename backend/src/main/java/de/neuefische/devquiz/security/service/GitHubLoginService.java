package de.neuefische.devquiz.security.service;

import de.neuefische.devquiz.security.api.GitHubApiService;
import de.neuefische.devquiz.security.model.GitHubUserDto;
import org.springframework.stereotype.Service;

import java.util.HashMap;


@Service
public class GitHubLoginService {

    private final GitHubApiService gitHubApiService;
    private final JWTUtilService jwtUtilService;

    public GitHubLoginService(GitHubApiService gitHubApiService, JWTUtilService jwtUtilService) {
        this.gitHubApiService = gitHubApiService;
        this.jwtUtilService = jwtUtilService;
    }

    public String verifyGitHubCode(String code) {
        // 1) Verify code via GitHub
        String gitHubToken = gitHubApiService.retrieveGitHubToken(code);

        // 2) Retrieve User Info
        GitHubUserDto gitHubUserDto = gitHubApiService.retrieveUserInfo(gitHubToken);

        // 3) Create JWT access token
        return jwtUtilService.createToken(new HashMap<>(), gitHubUserDto.getLogin());
    }
}