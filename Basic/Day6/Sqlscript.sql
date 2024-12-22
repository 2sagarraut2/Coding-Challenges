START TRANSACTION;
SET @@session.time_zone = '+08:00';
DROP PROCEDURE IF EXISTS updateChildAttendanceRecords;
DELIMITER //
CREATE PROCEDURE updateChildAttendanceRecords(IN child_bc varchar(255), rec_date date, atd_time timestamp, atd_status VARCHAR(255))
BEGIN
	DECLARE child_id INT;
	SET @rec_date = rec_date;
	SET @atd_time = atd_time;
	SET @atd_status = atd_status;
	SET @child_bc = child_bc;
		SELECT id INTO child_id FROM child WHERE birth_certificate = @child_bc LIMIT 1;
		IF child_id IS NOT NULL THEN
            		UPDATE class_attendance
                		SET time = @atd_time, status = @atd_status
            		WHERE date = @rec_date AND fk_child = child_id LIMIT 1;
		END IF;
END;
//
DELIMITER ;
call updateChildAttendanceRecords('T1827032Z', '2022-08-22', '2022-08-22 09:06:11', 'present');
call updateChildAttendanceRecords('T1827032Z', '2022-08-23', '2022-08-23 08:50:22', 'present');
call updateChildAttendanceRecords('T1831765B', '2022-08-22', '2022-08-22 09:35:31', 'present');
call updateChildAttendanceRecords('T1831765B', '2022-08-23', '2022-08-23 09:39:38', 'present');
DROP PROCEDURE IF EXISTS updateChildAttendanceRecords;
COMMIT ;