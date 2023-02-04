package com.chatgpt.ChatGpt.Response;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class ChatGptResponse {
	private String id;
    private String object;
    private String model;
    private LocalDate created;
    private List<Choice> choices;
}
