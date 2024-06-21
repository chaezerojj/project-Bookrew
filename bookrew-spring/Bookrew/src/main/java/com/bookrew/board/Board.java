package com.bookrew.board;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
public class Board {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String title, content;
}
