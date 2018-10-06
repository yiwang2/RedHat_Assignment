package com.redhat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.redhat.entity.Task;
import com.redhat.entity.TaskStatus;
import com.redhat.service.TaskService;

@Controller
@RequestMapping("tasks")
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	
	@GetMapping(path="/getalltasks", produces = "application/json")
	public ResponseEntity<List<Task>> getAllTasks() {
		List<Task> tasks = taskService.getAllTasks();
		return new ResponseEntity<List<Task>>(tasks, HttpStatus.OK);
	}
	
	@GetMapping(path="/getalltaskstatus", produces = "application/json")
	public ResponseEntity<List<TaskStatus>> getAllTaskStatus() {
		List<TaskStatus> taskStatus = taskService.getAllTaskStatus();
		return new ResponseEntity<List<TaskStatus>>(taskStatus, HttpStatus.OK);
	}
}
