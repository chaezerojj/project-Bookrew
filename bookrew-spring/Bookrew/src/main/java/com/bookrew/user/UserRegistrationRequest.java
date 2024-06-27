package com.bookrew.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationRequest {
	private String userId, password, email, name;
}

