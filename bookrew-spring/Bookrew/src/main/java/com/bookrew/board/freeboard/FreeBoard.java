package com.bookrew.board.freeboard;

import com.bookrew.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
public class FreeBoard {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String title, content;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User userId;
}
