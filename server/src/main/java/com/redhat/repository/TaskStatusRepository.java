package com.redhat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redhat.entity.TaskStatus;

@Repository("taskStatusRepository")
public interface TaskStatusRepository extends JpaRepository<TaskStatus, Integer> {

}
