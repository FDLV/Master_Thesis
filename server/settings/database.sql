CREATE DATABASE department_tasks;

CREATE TABLE departments(
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) UNIQUE,
    department_password VARCHAR(255),
    department_access VARCHAR(255)
);

CREATE TABLE tasks(
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(255),
    task_status VARCHAR(255),
    task_dateBegin DATE,
    task_dateComplete DATE,
    task_dateEnd DATE,
    task_description VARCHAR(255),
    task_departmentName VARCHAR(255),
    FOREIGN KEY (task_departmentName) REFERENCES departments (department_name)
);

CREATE TABLE descriptions(
    description_id SERIAL PRIMARY KEY,
    description_name VARCHAR(255),
    description_value VARCHAR(255),
    description_taskId INTEGER,
    FOREIGN KEY (description_taskId) REFERENCES tasks (task_id)
);