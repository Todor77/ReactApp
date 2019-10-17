package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class GroupController {

	private final Logger log = LoggerFactory.getLogger(GroupController.class);
	private GroupRepository groupRepository;

	private GroupController(GroupRepository groupRepository) {
		this.groupRepository = groupRepository;
	}

	@GetMapping("/groups")
	Collection<Group> groups() {
		return groupRepository.findAll();
	}

}
