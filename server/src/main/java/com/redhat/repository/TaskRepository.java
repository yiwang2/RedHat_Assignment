package com.redhat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redhat.entity.Task;

@Repository("taskRepository")
public interface TaskRepository extends JpaRepository<Task, Integer>{

}
