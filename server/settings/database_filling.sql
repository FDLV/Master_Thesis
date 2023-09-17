-- Администратор admin
INSERT INTO departments (department_name, department_password, department_access) VALUES ('Администратор', '$2a$12$5Ge3eKlqvnjz6gGQLlHl0.1.kF36n.39RbaryeCy6J4Y3ZrkPuN8i', 'admin');

-- Бухгалтерия 12345678
INSERT INTO departments (department_name, department_password, department_access) VALUES ('Бухгалтерия', '$2a$12$i0OspTwoV65yka4xdK29HetSZzCMrj49LMoYDh60zWritxQKJLTya', 'admin');

-- Отдел продаж 11111111
INSERT INTO departments (department_name, department_password, department_access) VALUES ('Отдел продаж', '$2a$12$LYRoD0dH7yJFpB32THmsl.uN609QNAS5P3Qrh.3hTKfKec9u266jy', 'user');

-- Отдел кадров 00000000
INSERT INTO departments (department_name, department_password, department_access) VALUES ('Отдел кадров', '$2a$12$izwpe0Ocnobl6x8FVXv88e9wTRWu/e9dCShVsNnS20yaMjbunhX0i', 'user');
