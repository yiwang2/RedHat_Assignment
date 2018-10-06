package com.redhat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.redhat.entity.Task;
import com.redhat.entity.TaskStatus;
import com.redhat.repository.TaskRepository;
import com.redhat.repository.TaskStatusRepository;

@Service("taskService")
public class TaskService {
	
	
	private TaskRepository taskRepository;
	private TaskStatusRepository taskStatusRepository;
	
    @Autowired
    public TaskService(TaskRepository taskRepository, TaskStatusRepository taskStatusRepository) {
        this.taskRepository = taskRepository;
        this.taskStatusRepository = taskStatusRepository;
    }
    
    public List<Task> getAllTasks () {
    	return taskRepository.findAll();
    }
    
    public List<TaskStatus> getAllTaskStatus() {
    	return this.taskStatusRepository.findAll();
    }
}
