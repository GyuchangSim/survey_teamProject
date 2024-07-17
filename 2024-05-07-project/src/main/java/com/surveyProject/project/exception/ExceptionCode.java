package com.surveyProject.project.exception;

import lombok.Getter;

public enum ExceptionCode {

	PAY_CANCEL(404, "Pay Cancel"),
	PAY_FAILED(404, "Pay Failed");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
